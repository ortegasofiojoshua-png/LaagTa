// ==========================================
// LAAGTA - DESTINATION PAGE
// GPS + LEAFLET + OSRM + OPEN-METEO
// ==========================================

// ==========================================
// 1. DESTINATION DATA
// ==========================================

const destinationData = {
  "dahilayan-adventure-park": {
    name: "Dahilayan Adventure Park",
    location: "Dahilayan, Manolo Fortich, Bukidnon",

    description:
      "Dahilayan Forest Park is a nature and adventure destination located in Barangay Dahilayan, Manolo Fortich, Bukidnon. Known for its cool mountain climate, lush forest surroundings, and scenic landscapes, it offers visitors a place to enjoy outdoor recreation and experience the natural beauty of the highlands. The destination is part of the Dahilayan tourism area, which features various recreational attractions and outdoor activities suitable for families, friends, and adventure enthusiasts. Its mountain setting and refreshing atmosphere make it an ideal destination for sightseeing, leisure, and outdoor exploration.",

    search: "Dahilayan Adventure Park, Manolo Fortich, Bukidnon",

    // Fixed coordinates: no Nominatim request needed.
    coordinates: [8.20253, 124.85863],

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

  "cowboy's-camp": {
    name: "Cowboy's Camp",
    location: "Libona, Manolo Fortich, Bukidnon",

    description:
      "The Cowboy's Camp in Manolo Fortich, Bukidnon is a beautiful destination for those seeking a peaceful retreat in the highlands.",

    search: "Cowboy's Camp, Manolo Fortich, Bukidnon",

    folder: "cowboy's-camp",

    coordinates: [8.20253, 124.85863],

    photos: ["1.jpg", "2.jpg", "3.jpg"],
  },

  kampojuan: {
    name: "KampoJuan Eco-Adventure Farm",
    location: "Manolo Fortich, Bukidnon",

    description:
      "KampoJuan Eco-Adventure Farm is an eco-adventure destination that combines outdoor recreation with a natural farm environment. It offers visitors a place to enjoy activities and explore the outdoors.",

    search: "KampoJuan Eco Adventure Farm, Manolo Fortich, Bukidnon",

    folder: "kampojuan",

    photos: ["1.jpg", "2.jpg", "3.jpg"],
  },

  "del-monte-pineapple-plantation": {
    name: "Del Monte Pineapple Plantation and Monument",
    location: "Manolo Fortich, Bukidnon",

    description:
      "The Del Monte Pineapple Plantation is associated with the agricultural landscape of Bukidnon. The plantation and its monument are notable landmarks connected to the area's pineapple industry.",

    search: "Del Monte Pineapple Plantation Monument, Manolo Fortich, Bukidnon",

    folder: "del-monte-pineapple-plantation",

    coordinates: [8.3169, 124.8275],

    photos: ["1.jpg", "2.jpg", "3.jpg", "4.webp", "5.avif"],
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

    photos: ["mangima1.png", "mangima2.png", "mangima3.png"],
  },

  "manolo-terminal": {
    name: "Manolo Fortich Bus Terminal",
    location: "Tankulan, Manolo Fortich, Bukidnon",

    description:
      "Manolo Fortich Bus Terminal is a public transportation hub located in Tankulan, Manolo Fortich, Bukidnon.",

    search: "Manolo Fortich Central Station, Tankulan, Bukidnon, Philippines",

    // FIXED LOCATION: MANOLO FORTICH CENTRAL STATION
    coordinates: [8.36628, 124.86506],

    folder: "manolo-terminal",

    photos: ["terminal.png"],
  },

  // --- LOCAL ATTRACTIONS ---
  "kumaykay-river-farm": {
    name: "Kumaykay River Farm",
    location: "Barangay Dalirig, Manolo Fortich, Bukidnon",

    description:
      "Kumaykay River Farm is a serene agri-tourism and nature retreat tucked along the banks of the Kumaykay River in Barangay Dalirig, Manolo Fortich, Bukidnon. Surrounded by vibrant gardens, towering trees, and cool mountain waters, it offers visitors a quiet escape from the city, fresh farm-to-table meals, and cozy riverside cottages.",

    search: "Kumaykay River Farm, Dalirig, Manolo Fortich, Bukidnon",

    folder: "kumaykay-river-farm",

    photos: ["kumaykay1.png"],
  },

  "alalum-falls": {
    name: "Alalum Falls",
    location: "Barangay Dalirig, Manolo Fortich, Bukidnon",

    description:
      "Alalum Falls is one of Manolo Fortich's most iconic natural landmarks, plunging roughly 148 feet down a mossy rock cliff surrounded by dense tropical foliage in Barangay Dalirig, Bukidnon. Located near Sayre Highway, it is a refreshing stopover offering scenic viewpoints and natural beauty.",

    search: "Alalum Falls, Dalirig, Manolo Fortich, Bukidnon",

    folder: "alalum-falls",

    photos: ["alalum1.png"],
  },

  "mangima-spring-resort": {
    name: "Mangima Spring Resort",
    location: "Mangima, Manolo Fortich, Bukidnon",

    description:
      "Mangima Spring Resort is a classic roadside mountain resort nestled within the lush slopes of Mangima Canyon in Manolo Fortich, Bukidnon, famous for its cool natural spring pools, picnic areas, and fresh highland air along Sayre Highway.",

    search: "Mangima Spring Resort, Mangima, Manolo Fortich, Bukidnon",

    folder: "mangima-spring-resort",

    photos: ["resort1.png"],
  },

  "manolo-fortich-municipal-plaza": {
    name: "Manolo Fortich Municipal Plaza",
    location: "Tankulan (Poblacion), Manolo Fortich, Bukidnon",

    description:
      "Located in the heart of Barangay Tankulan, the Manolo Fortich Municipal Plaza serves as the lively civic and social center of the municipality, featuring open lawns, shaded walkways, community landmarks, and afternoon and evening local activity.",

    search:
      "Manolo Fortich Municipal Plaza, Tankulan, Manolo Fortich, Bukidnon",

    folder: "manolo-fortich-municipal-plaza",

    photos: ["plaza1.png"],
  },
};

// ==========================================
// 2. GLOBAL VARIABLES
// ==========================================

let map = null;

let destinationMarker = null;
let userMarker = null;
let routeLine = null;

let currentPhotoIndex = 0;
let currentDestination = null;

let destinationCoordinates = null;
let destinationPromise = null;

let autoSlideTimer = null;

// ==========================================
// 3. LOAD DESTINATION PAGE
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

  // Load destination coordinates immediately.
  destinationPromise = locateDestination();
});

// ==========================================
// 4. DISPLAY DESTINATION INFORMATION
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
// 5. IMAGE SLIDESHOW
// ==========================================

function showPhoto() {
  const photo = currentDestination.photos[currentPhotoIndex];

  const destinationImage = document.getElementById("destinationPhoto");

  const imagePath =
    "../../images/destinations/" + currentDestination.folder + "/" + photo;

  destinationImage.alt =
    currentDestination.name + " photo " + (currentPhotoIndex + 1);

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
    currentPhotoIndex + 1 + " / " + currentDestination.photos.length;
}

function nextPhoto() {
  currentPhotoIndex++;

  if (currentPhotoIndex >= currentDestination.photos.length) {
    currentPhotoIndex = 0;
  }

  showPhoto();
}

function previousPhoto() {
  currentPhotoIndex--;

  if (currentPhotoIndex < 0) {
    currentPhotoIndex = currentDestination.photos.length - 1;
  }

  showPhoto();
}

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
// 6. BUTTON SETUP
// ==========================================

function setupButtons() {
  document.getElementById("nextPhoto").addEventListener("click", function () {
    nextPhoto();
    startAutoSlide();
  });

  document
    .getElementById("previousPhoto")
    .addEventListener("click", function () {
      previousPhoto();
      startAutoSlide();
    });

  document
    .getElementById("showMyLocationBtn")
    .addEventListener("click", getCurrentLocation);

  document
    .getElementById("clearRouteBtn")
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
// 7. INITIALIZE LEAFLET MAP
// ==========================================

function initializeMap() {
  const status = document.getElementById("locationStatus");

  if (typeof L === "undefined") {
    status.textContent =
      "Map library could not be loaded. Check your internet connection.";
    return;
  }

  // INITIALIZE MAP
  map = L.map("map", {
    center: [8.20253, 124.85863],
    zoom: 15,
    zoomControl: true,
  });

  // SATELLITE IMAGERY
  const satelliteMap = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      maxZoom: 19,
      attribution:
        "Tiles &copy; Esri — Source: Esri, Maxar, Earthstar Geographics, and GIS User Community",
    },
  );

  // STREET MAP
  const streetMap = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  );

  // DEFAULT MAP: SATELLITE
  satelliteMap.addTo(map);

  // MAP LAYER SWITCHER
  const baseMaps = {
    "Satellite View": satelliteMap,
    "Street Map": streetMap,
  };

  L.control
    .layers(baseMaps, null, {
      collapsed: false,
      position: "topright",
    })
    .addTo(map);

  // SCALE INDICATOR
  L.control
    .scale({
      imperial: false,
      metric: true,
      position: "bottomleft",
    })
    .addTo(map);

  // MAP CLICK COORDINATES
  map.on("click", function (event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    L.popup()
      .setLatLng(event.latlng)
      .setContent(
        "<b>Location Coordinates</b><br>" +
          "Latitude: " +
          lat.toFixed(5) +
          "<br>Longitude: " +
          lng.toFixed(5),
      )
      .openOn(map);
  });

  // FIX MAP DISPLAY SIZE
  setTimeout(function () {
    map.invalidateSize();
  }, 300);

  status.textContent = "Map loaded successfully.";
}

// ==========================================
// 8. LOCATE DESTINATION
// ==========================================

async function locateDestination() {
  const status = document.getElementById("locationStatus");

  status.textContent = "Loading destination location...";

  try {
    let coordinates;

    // USE FIXED COORDINATES IF AVAILABLE

    if (currentDestination.coordinates) {
      coordinates = currentDestination.coordinates;
    } else {
      // USE NOMINATIM FOR OTHER DESTINATIONS

      const url =
        "https://nominatim.openstreetmap.org/search?format=json&limit=1&q=" +
        encodeURIComponent(currentDestination.search);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Destination search service is unavailable.");
      }

      const results = await response.json();

      if (!Array.isArray(results) || results.length === 0) {
        throw new Error("Destination coordinates could not be found.");
      }

      coordinates = [Number(results[0].lat), Number(results[0].lon)];
    }

    const lat = Number(coordinates[0]);
    const lng = Number(coordinates[1]);

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

    status.textContent = "Destination location loaded successfully.";

    return destinationCoordinates;
  } catch (error) {
    console.error("Destination location error:", error);

    status.textContent = error.message;

    // Return null instead of rejecting an unhandled promise.
    return null;
  }
}

// ==========================================
// 9. GET CURRENT GPS LOCATION
// ==========================================

function getCurrentLocation() {
  const status = document.getElementById("locationStatus");

  if (!window.isSecureContext) {
    status.textContent = "GPS requires HTTPS or localhost.";

    return;
  }

  if (!navigator.geolocation) {
    status.textContent = "GPS is not supported by this browser.";

    return;
  }

  if (!map) {
    status.textContent = "Map is unavailable. Please refresh the page.";

    return;
  }

  status.textContent = "Getting your current location...";

  navigator.geolocation.getCurrentPosition(
    async function (position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      const userCoordinates = [lat, lng];

      // REMOVE PREVIOUS USER MARKER

      if (userMarker) {
        map.removeLayer(userMarker);
      }

      // ADD USER MARKER

      userMarker = L.marker(userCoordinates)
        .addTo(map)
        .bindPopup("Your current location")
        .openPopup();

      status.textContent = "Location found. Preparing route and weather...";

      try {
        // WAIT FOR DESTINATION COORDINATES

        if (!destinationCoordinates) {
          const result = await destinationPromise;

          if (!result) {
            throw new Error("Destination coordinates are unavailable.");
          }
        }

        if (!destinationCoordinates) {
          throw new Error("Destination coordinates are unavailable.");
        }

        // RUN ROUTING AND WEATHER INDEPENDENTLY

        const routeTask = getRoute(userCoordinates, destinationCoordinates);

        const weatherTask = loadWeatherForecast(
          userCoordinates,
          destinationCoordinates,
        );

        await Promise.allSettled([routeTask, weatherTask]);
      } catch (error) {
        console.error("GPS process error:", error);

        status.textContent = "Unable to prepare route: " + error.message;
      }
    },

    function (error) {
      if (error.code === error.PERMISSION_DENIED) {
        status.textContent =
          "Location permission denied. Please allow GPS access.";
      } else if (error.code === error.POSITION_UNAVAILABLE) {
        status.textContent = "Your current location is unavailable.";
      } else if (error.code === error.TIMEOUT) {
        status.textContent = "GPS request timed out. Please try again.";
      } else {
        status.textContent = "Unable to retrieve your location.";
      }
    },

    {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 0,
    },
  );
}

// ==========================================
// 10. GET DRIVING ROUTE USING OSRM
// ==========================================

async function getRoute(start, end) {
  const status = document.getElementById("locationStatus");

  const information = document.getElementById("routeInformation");

  status.textContent = "Calculating driving route...";

  information.textContent = "";

  // OSRM USES LONGITUDE, LATITUDE

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
    const controller = new AbortController();

    const timeoutId = setTimeout(function () {
      controller.abort();
    }, 20000);

    let response;

    try {
      response = await fetch(url, {
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeoutId);
    }

    if (!response.ok) {
      throw new Error("Routing service error: " + response.status);
    }

    const data = await response.json();

    if (
      data.code !== "Ok" ||
      !Array.isArray(data.routes) ||
      data.routes.length === 0 ||
      !data.routes[0].geometry
    ) {
      throw new Error(data.message || "No driving route was found.");
    }

    const route = data.routes[0];

    // REMOVE OLD ROUTE

    if (routeLine) {
      map.removeLayer(routeLine);
    }

    // DRAW NEW ROUTE

    routeLine = L.geoJSON(route.geometry, {
      style: {
        color: "#2458d8",
        weight: 6,
        opacity: 0.85,
      },
    }).addTo(map);

    // FIT MAP TO ROUTE

    const routeBounds = routeLine.getBounds();

    if (userMarker) {
      routeBounds.extend(userMarker.getLatLng());
    }

    if (destinationMarker) {
      routeBounds.extend(destinationMarker.getLatLng());
    }

    map.fitBounds(routeBounds, {
      padding: [40, 40],
      maxZoom: 15,
    });

    // CALCULATE DISTANCE AND DURATION

    const distance = (route.distance / 1000).toFixed(2);

    const duration = Math.round(route.duration / 60);

    const hours = Math.floor(duration / 60);

    const minutes = duration % 60;

    let travelTime = "";

    if (hours > 0) {
      travelTime += hours + " hr ";
    }

    travelTime += minutes + " min";

    // DISPLAY ROUTE INFORMATION

    information.innerHTML =
      "<h3>Route Information</h3>" +
      "<p><strong>Distance:</strong> " +
      distance +
      " km</p>" +
      "<p><strong>Estimated Travel Time:</strong> " +
      travelTime +
      "</p>" +
      "<p><strong>Travel Mode:</strong> Driving</p>";

    status.textContent = "Route successfully calculated.";
  } catch (error) {
    console.error("Route calculation error:", error);

    if (error.name === "AbortError") {
      status.textContent = "Route request timed out. Please try again.";
    } else {
      status.textContent = "Unable to calculate route: " + error.message;
    }
  }
}

// ==========================================
// 11. CLEAR ROUTE
// ==========================================

function clearRoute() {
  if (routeLine && map) {
    map.removeLayer(routeLine);

    routeLine = null;
  }

  document.getElementById("routeInformation").textContent = "Route cleared.";

  document.getElementById("locationStatus").textContent =
    "Route cleared. Your location and destination markers remain on the map.";
}

// ==========================================
// 12. OPEN-METEO WEATHER API
// ==========================================

async function getWeather(latitude, longitude) {
  const parameters = new URLSearchParams({
    latitude: latitude,
    longitude: longitude,

    current:
      "temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m",

    daily:
      "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max",

    forecast_days: 3,

    timezone: "auto",

    temperature_unit: "celsius",

    wind_speed_unit: "kmh",
  });

  const url = "https://api.open-meteo.com/v1/forecast?" + parameters.toString();

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Weather service error: " + response.status);
  }

  const data = await response.json();

  if (data.error) {
    throw new Error(data.reason || "Unable to retrieve weather.");
  }

  if (!data.current || !data.daily) {
    throw new Error("Incomplete weather information.");
  }

  return data;
}

// ==========================================
// 13. WEATHER DESCRIPTIONS
// ==========================================

function getWeatherDescription(code) {
  const weatherCodes = {
    0: ["Clear sky", "☀️"],
    1: ["Mainly clear", "🌤️"],
    2: ["Partly cloudy", "⛅"],
    3: ["Overcast", "☁️"],

    45: ["Fog", "🌫️"],
    48: ["Depositing rime fog", "🌫️"],

    51: ["Light drizzle", "🌦️"],
    53: ["Moderate drizzle", "🌦️"],
    55: ["Dense drizzle", "🌧️"],

    56: ["Freezing drizzle", "🌧️"],
    57: ["Heavy freezing drizzle", "🌧️"],

    61: ["Slight rain", "🌦️"],
    63: ["Moderate rain", "🌧️"],
    65: ["Heavy rain", "🌧️"],

    66: ["Freezing rain", "🌧️"],
    67: ["Heavy freezing rain", "🌧️"],

    71: ["Slight snowfall", "🌨️"],
    73: ["Moderate snowfall", "🌨️"],
    75: ["Heavy snowfall", "❄️"],
    77: ["Snow grains", "❄️"],

    80: ["Slight rain showers", "🌦️"],
    81: ["Moderate rain showers", "🌧️"],
    82: ["Violent rain showers", "⛈️"],

    85: ["Slight snow showers", "🌨️"],
    86: ["Heavy snow showers", "❄️"],

    95: ["Thunderstorm", "⛈️"],
    96: ["Thunderstorm with hail", "⛈️"],
    99: ["Heavy thunderstorm with hail", "⛈️"],
  };

  return weatherCodes[code] || ["Unknown conditions", "🌡️"];
}

// ==========================================
// 14. DISPLAY WEATHER CARD
// ==========================================

function displayWeatherCard(title, type, data) {
  const current = data.current;

  const daily = data.daily;

  const condition = getWeatherDescription(current.weather_code);

  let forecastHTML = "";

  for (let i = 0; i < daily.time.length; i++) {
    const forecastCondition = getWeatherDescription(daily.weather_code[i]);

    const date = new Date(daily.time[i] + "T12:00:00");

    const dayName = date.toLocaleDateString("en-PH", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });

    const minimum = Math.round(daily.temperature_2m_min[i]);

    const maximum = Math.round(daily.temperature_2m_max[i]);

    const rain = daily.precipitation_probability_max[i];

    forecastHTML += `

            <div class="weather-day">

                <span class="weather-day-name">
                    ${dayName}
                </span>

                <span class="weather-day-temp">

                    <span class="weather-day-icon">
                        ${forecastCondition[1]}
                    </span>

                    ${minimum}° / ${maximum}°

                </span>

                <span class="weather-day-rain">
                    ${rain ?? "—"}% rain
                </span>

            </div>

        `;
  }

  return `

        <div class="weather-card">

            <div class="weather-card-header">

                <h3>${title}</h3>

                <span class="weather-location-type">
                    ${type}
                </span>

            </div>


            <div class="weather-current">

                <span class="weather-icon">
                    ${condition[1]}
                </span>

                <div>

                    <div class="weather-temperature">
                        ${Math.round(current.temperature_2m)}°C
                    </div>

                    <div class="weather-description">
                        ${condition[0]}
                    </div>

                </div>

            </div>


            <div class="weather-details">

                <div class="weather-detail">

                    <span>Feels like</span>

                    <strong>
                        ${Math.round(current.apparent_temperature)}°C
                    </strong>

                </div>


                <div class="weather-detail">

                    <span>Humidity</span>

                    <strong>
                        ${current.relative_humidity_2m}%
                    </strong>

                </div>


                <div class="weather-detail">

                    <span>Wind speed</span>

                    <strong>
                        ${current.wind_speed_10m} km/h
                    </strong>

                </div>


                <div class="weather-detail">

                    <span>Weather code</span>

                    <strong>
                        ${current.weather_code}
                    </strong>

                </div>

            </div>


            <div class="weather-forecast-title">
                3-Day Forecast
            </div>


            ${forecastHTML}

        </div>

    `;
}

// ==========================================
// 15. LOAD WEATHER FORECAST
// ==========================================

async function loadWeatherForecast(userCoordinates, destinationCoordinates) {
  const weatherPanel = document.getElementById("weatherPanel");

  const weatherStatus = document.getElementById("weatherStatus");

  const weatherCards = document.getElementById("weatherCards");

  // DISPLAY WEATHER PANEL

  weatherPanel.hidden = false;

  weatherStatus.textContent = "Loading weather information...";

  weatherCards.innerHTML = "";

  try {
    // REQUEST BOTH LOCATIONS AT THE SAME TIME

    const results = await Promise.allSettled([
      getWeather(userCoordinates[0], userCoordinates[1]),

      getWeather(destinationCoordinates[0], destinationCoordinates[1]),
    ]);

    let cardsHTML = "";

    // CURRENT LOCATION WEATHER

    if (results[0].status === "fulfilled") {
      cardsHTML += displayWeatherCard(
        "Your Current Location",
        "GPS LOCATION",
        results[0].value,
      );
    } else {
      console.error("Current location weather error:", results[0].reason);

      cardsHTML += `

                <div class="weather-card">

                    <h3>Your Current Location</h3>

                    <p>Weather information is unavailable.</p>

                </div>

            `;
    }

    // DESTINATION WEATHER

    if (results[1].status === "fulfilled") {
      cardsHTML += displayWeatherCard(
        currentDestination.name,
        "DESTINATION",
        results[1].value,
      );
    } else {
      console.error("Destination weather error:", results[1].reason);

      cardsHTML += `

                <div class="weather-card">

                    <h3>${currentDestination.name}</h3>

                    <p>Weather information is unavailable.</p>

                </div>

            `;
    }

    weatherCards.innerHTML = cardsHTML;

    if (
      results[0].status === "fulfilled" &&
      results[1].status === "fulfilled"
    ) {
      weatherStatus.textContent = "Weather information successfully updated.";
    } else {
      weatherStatus.textContent =
        "Some weather information could not be retrieved.";
    }
  } catch (error) {
    console.error("Weather loading error:", error);

    weatherStatus.textContent =
      "Unable to load weather information. Please try again.";
  }
}
