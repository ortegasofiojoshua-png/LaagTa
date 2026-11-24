
// ==========================================
// DESTINATION DATA
// ==========================================

const destinationData = {
    "dahilayan-adventure-park": {
        name: "Dahilayan Adventure Park",
        location: "Dahilayan, Manolo Fortich, Bukidnon",
        description: "Dahilayan Forest Park is a nature and adventure destination located in Barangay Dahilayan, Manolo Fortich, Bukidnon. Known for its cool mountain climate, lush forest surroundings, and scenic landscapes, it offers visitors a place to enjoy outdoor recreation and experience the natural beauty of the highlands. The destination is part of the Dahilayan tourism area, which features various recreational attractions and outdoor activities suitable for families, friends, and adventure enthusiasts. Its mountain setting and refreshing atmosphere make it an ideal destination for sightseeing, leisure, and outdoor exploration.",
        search: "Dahilayan Adventure Park, Manolo Fortich, Bukidnon",
        folder: "dahilayan-adventure-park",
        photos: ["1.avif", "2.jpg", "3.jpg", "4.jpg", "adventure.jpg", "entrance.jpg", "nightView.jpg"]
    },

    "kampojuan": {
        name: "KampoJuan Eco-Adventure Farm",
        location: "Manolo Fortich, Bukidnon",
        description: "KampoJuan Eco-Adventure Farm is an eco-adventure destination that combines outdoor recreation with a natural farm environment. It offers visitors a place to enjoy activities and explore the outdoors.",
        search: "KampoJuan Eco Adventure Farm, Manolo Fortich, Bukidnon",
        folder: "kampojuan",
        photos: ["1.jpg", "2.jpg", "3.jpg"]
    },

    "del-monte": {
        name: "Del Monte Pineapple Plantation and Monument",
        location: "Manolo Fortich, Bukidnon",
        description: "The Del Monte Pineapple Plantation is associated with the agricultural landscape of Bukidnon. The plantation and its monument are notable landmarks connected to the area's pineapple industry.",
        search: "Del Monte Pineapple Plantation Monument, Manolo Fortich, Bukidnon",
        folder: "del-monte",
        photos: ["1.jpg", "2.jpg", "3.jpg"]
    },

    "macarthur-landmark": {
        name: "General Douglas MacArthur Landmark",
        location: "Manolo Fortich, Bukidnon",
        description: "This landmark commemorates General Douglas MacArthur and serves as a historical point of interest in Manolo Fortich. Visitors can learn about its connection to local and Philippine history.",
        search: "General Douglas MacArthur Landmark, Manolo Fortich, Bukidnon",
        folder: "macarthur-landmark",
        photos: ["1.jpg", "2.jpg", "3.jpg"]
    },

    "mangima-heroes-shrine": {
        name: "Mangima Heroes Shrine",
        location: "Mangima, Manolo Fortich, Bukidnon",
        description: "Mangima Heroes Shrine is a historical memorial that honors heroes and commemorates events from the past. It is a place of remembrance and historical interest.",
        search: "Mangima Heroes Shrine, Manolo Fortich, Bukidnon",
        folder: "mangima-heroes-shrine",
        photos: ["1.jpg", "2.jpg", "3.jpg"]
    }
};


// ==========================================
// GLOBAL VARIABLES
// ==========================================

let map;
let destinationMarker;
let userMarker;
let routeLine;

let currentPhotoIndex = 0;
let currentDestination;
let destinationCoordinates = null;
let destinationPromise = null;

let autoSlideTimer = null;


// ==========================================
// LOAD DESTINATION
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const destinationKey = document.body.dataset.destination;

    currentDestination = destinationData[destinationKey];

    if (!currentDestination) {
        document.body.textContent = "Destination not found.";
        return;
    }

    displayDestination();
    initializeMap();
    setupButtons();

    // Load destination coordinates.
    destinationPromise = locateDestination();

});


// ==========================================
// DISPLAY DESTINATION INFORMATION
// ==========================================

function displayDestination() {

    document.getElementById("destinationName").textContent =
        currentDestination.name;

    document.getElementById("destinationLocation").textContent =
        currentDestination.location;

    document.getElementById("destinationDescription").textContent =
        currentDestination.description;

    showPhoto();

}


// ==========================================
// IMAGE SLIDESHOW
// ==========================================

function showPhoto() {

    const photo = currentDestination.photos[currentPhotoIndex];

    const destinationImage =
        document.getElementById("destinationPhoto");

    const imagePath =
        "../images/destinations/" +
        currentDestination.folder + "/" + photo;

    destinationImage.alt =
        currentDestination.name + " photo " +
        (currentPhotoIndex + 1);

    const newImage = new Image();

    newImage.onload = function () {

        destinationImage.src = imagePath;

        destinationImage.classList.remove("fade-in");

        void destinationImage.offsetWidth;

        destinationImage.classList.add("fade-in");

    };

    newImage.onerror = function () {

        console.error("Unable to load image:", imagePath);

    };

    newImage.src = imagePath;

    document.getElementById("photoCounter").textContent =
        (currentPhotoIndex + 1) + " / " +
        currentDestination.photos.length;

}


// NEXT PHOTO
function nextPhoto() {

    currentPhotoIndex++;

    if (currentPhotoIndex >= currentDestination.photos.length) {
        currentPhotoIndex = 0;
    }

    showPhoto();

}


// PREVIOUS PHOTO
function previousPhoto() {

    currentPhotoIndex--;

    if (currentPhotoIndex < 0) {
        currentPhotoIndex = currentDestination.photos.length - 1;
    }

    showPhoto();

}


// AUTOMATIC SLIDESHOW
function startAutoSlide() {

    clearInterval(autoSlideTimer);

    if (currentDestination.photos.length <= 1) {
        return;
    }

    autoSlideTimer = setInterval(function () {

        nextPhoto();

    }, 3000);

}


// ==========================================
// BUTTON SETUP
// ==========================================

function setupButtons() {

    document.getElementById("nextPhoto")
        .addEventListener("click", function () {

            nextPhoto();
            startAutoSlide();

        });


    document.getElementById("previousPhoto")
        .addEventListener("click", function () {

            previousPhoto();
            startAutoSlide();

        });


    document.getElementById("showMyLocationBtn")
        .addEventListener("click", getCurrentLocation);


    document.getElementById("clearRouteBtn")
        .addEventListener("click", clearRoute);


    startAutoSlide();

}


// PAUSE SLIDESHOW WHEN TAB IS HIDDEN

document.addEventListener("visibilitychange", function () {

    if (document.hidden) {

        clearInterval(autoSlideTimer);

    } else if (currentDestination) {

        startAutoSlide();

    }

});


// ==========================================
// INITIALIZE LEAFLET MAP
// ==========================================

function initializeMap() {

    if (typeof L === "undefined") {

        document.getElementById("locationStatus").textContent =
            "Map library could not be loaded. Check your internet connection.";

        return;

    }

    map = L.map("map").setView([8.369, 124.865], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {

        maxZoom: 19,

        attribution: "&copy; OpenStreetMap contributors"

    }).addTo(map);


    map.on("click", function (event) {

        const lat = event.latlng.lat;
        const lng = event.latlng.lng;

        L.popup()
            .setLatLng(event.latlng)
            .setContent(
                "Latitude: " + lat.toFixed(5) +
                "<br>Longitude: " + lng.toFixed(5)
            )
            .openOn(map);

    });

}


// ==========================================
// LOCATE DESTINATION
// ==========================================

async function locateDestination() {

    const status =
        document.getElementById("locationStatus");

    status.textContent = "Finding destination location...";

    const url =
        "https://nominatim.openstreetmap.org/search?format=json&limit=1&q=" +
        encodeURIComponent(currentDestination.search);

    try {

        const response = await fetch(url);

        if (!response.ok) {

            throw new Error(
                "The destination search service is unavailable."
            );

        }

        const results = await response.json();

        if (!Array.isArray(results) || results.length === 0) {

            throw new Error(
                "Destination coordinates could not be found."
            );

        }

        const lat = Number(results[0].lat);
        const lng = Number(results[0].lon);

        if (!Number.isFinite(lat) || !Number.isFinite(lng)) {

            throw new Error("Invalid destination coordinates.");

        }

        destinationCoordinates = [lat, lng];

        map.setView(destinationCoordinates, 15);

        if (destinationMarker) {
            map.removeLayer(destinationMarker);
        }

        destinationMarker = L.marker(destinationCoordinates)
            .addTo(map)
            .bindPopup("<b>" + currentDestination.name + "</b>");

        status.textContent = "Destination location loaded.";

        return destinationCoordinates;

    } catch (error) {

        console.error("Destination lookup error:", error);

        status.textContent = error.message;

        throw error;

    }

}


// ==========================================
// GET CURRENT GPS LOCATION
// ==========================================

function getCurrentLocation() {

    const status =
        document.getElementById("locationStatus");

    // GPS requires HTTPS or localhost.

    if (!window.isSecureContext) {

        status.textContent =
            "GPS requires HTTPS or localhost. Please use Live Server.";

        return;

    }

    if (!navigator.geolocation) {

        status.textContent =
            "GPS is not supported by this browser.";

        return;

    }

    status.textContent =
        "Requesting your current location...";


    navigator.geolocation.getCurrentPosition(

        async function (position) {

            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            if (!Number.isFinite(lat) || !Number.isFinite(lng)) {

                status.textContent =
                    "Invalid GPS coordinates.";

                return;

            }

            const userCoordinates = [lat, lng];


            // REMOVE OLD USER MARKER

            if (userMarker) {

                map.removeLayer(userMarker);

            }


            // ADD CURRENT LOCATION MARKER

            userMarker = L.marker(userCoordinates)
                .addTo(map)
                .bindPopup("Your current location")
                .openPopup();


            status.textContent =
                "Your location was found. Preparing your route...";


            try {

                // IMPORTANT FIX:
                // Wait until destination coordinates are available.

                if (!destinationCoordinates) {

                    await destinationPromise;

                }

                if (!destinationCoordinates) {

                    throw new Error(
                        "Destination coordinates are unavailable."
                    );

                }

                // Automatically calculate route.

                await getRoute(
                    userCoordinates,
                    destinationCoordinates
                );

            } catch (error) {

                console.error("GPS route error:", error);

                status.textContent =
                    "Your location was found, but the destination could not be located. " +
                    error.message;

            }

        },


        // GPS ERROR HANDLING

        function (error) {

            console.error("GPS error:", error);

            if (error.code === error.PERMISSION_DENIED) {

                status.textContent =
                    "Location permission denied. Allow location access in Chrome settings.";

            } else if (error.code === error.POSITION_UNAVAILABLE) {

                status.textContent =
                    "Your current location is unavailable. Check your device GPS.";

            } else if (error.code === error.TIMEOUT) {

                status.textContent =
                    "GPS request timed out. Please try again.";

            } else {

                status.textContent =
                    "Unable to retrieve your current location.";

            }

        },


        {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 0
        }

    );

}


// ==========================================
// GET DRIVING ROUTE USING OSRM
// ==========================================

async function getRoute(start, end) {

    const status =
        document.getElementById("locationStatus");

    const information =
        document.getElementById("routeInformation");


    status.textContent =
        "Calculating driving route...";

    information.textContent = "";


    // OSRM FORMAT:
    // LONGITUDE, LATITUDE
    // NOT LATITUDE, LONGITUDE

    const url =
        "https://router.project-osrm.org/route/v1/driving/" +

        start[1] + "," + start[0] + ";" +

        end[1] + "," + end[0] +

        "?overview=full&geometries=geojson";


    try {

        const controller = new AbortController();

        const timeoutId = setTimeout(function () {

            controller.abort();

        }, 20000);


        let response;

        try {

            response = await fetch(url, {
                signal: controller.signal
            });

        } finally {

            clearTimeout(timeoutId);

        }


        if (!response.ok) {

            throw new Error(
                "Routing service error: " + response.status
            );

        }


        const data = await response.json();


        if (
            data.code !== "Ok" ||
            !Array.isArray(data.routes) ||
            data.routes.length === 0 ||
            !data.routes[0].geometry
        ) {

            throw new Error(
                data.message ||
                "No driving route was found."
            );

        }


        const route = data.routes[0];


        // REMOVE PREVIOUS ROUTE

        if (routeLine) {

            map.removeLayer(routeLine);

        }


        // DRAW NEW ROUTE

        routeLine = L.geoJSON(route.geometry, {

            style: {

                color: "#2458d8",
                weight: 6,
                opacity: 0.85

            }

        }).addTo(map);


        // FIT MAP TO SHOW COMPLETE ROUTE

        const routeBounds = routeLine.getBounds();

        if (userMarker) {

            routeBounds.extend(userMarker.getLatLng());

        }

        if (destinationMarker) {

            routeBounds.extend(destinationMarker.getLatLng());

        }

        map.fitBounds(routeBounds, {

            padding: [40, 40],
            maxZoom: 15

        });


        // CALCULATE DISTANCE AND TIME

        const distance =
            (route.distance / 1000).toFixed(2);

        const duration =
            Math.round(route.duration / 60);


        // DISPLAY ROUTE INFORMATION

        information.innerHTML =

            "<h3>Route Information</h3>" +

            "<p><strong>Distance:</strong> " +
            distance + " km</p>" +

            "<p><strong>Estimated Travel Time:</strong> " +
            duration + " minutes</p>" +

            "<p><strong>Travel Mode:</strong> Driving</p>";


        status.textContent =
            "Route successfully calculated.";


    } catch (error) {

        console.error("Route calculation error:", error);

        if (error.name === "AbortError") {

            status.textContent =
                "Route request timed out. Please try again.";

        } else {

            status.textContent =
                "Unable to calculate route: " + error.message;

        }

    }

}


// ==========================================
// CLEAR ROUTE
// ==========================================

function clearRoute() {

    if (routeLine) {

        map.removeLayer(routeLine);

        routeLine = null;

    }

    document.getElementById("routeInformation").textContent =
        "Route cleared.";

    document.getElementById("locationStatus").textContent =
        "Route cleared. Your location and destination markers remain on the map.";

}
