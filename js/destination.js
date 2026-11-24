<<<<<<< HEAD
const destinationData = {
  "dahilayan-adventure-park": {
    name: "Dahilayan Adventure Park",
    location: "Dahilayan, Manolo Fortich, Bukidnon",
    description:
      "Dahilayan Forest Park is a nature and adventure destination located in Barangay Dahilayan, Manolo Fortich, Bukidnon. Known for its cool mountain climate, lush forest surroundings, and scenic landscapes, it offers visitors a place to enjoy outdoor recreation and experience the natural beauty of the highlands. The destination is part of the Dahilayan tourism area, which features various recreational attractions and outdoor activities suitable for families, friends, and adventure enthusiasts. Its mountain setting and refreshing atmosphere make it an ideal destination for sightseeing, leisure, and outdoor exploration.",
    search: "Dahilayan Adventure Park, Manolo Fortich, Bukidnon",
    folder: "dahilayan-adventure-park",
    photos: [
      "1.avif",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "adventure.jpg",
      "entrance.jpg",
      "nightView.jpg",
    ],
  },
=======

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
>>>>>>> 0c6e90b531537aaa89ad0be62923ef312c7edb51

  kampojuan: {
    name: "KampoJuan Eco-Adventure Farm",
    location: "Manolo Fortich, Bukidnon",
    description:
      "KampoJuan Eco-Adventure Farm is an eco-adventure destination that combines outdoor recreation with a natural farm environment. It offers visitors a place to enjoy activities and explore the outdoors.",
    search: "KampoJuan Eco Adventure Farm, Manolo Fortich, Bukidnon",
    folder: "kampojuan",
    photos: ["1.jpg", "2.jpg", "3.jpg"],
  },

  "del-monte": {
    name: "Del Monte Pineapple Plantation and Monument",
    location: "Manolo Fortich, Bukidnon",
    description:
      "The Del Monte Pineapple Plantation is associated with the agricultural landscape of Bukidnon. The plantation and its monument are notable landmarks connected to the area's pineapple industry.",
    search: "Del Monte Pineapple Plantation Monument, Manolo Fortich, Bukidnon",
    folder: "del-monte",
    photos: ["1.jpg", "2.jpg", "3.jpg"],
  },

  "macarthur-landmark": {
    name: "General Douglas MacArthur Landmark",
    location: "Manolo Fortich, Bukidnon",
    description:
      "This landmark commemorates General Douglas MacArthur and serves as a historical point of interest in Manolo Fortich. Visitors can learn about its connection to local and Philippine history.",
    search: "General Douglas MacArthur Landmark, Manolo Fortich, Bukidnon",
    folder: "macarthur-landmark",
    photos: ["1.jpg", "2.jpg", "3.jpg"],
  },

  "mangima-heroes-shrine": {
    name: "Mangima Heroes Shrine",
    location: "Mangima, Manolo Fortich, Bukidnon",
    description:
      "Mangima Heroes Shrine is a historical memorial that honors heroes and commemorates events from the past. It is a place of remembrance and historical interest.",
    search: "Mangima Heroes Shrine, Manolo Fortich, Bukidnon",
    folder: "mangima-heroes-shrine",
    photos: ["1.jpg", "2.jpg", "3.jpg"],
  },

  "manolo-terminal": {
    name: "Manolo Fortich Bus Terminal",
    location: "Tankulan, Manolo Fortich, Bukidnon",
    description:
      "Manolo Fortich Bus Terminal is a public transportation hub located in Tankulan, Manolo Fortich, Bukidnon. It serves commuters traveling to nearby municipalities and cities.",
    search: "Manolo Fortich Central Station, Tankulan, Bukidnon",
    folder: "manolo-terminal",
    photos: ["terminal.jpg"],
  },
};

<<<<<<< HEAD
=======

// ==========================================
>>>>>>> 0c6e90b531537aaa89ad0be62923ef312c7edb51
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

<<<<<<< HEAD
=======

// ==========================================
>>>>>>> 0c6e90b531537aaa89ad0be62923ef312c7edb51
// LOAD DESTINATION
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
  const destinationKey = document.body.dataset.destination;

  currentDestination = destinationData[destinationKey];

  if (!currentDestination) {
    document.body.textContent = "Destination not found.";
    return;
  }

<<<<<<< HEAD
  displayDestination();
  initializeMap();
  setupButtons();
  locateDestination();
});

=======
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
>>>>>>> 0c6e90b531537aaa89ad0be62923ef312c7edb51
// DISPLAY DESTINATION INFORMATION
// ==========================================

function displayDestination() {
  document.getElementById("destinationName").textContent =
    currentDestination.name;

  document.getElementById("destinationLocation").textContent =
    currentDestination.location;

  document.getElementById("destinationDescription").textContent =
    currentDestination.description;

<<<<<<< HEAD
  showPhoto();
}

// DISPLAY CURRENT PHOTO
function showPhoto() {
  const photo = currentDestination.photos[currentPhotoIndex];
=======
    document.getElementById("destinationDescription").textContent =
        currentDestination.description;

    showPhoto();

}


// ==========================================
// IMAGE SLIDESHOW
// ==========================================

function showPhoto() {

    const photo = currentDestination.photos[currentPhotoIndex];
>>>>>>> 0c6e90b531537aaa89ad0be62923ef312c7edb51

  const destinationImage = document.getElementById("destinationPhoto");

  const imagePath =
    "../images/destinations/" + currentDestination.folder + "/" + photo;

<<<<<<< HEAD
  destinationImage.alt =
    currentDestination.name + " photo " + (currentPhotoIndex + 1);
=======
    destinationImage.alt =
        currentDestination.name + " photo " +
        (currentPhotoIndex + 1);
>>>>>>> 0c6e90b531537aaa89ad0be62923ef312c7edb51

  const newImage = new Image();

<<<<<<< HEAD
  newImage.onload = function () {
    destinationImage.src = imagePath;

    // Restart fade-in animation
    destinationImage.classList.remove("fade-in");
    void destinationImage.offsetWidth;
    destinationImage.classList.add("fade-in");
  };

  newImage.onerror = function () {
    console.error("Unable to load image:", imagePath);
  };
=======
    newImage.onload = function () {

        destinationImage.src = imagePath;

        destinationImage.classList.remove("fade-in");

        void destinationImage.offsetWidth;

        destinationImage.classList.add("fade-in");

    };

    newImage.onerror = function () {

        console.error("Unable to load image:", imagePath);

    };
>>>>>>> 0c6e90b531537aaa89ad0be62923ef312c7edb51

  newImage.src = imagePath;

<<<<<<< HEAD
  document.getElementById("photoCounter").textContent =
    currentPhotoIndex + 1 + " / " + currentDestination.photos.length;
=======
    document.getElementById("photoCounter").textContent =
        (currentPhotoIndex + 1) + " / " +
        currentDestination.photos.length;

>>>>>>> 0c6e90b531537aaa89ad0be62923ef312c7edb51
}


// NEXT PHOTO
function nextPhoto() {
  currentPhotoIndex++;

  if (currentPhotoIndex >= currentDestination.photos.length) {
    currentPhotoIndex = 0;
  }

<<<<<<< HEAD
  showPhoto();
=======
    if (currentPhotoIndex >= currentDestination.photos.length) {
        currentPhotoIndex = 0;
    }

    showPhoto();

>>>>>>> 0c6e90b531537aaa89ad0be62923ef312c7edb51
}

// PREVIOUS PHOTO
function previousPhoto() {
  currentPhotoIndex--;

  if (currentPhotoIndex < 0) {
    currentPhotoIndex = currentDestination.photos.length - 1;
  }

<<<<<<< HEAD
  showPhoto();
=======
    if (currentPhotoIndex < 0) {
        currentPhotoIndex = currentDestination.photos.length - 1;
    }

    showPhoto();

>>>>>>> 0c6e90b531537aaa89ad0be62923ef312c7edb51
}

// AUTOMATIC SLIDESHOW
function startAutoSlide() {
  clearInterval(autoSlideTimer);

  if (currentDestination.photos.length <= 1) {
    return;
  }

<<<<<<< HEAD
  autoSlideTimer = setInterval(function () {
    nextPhoto();
  }, 3000);
}

// RESET TIMER AFTER MANUAL CLICK
function resetAutoSlide() {
  startAutoSlide();
}

// SETUP BUTTONS
=======
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

>>>>>>> 0c6e90b531537aaa89ad0be62923ef312c7edb51
function setupButtons() {
  // NEXT BUTTON
  document.getElementById("nextPhoto").addEventListener("click", function () {
    nextPhoto();

<<<<<<< HEAD
    // Restart the 3-second timer
    resetAutoSlide();
  });

  // PREVIOUS BUTTON
  document
    .getElementById("previousPhoto")
    .addEventListener("click", function () {
      previousPhoto();

      // Restart the 3-second timer
      resetAutoSlide();
    });
=======
    document.getElementById("nextPhoto")
        .addEventListener("click", function () {

            nextPhoto();
            startAutoSlide();

        });
>>>>>>> 0c6e90b531537aaa89ad0be62923ef312c7edb51

  // LOCATION BUTTON
  document
    .getElementById("showMyLocationBtn")
    .addEventListener("click", getCurrentLocation);

<<<<<<< HEAD
  // CLEAR ROUTE BUTTON
  document
    .getElementById("clearRouteBtn")
    .addEventListener("click", clearRoute);

  // START AUTOMATIC SLIDESHOW
  startAutoSlide();
}

// PAUSE WHEN TAB IS HIDDEN
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    clearInterval(autoSlideTimer);
  } else if (currentDestination) {
    startAutoSlide();
  }
});

=======
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
>>>>>>> 0c6e90b531537aaa89ad0be62923ef312c7edb51
// INITIALIZE LEAFLET MAP
// ==========================================

function initializeMap() {
  map = L.map("map").setView([8.369, 124.865], 12);

<<<<<<< HEAD
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  map.on("click", function (event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    L.popup()
      .setLatLng(event.latlng)
      .setContent(
        "Latitude: " + lat.toFixed(5) + "<br>Longitude: " + lng.toFixed(5),
      )
      .openOn(map);
  });
}

// LOCATE DESTINATION USING OPENSTREETMAP
=======
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

>>>>>>> 0c6e90b531537aaa89ad0be62923ef312c7edb51
async function locateDestination() {
  const status = document.getElementById("locationStatus");

<<<<<<< HEAD
  status.textContent = "Finding destination location...";
=======
    const status =
        document.getElementById("locationStatus");
>>>>>>> 0c6e90b531537aaa89ad0be62923ef312c7edb51

  const url =
    "https://nominatim.openstreetmap.org/search?format=json&limit=1&q=" +
    encodeURIComponent(currentDestination.search);

  try {
    const response = await fetch(url);

<<<<<<< HEAD
    if (!response.ok) {
      throw new Error("Unable to contact the map service.");
    }
=======
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
>>>>>>> 0c6e90b531537aaa89ad0be62923ef312c7edb51

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

// ==========================================
// GET CURRENT GPS LOCATION
// ==========================================

function getCurrentLocation() {
  const status = document.getElementById("locationStatus");

<<<<<<< HEAD
  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by this browser.";
=======
    const status =
        document.getElementById("locationStatus");

    // GPS requires HTTPS or localhost.

    if (!window.isSecureContext) {

        status.textContent =
            "GPS requires HTTPS or localhost. Please use Live Server.";

        return;

    }
>>>>>>> 0c6e90b531537aaa89ad0be62923ef312c7edb51

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

      status.textContent = "Your current location has been found.";

      if (destinationCoordinates) {
        getRoute(userCoordinates, destinationCoordinates);
      } else {
        status.textContent += " Destination coordinates are not available yet.";
      }
    },

    function (error) {
      if (error.code === error.PERMISSION_DENIED) {
        status.textContent =
<<<<<<< HEAD
          "Location permission was denied. Please allow GPS access.";
      } else if (error.code === error.POSITION_UNAVAILABLE) {
        status.textContent = "Your current location is unavailable.";
      } else if (error.code === error.TIMEOUT) {
        status.textContent = "Getting your location timed out. Try again.";
      } else {
        status.textContent = "An error occurred while getting your location.";
      }
    },

    {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0,
    },
  );
}

// GET ROUTE USING OSRM
=======
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

>>>>>>> 0c6e90b531537aaa89ad0be62923ef312c7edb51
async function getRoute(start, end) {
  const information = document.getElementById("routeInformation");

<<<<<<< HEAD
  information.textContent = "Calculating route...";

  const url =
    "https://router.project-osrm.org/route/v1/driving/" +
    start[1] +
    "," +
    start[0] +
    ";" +
    end[1] +
    "," +
    end[0] +
    "?overview=full&geometries=geojson";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Unable to calculate the route.");
    }
=======
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
>>>>>>> 0c6e90b531537aaa89ad0be62923ef312c7edb51

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
      padding: [30, 30],
    });

    const distance = (route.distance / 1000).toFixed(2);
    const duration = Math.round(route.duration / 60);

    information.innerHTML =
      "<h3>Route Information</h3>" +
      "<p>Distance: " +
      distance +
      " km</p>" +
      "<p>Estimated Travel Time: " +
      duration +
      " minutes</p>" +
      "<p>Travel Mode: Driving</p>";
  } catch (error) {
    information.textContent = error.message;
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

<<<<<<< HEAD
  document.getElementById("routeInformation").textContent = "Route cleared.";
=======
    if (routeLine) {

        map.removeLayer(routeLine);

        routeLine = null;

    }

    document.getElementById("routeInformation").textContent =
        "Route cleared.";

    document.getElementById("locationStatus").textContent =
        "Route cleared. Your location and destination markers remain on the map.";

>>>>>>> 0c6e90b531537aaa89ad0be62923ef312c7edb51
}
