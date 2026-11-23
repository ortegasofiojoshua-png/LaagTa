
// ==========================================
// LAAGTA - MANOLO FORTICH TOURISM APPLICATION
// ==========================================


// ==========================================
// 1. CONFIGURATION
// ==========================================

// Approximate center of Manolo Fortich
const MANOLO_FORTICH = {
    lat: 8.369,
    lng: 124.865
};

const CONFIG = {

    mapZoom: 13,

    destinationRadius: 15000,

    tileURL: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",

    nominatimURL: "https://nominatim.openstreetmap.org/search",

    overpassURL: "https://overpass-api.de/api/interpreter",

    osrmURL: "https://router.project-osrm.org/route/v1/driving/"

};


// ==========================================
// 2. GLOBAL VARIABLES
// ==========================================

let map;

let userMarker = null;
let userAccuracyCircle = null;

let destinationMarkers = [];

let currentRoute = null;

let userLocation = null;

let selectedDestination = null;


// ==========================================
// 3. INITIALIZE APPLICATION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    initializeMap();

    setupEventListeners();

    loadTouristSpots();

});


// ==========================================
// 4. INITIALIZE LEAFLET MAP
// ==========================================

function initializeMap() {

    const mapContainer = document.getElementById("map");

    if (!mapContainer || typeof L === "undefined") {

        console.error("Map container or Leaflet is missing.");

        return;
    }

    // Required map height until a CSS file is added
    mapContainer.style.height = "500px";

    map = L.map("map").setView(
        [MANOLO_FORTICH.lat, MANOLO_FORTICH.lng],
        CONFIG.mapZoom
    );

    // Load OpenStreetMap tiles

    L.tileLayer(CONFIG.tileURL, {

        maxZoom: 19,

        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'

    }).addTo(map);

    // Default municipality marker

    L.marker([
        MANOLO_FORTICH.lat,
        MANOLO_FORTICH.lng
    ])
        .addTo(map)
        .bindPopup("<b>Manolo Fortich, Bukidnon</b>");

}


// ==========================================
// 5. EVENT LISTENERS
// ==========================================

function setupEventListeners() {

    document
        .getElementById("showMyLocationBtn")
        .addEventListener("click", getUserLocation);

    document
        .getElementById("searchForm")
        .addEventListener("submit", searchDestination);

    document
        .getElementById("clearRouteBtn")
        .addEventListener("click", clearRoute);

}


// ==========================================
// 6. GET USER'S CURRENT LOCATION
// ==========================================

function getUserLocation() {

    const status = document.getElementById("locationStatus");

    if (!navigator.geolocation) {

        status.textContent =
            "Geolocation is not supported by your browser.";

        return;
    }

    status.textContent = "Detecting your current location...";

    navigator.geolocation.getCurrentPosition(

        (position) => {

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const accuracy = position.coords.accuracy;

            userLocation = {
                lat: latitude,
                lng: longitude
            };

            // Remove previous marker

            if (userMarker) {
                map.removeLayer(userMarker);
            }

            // Remove previous accuracy circle

            if (userAccuracyCircle) {
                map.removeLayer(userAccuracyCircle);
            }

            // Create current location marker

            userMarker = L.marker([
                latitude,
                longitude
            ])
                .addTo(map)
                .bindPopup("<b>You are here!</b>");

            // Create GPS accuracy circle

            userAccuracyCircle = L.circle([
                latitude,
                longitude
            ], {

                radius: accuracy

            }).addTo(map);

            // Move map to user's location

            map.setView([
                latitude,
                longitude
            ], 16);

            userMarker.openPopup();

            status.textContent =
                `Location detected! Accuracy: ${Math.round(accuracy)} meters.`;

            // Generate route if destination is already selected

            if (selectedDestination) {
                generateRoute();
            }

        },

        (error) => {

            let message;

            switch (error.code) {

                case error.PERMISSION_DENIED:

                    message = "Location permission was denied.";

                    break;

                case error.POSITION_UNAVAILABLE:

                    message = "Location information is unavailable.";

                    break;

                case error.TIMEOUT:

                    message = "Location request timed out.";

                    break;

                default:

                    message = "Unable to detect your location.";

            }

            status.textContent = message;

        },

        {

            enableHighAccuracy: true,

            timeout: 15000,

            maximumAge: 0

        }

    );

}


// ==========================================
// 7. LOAD TOURIST SPOTS USING OVERPASS API
// ==========================================

async function loadTouristSpots() {

    const destinationList =
        document.getElementById("destinationList");

    destinationList.textContent =
        "Loading tourist destinations...";

    const query = `

        [out:json][timeout:25];

        (

            node["tourism"~"attraction|museum|viewpoint|artwork"]
                (around:${CONFIG.destinationRadius},
                ${MANOLO_FORTICH.lat},
                ${MANOLO_FORTICH.lng});

            way["tourism"~"attraction|museum|viewpoint|artwork"]
                (around:${CONFIG.destinationRadius},
                ${MANOLO_FORTICH.lat},
                ${MANOLO_FORTICH.lng});

            relation["tourism"~"attraction|museum|viewpoint|artwork"]
                (around:${CONFIG.destinationRadius},
                ${MANOLO_FORTICH.lat},
                ${MANOLO_FORTICH.lng});

            node["historic"]
                (around:${CONFIG.destinationRadius},
                ${MANOLO_FORTICH.lat},
                ${MANOLO_FORTICH.lng});

            way["historic"]
                (around:${CONFIG.destinationRadius},
                ${MANOLO_FORTICH.lat},
                ${MANOLO_FORTICH.lng});

            node["natural"="waterfall"]
                (around:${CONFIG.destinationRadius},
                ${MANOLO_FORTICH.lat},
                ${MANOLO_FORTICH.lng});

        );

        out center tags;

    `;

    try {

        const response = await fetch(CONFIG.overpassURL, {

            method: "POST",

            headers: {

                "Content-Type":
                    "application/x-www-form-urlencoded"

            },

            body: "data=" + encodeURIComponent(query)

        });

        if (!response.ok) {

            throw new Error("Unable to retrieve destinations.");

        }

        const data = await response.json();

        displayTouristSpots(data.elements);

    }

    catch (error) {

        console.error("Overpass Error:", error);

        destinationList.textContent =
            "Unable to load tourist destinations. Please try again later.";

    }

}


// ==========================================
// 8. DISPLAY TOURIST SPOTS ON MAP
// ==========================================

function displayTouristSpots(spots) {

    const destinationList =
        document.getElementById("destinationList");

    destinationList.innerHTML = "";

    // Remove previous markers

    destinationMarkers.forEach(marker => {

        map.removeLayer(marker);

    });

    destinationMarkers = [];

    if (!spots || spots.length === 0) {

        destinationList.textContent =
            "No tourist spots found in the selected area.";

        return;
    }

    // Prevent duplicate destinations

    const uniqueSpots = new Map();

    spots.forEach(spot => {

        uniqueSpots.set(
            `${spot.type}-${spot.id}`,
            spot
        );

    });

    // Display destinations

    uniqueSpots.forEach(spot => {

        const latitude = Number(
            spot.lat ?? spot.center?.lat
        );

        const longitude = Number(
            spot.lon ?? spot.center?.lon
        );

        if (!Number.isFinite(latitude) ||
            !Number.isFinite(longitude)) {

            return;
        }

        const name =
            spot.tags?.name || "Unnamed Tourist Attraction";

        const category =
            spot.tags?.tourism ||
            spot.tags?.historic ||
            spot.tags?.natural ||
            "Landmark";


        // CREATE MAP MARKER

        const marker = L.marker([
            latitude,
            longitude
        ]).addTo(map);


        // CREATE POPUP

        const popupContent = document.createElement("div");

        const popupTitle = document.createElement("strong");

        popupTitle.textContent = name;

        const popupCategory = document.createElement("p");

        popupCategory.textContent = "Category: " + category;

        const popupButton = document.createElement("button");

        popupButton.textContent = "Navigate Here";

        popupButton.addEventListener("click", () => {

            selectDestination(
                latitude,
                longitude,
                name
            );

        });

        popupContent.appendChild(popupTitle);

        popupContent.appendChild(popupCategory);

        popupContent.appendChild(popupButton);

        marker.bindPopup(popupContent);

        destinationMarkers.push(marker);


        // CREATE DESTINATION LIST ITEM

        const item = document.createElement("div");

        const title = document.createElement("h3");

        title.textContent = name;

        const categoryText = document.createElement("p");

        categoryText.textContent = "Category: " + category;


        // VIEW ON MAP BUTTON

        const viewButton = document.createElement("button");

        viewButton.textContent = "View on Map";

        viewButton.addEventListener("click", () => {

            map.setView([
                latitude,
                longitude
            ], 16);

            marker.openPopup();

        });


        // NAVIGATE HERE BUTTON

        const navigateButton = document.createElement("button");

        navigateButton.textContent = "Navigate Here";

        navigateButton.addEventListener("click", () => {

            selectDestination(
                latitude,
                longitude,
                name
            );

        });


        // APPEND ELEMENTS

        item.appendChild(title);

        item.appendChild(categoryText);

        item.appendChild(viewButton);

        item.appendChild(navigateButton);

        destinationList.appendChild(item);

    });

}


// ==========================================
// 9. SEARCH DESTINATION USING NOMINATIM
// ==========================================

async function searchDestination(event) {

    event.preventDefault();

    const input =
        document.getElementById("destinationInput");

    const results =
        document.getElementById("searchResults");

    const searchButton =
        document.getElementById("searchBtn");

    const searchValue = input.value.trim();

    if (!searchValue) {
        return;
    }

    results.textContent = "Searching...";

    searchButton.disabled = true;

    try {

        const params = new URLSearchParams({

            q: searchValue +
                ", Manolo Fortich, Bukidnon, Philippines",

            format: "json",

            limit: "5",

            countrycodes: "ph"

        });

        const response = await fetch(
            CONFIG.nominatimURL + "?" + params.toString()
        );

        if (!response.ok) {

            throw new Error("Search request failed.");

        }

        const data = await response.json();

        results.innerHTML = "";

        if (data.length === 0) {

            results.textContent =
                "No matching destinations found.";

            return;
        }

        data.forEach(place => {

            const item = document.createElement("div");

            const name = document.createElement("p");

            name.textContent = place.display_name;

            const button = document.createElement("button");

            button.textContent = "Select Destination";

            button.addEventListener("click", () => {

                selectDestination(
                    Number(place.lat),
                    Number(place.lon),
                    place.display_name
                );

                document.getElementById("map-section")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            });

            item.appendChild(name);

            item.appendChild(button);

            results.appendChild(item);

        });

    }

    catch (error) {

        console.error("Search Error:", error);

        results.textContent =
            "An error occurred while searching. Please try again.";

    }

    finally {

        searchButton.disabled = false;

    }

}


// ==========================================
// 10. SELECT DESTINATION
// ==========================================

function selectDestination(latitude, longitude, name) {

    if (!Number.isFinite(latitude) ||
        !Number.isFinite(longitude)) {

        return;
    }

    selectedDestination = {

        lat: latitude,

        lng: longitude,

        name: name

    };

    map.setView([
        latitude,
        longitude
    ], 15);

    // Generate route if current location is available

    if (userLocation) {

        generateRoute();

    }

    else {

        const information =
            document.getElementById("routeInformation");

        information.innerHTML = "";

        const message = document.createElement("p");

        message.textContent =
            "Destination selected: " + name +
            ". Please detect your current location to generate a route.";

        information.appendChild(message);

    }

}


// ==========================================
// 11. GENERATE ROUTE USING OSRM
// ==========================================

async function generateRoute() {

    if (!userLocation || !selectedDestination) {

        return;
    }

    const information =
        document.getElementById("routeInformation");

    information.textContent = "Calculating route...";

    const coordinates =
        `${userLocation.lng},${userLocation.lat};` +
        `${selectedDestination.lng},${selectedDestination.lat}`;

    const url =
        CONFIG.osrmURL +
        coordinates +
        "?overview=full&geometries=geojson";

    try {

        const response = await fetch(url);

        if (!response.ok) {

            throw new Error("Routing service unavailable.");

        }

        const data = await response.json();

        if (data.code !== "Ok" || !data.routes.length) {

            throw new Error("No route found.");

        }

        const route = data.routes[0];


        // REMOVE PREVIOUS ROUTE

        if (currentRoute) {

            map.removeLayer(currentRoute);

        }


        // DRAW ROUTE ON MAP

        currentRoute = L.geoJSON(route.geometry, {

            style: {

                color: "#ffb900",

                weight: 5,

                opacity: 0.8

            }

        }).addTo(map);


        // FIT MAP TO ROUTE

        map.fitBounds(
            currentRoute.getBounds(),
            {
                padding: [30, 30]
            }
        );


        // CALCULATE DISTANCE

        const distance =
            (route.distance / 1000).toFixed(2);


        // CALCULATE TRAVEL TIME

        const duration =
            Math.round(route.duration / 60);

        const hours =
            Math.floor(duration / 60);

        const minutes =
            duration % 60;

        const estimatedTime = hours > 0
            ? `${hours} hour(s) ${minutes} minute(s)`
            : `${minutes} minutes`;


        // DISPLAY ROUTE INFORMATION

        information.innerHTML = "";

        const title = document.createElement("h3");

        title.textContent = "Route Information";

        const destination = document.createElement("p");

        destination.textContent =
            "Destination: " + selectedDestination.name;

        const distanceInfo = document.createElement("p");

        distanceInfo.textContent =
            "Distance: " + distance + " km";

        const timeInfo = document.createElement("p");

        timeInfo.textContent =
            "Estimated Travel Time: " + estimatedTime;

        const modeInfo = document.createElement("p");

        modeInfo.textContent =
            "Travel Mode: Driving";


        information.appendChild(title);

        information.appendChild(destination);

        information.appendChild(distanceInfo);

        information.appendChild(timeInfo);

        information.appendChild(modeInfo);

    }

    catch (error) {

        console.error("Routing Error:", error);

        information.textContent =
            "Unable to calculate route. Please try again.";

    }

}


// ==========================================
// 12. CLEAR ROUTE
// ==========================================

function clearRoute() {

    // Remove route from map

    if (currentRoute) {

        map.removeLayer(currentRoute);

        currentRoute = null;

    }

    // Reset selected destination

    selectedDestination = null;

    // Reset route information

    document.getElementById("routeInformation").textContent =
        "No destination selected.";

}
