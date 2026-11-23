
// ==========================================
// LAAGTA - MANOLO FORTICH TOURISM APPLICATION
// ==========================================


// ==========================================
// 1. CONFIGURATION
// ==========================================

// Approximate center of Manolo Fortich, Bukidnon
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

    loadTouristSpots();

    setupEventListeners();

});


// ==========================================
// 4. INITIALIZE LEAFLET MAP
// ==========================================

function initializeMap() {

    map = L.map("map").setView(
        [MANOLO_FORTICH.lat, MANOLO_FORTICH.lng],
        CONFIG.mapZoom
    );

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
        .getElementById("locateBtn")
        .addEventListener("click", getUserLocation);

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

            // Remove previous location marker
            if (userMarker) {
                map.removeLayer(userMarker);
            }

            if (userAccuracyCircle) {
                map.removeLayer(userAccuracyCircle);
            }

            // Create user marker
            userMarker = L.marker([
                latitude,
                longitude
            ])
            .addTo(map)
            .bindPopup("<b>You are here!</b>");

            // Show GPS accuracy radius
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

        },

        (error) => {

            let message = "";

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

    destinationList.innerHTML =
        "<p>Loading tourist destinations...</p>";

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

            body: "data=" + encodeURIComponent(query),

            headers: {
                "Content-Type":
                    "application/x-www-form-urlencoded"
            }

        });

        if (!response.ok) {
            throw new Error("Unable to retrieve destinations.");
        }

        const data = await response.json();

        displayTouristSpots(data.elements);

    }

    catch (error) {

        console.error("Overpass Error:", error);

        destinationList.innerHTML =
            "<p>Unable to load tourist destinations. Please try again later.</p>";

    }

}


// ==========================================
// 8. DISPLAY TOURIST SPOTS ON MAP
// ==========================================

function displayTouristSpots(spots) {

    const destinationList =
        document.getElementById("destinationList");

    destinationList.innerHTML = "";

    // Clear existing destination markers
    destinationMarkers.forEach(marker => {
        map.removeLayer(marker);
    });

    destinationMarkers = [];

    if (!spots || spots.length === 0) {

        destinationList.innerHTML =
            "<p>No tourist spots found in the selected area.</p>";

        return;
    }

    spots.forEach((spot) => {

        const latitude =
            spot.lat ?? spot.center?.lat;

        const longitude =
            spot.lon ?? spot.center?.lon;

        if (latitude == null || longitude == null) {
            return;
        }

        const name =
            spot.tags?.name || "Unnamed Tourist Attraction";

        const category =
            spot.tags?.tourism ||
            spot.tags?.historic ||
            spot.tags?.natural ||
            "Landmark";

        const marker = L.marker([
            latitude,
            longitude
        ]).addTo(map);

        marker.bindPopup(`
            <b>${escapeHTML(name)}</b>
            <br>
            Category: ${escapeHTML(category)}
            <br><br>
            <button onclick="selectDestination(
                ${latitude},
                ${longitude},
                ${JSON.stringify(name).replace(/</g, "\\u003c")}
            )">
                Navigate Here
            </button>
        `);

        destinationMarkers.push(marker);

        // Create destination list item
        const item = document.createElement("div");

        const title = document.createElement("h3");
        title.textContent = name;

        const categoryText = document.createElement("p");
        categoryText.textContent = "Category: " + category;

        const button = document.createElement("button");
        button.textContent = "View on Map";

        button.addEventListener("click", () => {

            map.setView([
                latitude,
                longitude
            ], 16);

            marker.openPopup();

        });

        const navigateButton = document.createElement("button");

        navigateButton.textContent = "Navigate Here";

        navigateButton.addEventListener("click", () => {

            selectDestination(
                latitude,
                longitude,
                name
            );

        });

        item.appendChild(title);
        item.appendChild(categoryText);
        item.appendChild(button);
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

    const searchValue = input.value.trim();

    if (!searchValue) return;

    results.textContent = "Searching...";

    try {

        const params = new URLSearchParams({

            q: searchValue + ", Manolo Fortich, Bukidnon, Philippines",

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

            });

            item.appendChild(name);
            item.appendChild(button);

            results.appendChild(item);

        });

    }

    catch (error) {

        console.error("Search Error:", error);

        results.textContent =
            "An error occurred while searching.";

    }

}


// ==========================================
// 10. SELECT DESTINATION
// ==========================================

function selectDestination(latitude, longitude, name) {

    selectedDestination = {
        lat: latitude,
        lng: longitude,
        name: name
    };

    map.setView([
        latitude,
        longitude
    ], 15);

    // Automatically generate route if location exists
    if (userLocation) {

        generateRoute();

    } else {

        document.getElementById("routeInformation").innerHTML =
            "<p>Destination selected: " +
            escapeHTML(name) +
            "</p><p>Please enable your current location to generate a route.</p>";

    }

}


// ==========================================
// 11. GENERATE ROUTE USING OSRM
// ==========================================

async function generateRoute() {

    if (!userLocation || !selectedDestination) {

        alert("Please select a destination and detect your location.");

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

        // Remove previous route
        if (currentRoute) {
            map.removeLayer(currentRoute);
        }

        // Draw route on map
        currentRoute = L.geoJSON(route.geometry, {

            style: {

                color: "blue",

                weight: 5,

                opacity: 0.8

            }

        }).addTo(map);

        // Fit map to route
        map.fitBounds(
            currentRoute.getBounds(),
            { padding: [30, 30] }
        );

        // Convert meters to kilometers
        const distance =
            (route.distance / 1000).toFixed(2);

        // Convert seconds to minutes
        const duration =
            Math.round(route.duration / 60);

        const hours =
            Math.floor(duration / 60);

        const minutes =
            duration % 60;

        const estimatedTime =
            hours > 0
                ? `${hours} hour(s) ${minutes} minute(s)`
                : `${minutes} minutes`;

        information.innerHTML = `
            <h3>Route Information</h3>

            <p>
                <b>Destination:</b>
                ${escapeHTML(selectedDestination.name)}
            </p>

            <p>
                <b>Distance:</b>
                ${distance} km
            </p>

            <p>
                <b>Estimated Travel Time:</b>
                ${estimatedTime}
            </p>

            <p>
                <b>Travel Mode:</b>
                Driving
            </p>
        `;

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

    if (currentRoute) {

        map.removeLayer(currentRoute);

        currentRoute = null;

    }

    selectedDestination = null;

    document.getElementById("routeInformation").innerHTML =
        "<p>No destination selected.</p>";

}


// ==========================================
// 13. HTML ESCAPING
// ==========================================

function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, character => {

        const entities = {

            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"

        };

        return entities[character];

    });

}

const popupContent = document.createElement("div");

const popupTitle = document.createElement("strong");
popupTitle.textContent = name;

const popupCategory = document.createElement("p");
popupCategory.textContent = "Category: " + category;

const navigateButton = document.createElement("button");
navigateButton.textContent = "Navigate Here";

navigateButton.addEventListener("click", () => {
    selectDestination(latitude, longitude, name);
});

popupContent.appendChild(popupTitle);
popupContent.appendChild(popupCategory);
popupContent.appendChild(navigateButton);

marker.bindPopup(popupContent);