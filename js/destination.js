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
      "Tucked in Barangay Dahilayan, Manolo Fortich, Bukidnon, Dahilayan Adventure Park pairs crisp highland air and pine-lined slopes with active outdoor recreation. Visitors can enjoy thrilling rides, scenic views, and family-friendly spaces set within a refreshing mountain environment.",

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
      "Cowboy's Camp offers a laid-back countryside retreat in Libona, Bukidnon, shaped by rustic ranch touches, open views, and cool upland breezes. It is an inviting spot for relaxed photo stops, easy sightseeing, and unhurried time with family and friends.",

    search: "Cowboy's Camp, Manolo Fortich, Bukidnon",

    folder: "cowboy's-camp",

    coordinates: [8.3491, 124.7122],

    photos: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
  },

  "del-monte-golf-course": {
    name: "Del Monte Golf Course",
    location: "San Miguel, Manolo Fortich, Bukidnon",

    description:
      "Set in San Miguel, Manolo Fortich, Bukidnon, Del Monte Golf Course features an 18-hole layout bordered by towering pines, manicured greens, and breezy highland scenery. Whether you are teeing off or simply taking in the quiet surroundings, it offers a calm and refreshing break.",

    search: "Del Monte Golf Course, Manolo Fortich, Bukidnon",

    folder: "del-monte-golf-course",

    coordinates: [8.3778, 124.8372],

    photos: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
  },

  "kampojuan-eco-adventure-farm": {
    name: "KampoJuan Eco-Adventure Farm",
    location: "Manolo Fortich, Bukidnon",

    description:
      "KampoJuan Eco-Adventure Farm blends outdoor thrills, lush greenery, and local heritage in Manolo Fortich, Bukidnon. Guests can try sky biking or ziplining, stroll through shaded farm grounds, and browse heritage pieces and antiques in a lively countryside setting.",

    search: "KampoJuan Eco Adventure Farm, Manolo Fortich, Bukidnon",

    folder: "kampojuan-eco-adventure-farm",

    coordinates: [8.3949, 124.8475],

    photos: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
  },

  "bukidnon-provincial-hospital": {
    name: "Bukidnon Provincial Hospital",
    location: "San Miguel, Manolo Fortich, Bukidnon",

    description:
      "Bukidnon Provincial Hospital – Manolo Fortich is a government healthcare facility located in Barangay San Miguel, Manolo Fortich, Bukidnon. It provides essential medical services, including general consultations, laboratory tests, X-rays, pediatrics, surgery, and maternal care, serving the healthcare needs of the local community and nearby areas.",

    search: "Bukidnon Provincial Hospital, Manolo Fortich, Bukidnon",

    folder: "bukidnon-provincial-hospital",

    coordinates: [8.3842306, 124.8389835],

    photos: ["1.jpg", "2.jpg", "3.jpg"],
  },

  "del-monte-pineapple-plantation": {
    name: "Del Monte Pineapple Plantation and Monument",
    location: "Manolo Fortich, Bukidnon",

    description:
      "Spanning the rolling uplands of Manolo Fortich, Bukidnon, the Del Monte Pineapple Plantation and Monument highlights the province's long-standing agricultural roots. The wide pineapple fields and historic marker showcase an iconic part of local livelihood and scenery.",

    search: "Del Monte Pineapple Plantation Monument, Manolo Fortich, Bukidnon",

    folder: "del-monte-pineapple-plantation",

    coordinates: [8.3169, 124.8275],

    photos: ["1.jpg", "2.jpg", "3.jpg", "4.webp", "5.avif"],
  },

  "del-monte-soccer-field": {
    name: "Del Monte Soccer Field",
    location: "Camp Phillips, Manolo Fortich, Bukidnon",

    description:
      "Del Monte Soccer Field is a popular athletic ground in Camp Phillips, Manolo Fortich, Bukidnon, prized for its expansive turf and energetic sports culture. Framed by cool highland breezes and scenic views, it regularly hosts tournaments, friendly games, and active community gatherings.",

    search: "Del Monte Soccer Field, Manolo Fortich, Bukidnon",

    coordinates: [8.3225244, 124.8124888],

    folder: "del-monte-soccer-field",

    photos: ["soccer.png", "soccer1.png", "soccer2.png", "soccer3.png"],
  },

  "manolo-fortich-municipal-hall": {
    name: "Manolo Fortich Municipal Hall",
    location: "Tankulan (Poblacion), Manolo Fortich, Bukidnon",

    description:
      "Manolo Fortich Municipal Hall serves as a prominent public landmark in Tankulan, Manolo Fortich, Bukidnon, symbolizing local leadership, heritage, and town pride. Located within the center of the municipality, it anchors civic life and showcases the community's ongoing progress.",

    search: "Manolo Fortich Municipal Hall, Manolo Fortich, Bukidnon",

    coordinates: [8.3688, 124.8648],

    folder: "manolo-fortich-municipal-hall",

    photos: ["municipal.png"],
  },

  "view-deck-maluko": {
    name: "Maluko View Deck",
    location: "Manolo Fortich, Bukidnon",

    description:
      "**View Deck Maluko** in Manolo Fortich, Bukidnon, is a lovely stop for travelers who want to enjoy beautiful mountain scenery and a refreshing countryside atmosphere. Surrounded by rolling green landscapes and breathtaking views, it offers a great spot for sightseeing, taking memorable photos, and enjoying a peaceful break along your journey. Whether you're traveling with family or friends, it's a simple yet worthwhile place to appreciate the natural beauty of Bukidnon.",

    search: "Maluko View Deck, Manolo Fortich, Bukidnon",

    folder: "view-deck-maluko",

    coordinates: [8.3804387, 124.9302129],

    photos: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
  },

  "ogaong-view-deck": {
    name: "Ogaong View Deck",
    location: "Manolo Fortich, Bukidnon",

    description:
      "Perched above the uplands of Manolo Fortich, Bukidnon, Ogaong View Deck rewards visitors with sweeping views of Tagoloan River Canyon, rolling hills, and surrounding ridges. Fresh mountain air, camping spots, and sunrise vistas make it a standout stop for scenic relaxation.",

    search: "Ogaong View Deck, Manolo Fortich, Bukidnon",

    folder: "ogaong-view-deck",

    coordinates: [8.4398, 124.8776],

    photos: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
  },

  "church-of-our-lady-of-perpetual-help": {
    name: "Church of Our Lady of Perpetual Help",
    location: "Cawayanon, Manolo Fortich, Bukidnon",

    description:
      "Our Lady of Perpetual Help Church in Manolo Fortich, Bukidnon, is a welcoming place of worship where visitors can experience peace, prayer, and reflection. Known for its religious significance and strong Catholic community, the church offers a quiet space for attending Mass, expressing gratitude, and strengthening one's faith. It is a meaningful destination for both locals and travelers seeking a moment of spiritual connection.",

    search: "Our Lady of Perpetual Help Church, Manolo Fortich, Bukidnon",

    folder: "church-of-our-lady-of-perpetual-help",

    coordinates: [8.381, 124.8343],

    photos: ["1.jpg", "2.jpg", "3.webp", "4.jpg", "5.jpg", "6.jpg"],
  },

  "macarthur-landmark": {
    name: "General Douglas MacArthur Landmark",
    location: "Manolo Fortich, Bukidnon",

    description:
      "General Douglas MacArthur Landmark commemorates a notable piece of local history framed by Manolo Fortich's natural terrain. Blending heritage with scenic surroundings, it invites visitors to pause, take in the view, and appreciate the area's past.",

    search: "General Douglas MacArthur Landmark, Manolo Fortich, Bukidnon",

    folder: "macarthur-landmark",

    photos: [
      "macarthur.png",
      "macarthur1.png",
      "macarthur2.png",
      "macarthur3.png",
    ],
  },

  "mangima-heroes-shrine": {
    name: "Mangima Heroes Shrine",
    location: "Mangima, Manolo Fortich, Bukidnon",

    description:
      "Mangima Heroes Shrine stands as a solemn tribute to bravery and service, surrounded by the lush greenery of Mangima in Manolo Fortich, Bukidnon. Built to honor WWII defenders and local courage, its quiet setting offers a meaningful pause along the highlands.",

    search: "Mangima Heroes Shrine, Manolo Fortich, Bukidnon",

    folder: "mangima-heroes-shrine",

    photos: ["mangima1.png", "mangima2.png", "mangima3.png"],
  },

  "eagle-landmark-guilang-guilang": {
    name: "Eagle Landmark Guilang-Guilang",
    location: "Guilang-Guilang, Manolo Fortich, Bukidnon",

    description:
      "Eagle Landmark in Barangay Guilang-Guilang stands out as a scenic viewpoint in Manolo Fortich, Bukidnon, rewarding visitors with expansive valley views and crisp highland weather. It is a favorite photo stop for travelers seeking elevated landscapes and open-air beauty.",

    search: "Eagle Landmark Guilang-Guilang, Manolo Fortich, Bukidnon",

    coordinates: [8.3289, 124.9183],

    folder: "eagle-landmark",

    photos: [
      "eagle-landmark.png",
      "eagle-landmark1.png",
      "eagle-landmark2.png",
    ],
  },

  "nasiklapan-falls": {
    name: "Nasiklapan Falls",
    location: "Manolo Fortich, Bukidnon",

    description:
      "Nasiklapan Falls is a hidden waterfall retreat framed by dense foliage and refreshing mountain air in Manolo Fortich, Bukidnon. It draws nature lovers looking for a scenic walk, cool waters, and a peaceful break from crowded tourist spots.",

    search: "Nasiklapan Falls, Manolo Fortich, Bukidnon",

    coordinates: [8.3515, 124.8924],

    folder: "nasiklapan-falls",

    photos: ["falls.png", "falls1.png"],
  },

  "sumalsag-cave": {
    name: "Sumalsag Cave",
    location: "Manolo Fortich, Bukidnon",

    description:
      "Sumalsag Cave provides a fascinating subterranean stop for travelers eager to see natural rock formations in a cool, shaded setting in Manolo Fortich, Bukidnon. It brings a sense of discovery and adventure to any nature itinerary around the highlands.",

    search: "Sumalsag Cave, Manolo Fortich, Bukidnon",

    coordinates: [8.3482, 124.8879],

    folder: "sumalsag-cave",

    photos: ["cave.png", "cave1.png", "cave2.png", "cave3.png"],
  },

  "manolo-terminal": {
    name: "Manolo Fortich Bus Terminal",
    location: "Tankulan, Manolo Fortich, Bukidnon",

    description:
      "Manolo Fortich Bus Terminal acts as the main transit point in Tankulan, Manolo Fortich, Bukidnon, linking passengers to surrounding barangays, neighboring towns, and major highland spots. It provides a convenient jumping-off point for travelers exploring the province.",

    search: "Manolo Fortich Central Station, Tankulan, Bukidnon, Philippines",

    // FIXED LOCATION: MANOLO FORTICH CENTRAL STATION
    coordinates: [8.36628, 124.86506],

    folder: "manolo-terminal",

    photos: ["terminal.png"],
  },

  "our-lady-of-the-immaculate-conception-parish": {
    name: "Our Lady of the Immaculate Conception Parish",
    location: "Poblacion, Manolo Fortich, Bukidnon",

    description:
      "Our Lady of the Immaculate Conception Parish is a treasured church and spiritual landmark in Poblacion, Manolo Fortich, Bukidnon. Known for its serene atmosphere and deep roots in community tradition, it offers visitors a restful place for reflection along their journey.",

    search:
      "Our Lady of the Immaculate Conception Parish, Manolo Fortich, Bukidnon",

    coordinates: [8.3686, 124.8639],

    folder: "immaculate-conception-church",

    photos: ["church.png", "church1.png", "church2.png", "church3.png"],
  },

  // --- LOCAL ATTRACTIONS ---
  "kumaykay-river-farm": {
    name: "Kumaykay River Farm",
    location: "Dahilayan, Manolo Fortich, Bukidnon",

    description:
      "Tucked beside cool mountain waters and leafy trees in Manolo Fortich, Bukidnon, Kumaykay River Farm is a calm nature and farm escape. Visitors can unwind by the river, enjoy fresh farm-style food, try outdoor activities, and spend relaxed days with family and friends.",

    search: "Kumaykay River Farm, Dalirig, Manolo Fortich, Bukidnon",

    coordinates: [8.22177, 124.8568],

    folder: "kumaykay-river-farm",

    photos: ["1.webp", "2.webp", "3.jpg", "4.jpg", "5.webp", "6.webp"],
  },

  "alalum-falls": {
    name: "Alalum Falls",
    location: "Barangay Dalirig, Manolo Fortich, Bukidnon",

    description:
      "Set in Barangay Dalirig, Manolo Fortich, Bukidnon, Alalum Falls is a striking cascade plunging down a mossy cliff amid lush greenery. Its natural setting and cool mountain air make it a memorable scenic stop near the highway.",

    search: "Alalum Falls, Dalirig, Manolo Fortich, Bukidnon",

    folder: "alalum-falls",

    photos: ["alalum1.png"],
  },

  "mangima-spring-resort": {
    name: "Mangima Spring Resort",
    location: "Mangima, Manolo Fortich, Bukidnon",

    description:
      "Nestled along the green slopes of Mangima in Manolo Fortich, Bukidnon, Mangima Spring Resort offers cool spring waters, shaded picnic spots, and crisp highland air. It is a classic, refreshing stop for travelers passing through the area.",

    search: "Mangima Spring Resort, Mangima, Manolo Fortich, Bukidnon",

    folder: "mangima-spring-resort",

    photos: ["resort1.png"],
  },

  "manolo-fortich-municipal-plaza": {
    name: "Manolo Fortich Municipal Plaza",
    location: "Tankulan (Poblacion), Manolo Fortich, Bukidnon",

    description:
      "Manolo Fortich Municipal Plaza is a lively public park in Tankulan, Manolo Fortich, Bukidnon, featuring open lawns, shade trees, and a relaxed space for casual walks and local events. It gives both residents and travelers an inviting spot to enjoy the town's everyday charm.",

    search:
      "Manolo Fortich Municipal Plaza, Tankulan, Manolo Fortich, Bukidnon",

    coordinates: [8.3682, 124.8645],

    folder: "manolo-municipal-plaza",

    photos: ["plaza.png", "plaza0.png", "plaza1.png", "plaza2.png"],
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

function getImageRootPrefix() {
  return window.location.pathname.includes("nature-&-landmarks")
    ? "../../../"
    : "../../";
}

function showPhoto() {
  const photos = currentDestination.photos || [];
  if (photos.length === 0) return;

  const photo = photos[currentPhotoIndex];
  const destinationImage = document.getElementById("destinationPhoto");
  const counterEl = document.getElementById("photoCounter");

  if (counterEl) {
    counterEl.textContent = currentPhotoIndex + 1 + " / " + photos.length;
  }

  if (!destinationImage) return;

  const root = getImageRootPrefix();
  const imagePath =
    root + "images/destinations/" + currentDestination.folder + "/" + photo;
  const fallbackPath = root + "images/logo.png";

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
    if (destinationImage.getAttribute("src") !== fallbackPath) {
      destinationImage.src = fallbackPath;
    }
  };

  newImage.src = imagePath;
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
