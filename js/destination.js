const destinationData = {
    "dahilayan-adventure-park": {
        name: "Dahilayan Adventure Park",
        location: "Dahilayan, Manolo Fortich, Bukidnon",
        description: "Dahilayan Adventure Park is an outdoor adventure destination in the highlands of Manolo Fortich. It is known for recreational activities and attractions for visitors seeking an outdoor experience.",
        search: "Dahilayan Adventure Park, Manolo Fortich, Bukidnon",
        folder: "dahilayan-adventure-park",
        photos: ["1.jpg", "2.jpg", "3.jpg"]
    },

    "dahilayan-forest-park": {
        name: "Dahilayan Forest Park",
        location: "Dahilayan, Manolo Fortich, Bukidnon",
        description: "Dahilayan Forest Park is a nature destination surrounded by forest scenery and cool mountain surroundings. It offers visitors an opportunity to enjoy the natural environment of the highlands.",
        search: "Dahilayan Forest Park, Manolo Fortich, Bukidnon",
        folder: "dahilayan-forest-park",
        photos: ["1.jpg", "2.jpg", "3.jpg"]
    },

    "dahilayan-alpine-village": {
        name: "Dahilayan Alpine Village and Kawa Hot Bath",
        location: "Dahilayan, Manolo Fortich, Bukidnon",
        description: "Dahilayan Alpine Village is a mountain attraction with an alpine-inspired setting. Visitors can also experience the Kawa Hot Bath, a relaxing activity associated with the area.",
        search: "Dahilayan Alpine Village, Manolo Fortich, Bukidnon",
        folder: "dahilayan-alpine-village",
        photos: ["1.jpg", "2.jpg", "3.jpg"]
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

    "sumalsag-cave": {
        name: "Sumalsag Cave and View Decks",
        location: "Manolo Fortich, Bukidnon",
        description: "Sumalsag Cave and its view decks are natural attractions where visitors can appreciate the landscape and scenery of the surrounding area.",
        search: "Sumalsag Cave View Deck, Manolo Fortich, Bukidnon",
        folder: "sumalsag-cave",
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
    },

    "municipal-museum": {
        name: "Manolo Fortich Municipal Museum",
        location: "Manolo Fortich, Bukidnon",
        description: "The Manolo Fortich Municipal Museum provides visitors with an opportunity to learn about the municipality's history, culture, and local heritage.",
        search: "Manolo Fortich Municipal Museum, Bukidnon",
        folder: "municipal-museum",
        photos: ["1.jpg", "2.jpg", "3.jpg"]
    }
};

let map;
let destinationMarker;
let userMarker;
let routeLine;
let currentPhotoIndex = 0;
let currentDestination;
let destinationCoordinates = null;

// Load the selected destination
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
    locateDestination();
});


// Display destination information
function displayDestination() {

    document.getElementById("destinationName").textContent =
        currentDestination.name;

    document.getElementById("destinationLocation").textContent =
        currentDestination.location;

    document.getElementById("destinationDescription").textContent =
        currentDestination.description;

    showPhoto();
}


// Display slideshow photo
function showPhoto() {

    const photo = currentDestination.photos[currentPhotoIndex];

    document.getElementById("destinationPhoto").src =
        "../images/destinations/" +
        currentDestination.folder + "/" + photo;

    document.getElementById("destinationPhoto").alt =
        currentDestination.name + " photo " + (currentPhotoIndex + 1);

    document.getElementById("photoCounter").textContent =
        (currentPhotoIndex + 1) + " / " +
        currentDestination.photos.length;
}


// Slideshow buttons
function setupButtons() {

    document.getElementById("nextPhoto").addEventListener("click", function () {

        currentPhotoIndex++;

        if (currentPhotoIndex >= currentDestination.photos.length) {
            currentPhotoIndex = 0;
        }

        showPhoto();
    });

    document.getElementById("previousPhoto").addEventListener("click", function () {

        currentPhotoIndex--;

        if (currentPhotoIndex < 0) {
            currentPhotoIndex = currentDestination.photos.length - 1;
        }

        showPhoto();
    });

    document.getElementById("showMyLocationBtn")
        .addEventListener("click", getCurrentLocation);

    document.getElementById("clearRouteBtn")
        .addEventListener("click", clearRoute);
}


// Initialize Leaflet map
function initializeMap() {

    map = L.map("map").setView([8.369, 124.865], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Display coordinates when the map is clicked
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


// Find destination coordinates using OpenStreetMap
async function locateDestination() {

    const status = document.getElementById("locationStatus");

    status.textContent = "Finding destination location...";

    const url =
        "https://nominatim.openstreetmap.org/search?format=json&limit=1&q=" +
        encodeURIComponent(currentDestination.search);

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Unable to contact the map service.");
        }

        const results = await response.json();

        if (results.length === 0) {
            status.textContent =
                "Destination coordinates were not found. Try again later.";
            return;
        }

        const lat = Number(results[0].lat);
        const lng = Number(results[0].lon);

        destinationCoordinates = [lat, lng];

        map.setView(destinationCoordinates, 15);

        destinationMarker = L.marker(destinationCoordinates)
            .addTo(map)
            .bindPopup("<b>" + currentDestination.name + "</b>")
            .openPopup();

        status.textContent = "Destination location loaded.";

    } catch (error) {

        status.textContent = error.message;
    }
}


// Get visitor's current GPS location
function getCurrentLocation() {

    const status = document.getElementById("locationStatus");

    if (!navigator.geolocation) {
        status.textContent = "Geolocation is not supported by this browser.";
        return;
    }

    status.textContent = "Getting your current location...";

    navigator.geolocation.getCurrentPosition(

        function (position) {

            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            const userCoordinates = [lat, lng];

            if (userMarker) {
                map.removeLayer(userMarker);
            }

            userMarker = L.marker(userCoordinates)
                .addTo(map)
                .bindPopup("You are here.")
                .openPopup();

            map.setView(userCoordinates, 15);

            status.textContent =
                "Your current location has been found.";

            if (destinationCoordinates) {
                getRoute(userCoordinates, destinationCoordinates);
            } else {
                status.textContent +=
                    " Destination coordinates are not available yet.";
            }
        },

        function (error) {

            if (error.code === error.PERMISSION_DENIED) {
                status.textContent =
                    "Location permission was denied. Please allow GPS access.";
            } else if (error.code === error.POSITION_UNAVAILABLE) {
                status.textContent =
                    "Your current location is unavailable.";
            } else if (error.code === error.TIMEOUT) {
                status.textContent =
                    "Getting your location timed out. Try again.";
            } else {
                status.textContent =
                    "An error occurred while getting your location.";
            }
        },

        {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 0
        }
    );
}


// Get route using OSRM
async function getRoute(start, end) {

    const information = document.getElementById("routeInformation");

    information.textContent = "Calculating route...";

    const url =
        "https://router.project-osrm.org/route/v1/driving/" +
        start[1] + "," + start[0] + ";" +
        end[1] + "," + end[0] +
        "?overview=full&geometries=geojson";

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Unable to calculate the route.");
        }

        const data = await response.json();

        if (data.code !== "Ok" || data.routes.length === 0) {
            throw new Error("No route was found.");
        }

        const route = data.routes[0];

        if (routeLine) {
            map.removeLayer(routeLine);
        }

        routeLine = L.geoJSON(route.geometry).addTo(map);

        map.fitBounds(routeLine.getBounds(), {
            padding: [30, 30]
        });

        const distance = (route.distance / 1000).toFixed(2);
        const duration = Math.round(route.duration / 60);

        information.innerHTML =
            "<h3>Route Information</h3>" +
            "<p>Distance: " + distance + " km</p>" +
            "<p>Estimated Travel Time: " + duration + " minutes</p>" +
            "<p>Travel Mode: Driving</p>";

    } catch (error) {

        information.textContent = error.message;
    }
}


// Clear route from map
function clearRoute() {

    if (routeLine) {
        map.removeLayer(routeLine);
        routeLine = null;
    }

    document.getElementById("routeInformation").textContent =
        "Route cleared.";
}