const destinations = [
  {
    name: "Dahilayan Adventure Park",
    category: "adventure",
    description:
      "A cool highland park known for exciting outdoor rides, pine scenery, and active mountain fun.",
    image: "images/destinations/dahilayan-adventure-park/entrance.jpg",
    link: "destinations/adventure/dahilayan-adventure-park.html",
  },
  {
    name: "Cowboy's Camp",
    category: "adventure",
    description:
      "A laid-back countryside spot with rustic ranch charm, open views, and fresh upland air.",
    image: "images/destinations/cowboy's-camp/1.jpg",
    link: "destinations/adventure/cowboy's-camp.html",
  },
  {
    name: "Del Monte Golf Course",
    category: "adventure",
    description:
      "A pine-lined 18-hole course offering breezy highland weather, green fairways, and a calm escape.",
    image: "images/destinations/del-monte-golf-course/3.jpg",
    link: "destinations/adventure/del-monte-golf-course.html",
  },
  {
    name: "KampoJuan Eco-Adventure Farm",
    category: "adventure",
    description:
      "An outdoor farm stop combining sky rides, nature trails, and local heritage pieces.",
    image: "images/destinations/kampojuan-eco-adventure-farm/1.jpg",
    link: "destinations/adventure/kampojuan-eco-adventure-farm.html",
  },
  {
    name: "Kumaykay River Farm",
    category: "adventure",
    description:
      "A quiet riverside farm retreat with cool mountain water, greenery, and relaxed outdoor activities.",
    image: "images/destinations/kumaykay-river-farm/1.webp",
    link: "destinations/adventure/kumaykay-river-farm.html",
  },
  {
    name: "Ogaong View Deck",
    category: "adventure",
    description:
      "An upland overlook featuring wide canyon views, rolling hills, and cool highland breezes.",
    image: "images/destinations/ogaong-view-deck/1.jpg",
    link: "destinations/adventure/ogaong-view-deck.html",
  },
  {
    name: "View deck Maluko",
    category: "adventure",
    description:
      "A scenic viewpoint in Maluko offering open mountain air and elevated views of the surrounding terrain.",
    image: "images/destinations/view-deck-maluko/view1.png",
    link: "destinations/adventure/view-deck-maluko.html",
  },
  {
    name: "Del Monte Pineapple Plantation and Monument",
    category: "key places",
    description:
      "Wide pineapple fields and a historic marker celebrating Bukidnon's agricultural roots.",
    image: "images/destinations/del-monte-pineapple-plantation/1.jpg",
    link: "destinations/major-&-historical-places/del-monte-pineapple-plantation.html",
  },
  {
    name: "Bukidnon Provincial Hospital",
    category: "key places",
    description:
      "A key healthcare facility serving communities across Manolo Fortich and nearby areas.",
    image: "images/destinations/bukidnon-provincial-hospital/hospital1.png",
    link: "destinations/major-&-historical-places/bukidnon-provincial-hospital.html",
  },
  {
    name: "Our Lady of Perpetual Help Parish Church",
    category: "historical places",
    description:
      "A local parish church reflecting faith, quiet devotion, and community heritage.",
    image:
      "images/destinations/our-lady-of-perpetual-help-parish-church/church1.png",
    link: "destinations/major-&-historical-places/our-lady-of-perpetual-help-parish-church.html",
  },
  {
    name: "Del Monte Airstrip",
    category: "historical places",
    description:
      "A notable aviation landmark tied to the history and operations of the highlands.",
    image: "images/destinations/del-monte-airstrip/airstrip1.png",
    link: "destinations/major-&-historical-places/del-monte-airstrip.html",
  },
  {
    name: "Del Monte Soccer Field",
    category: "key places",
    description:
      "An expansive grassy pitch in Manolo Fortich known for lively games, fresh air, and sports events.",
    image: "images/destinations/del-monte-soccer-field/soccer.png",
    link: "destinations/major-&-historical-places/del-monte-soccer-field.html",
  },
  {
    name: "Manolo Fortich Municipal Hall",
    category: "key places",
    description:
      "The central civic building of Manolo Fortich, representing local governance and town heritage.",
    image: "images/destinations/manolo-fortich-municipal-hall/municipal.png",
    link: "destinations/major-&-historical-places/manolo-fortich-municipal-hall.html",
  },
  {
    name: "Manolo Fortich Municipal Plaza",
    category: "key places",
    description:
      "A breezy, open public park suited for evening strolls, relaxation, and town gatherings.",
    image: "images/destinations/manolo-municipal-plaza/plaza.png",
    link: "destinations/major-&-historical-places/manolo-fortich-municipal-plaza.html",
  },
  {
    name: "Our Lady of the Immaculate Conception Parish Church",
    category: "historical places",
    description:
      "A serene local church celebrating faith, heritage, and quiet reflection.",
    image: "images/destinations/immaculate-conception-church/church.png",
    link: "destinations/major-&-historical-places/our-lady-of-the-immaculate-conception-parish.html",
  },
  {
    name: "Philippine Eagle Landmark",
    category: "landmarks",
    description:
      "An elevated viewpoint offering sweeping mountain scenery and cool highland breezes.",
    image: "images/destinations/eagle-landmark/eagle-landmark.png",
    link: "destinations/nature-&-landmarks/eagle-landmark-guilang-guilang.html",
  },
  {
    name: "General Douglas MacArthur Landmark",
    category: "landmarks",
    description:
      "A historic marker set against scenic Bukidnon landscapes for sightseeing and heritage trips.",
    image: "images/destinations/macarthur-landmark/macarthur.png",
    link: "destinations/nature-&-landmarks/macarthur-landmark.html",
  },
  {
    name: "Mangima Heroes Shrine",
    category: "landmarks",
    description:
      "A tranquil memorial honoring local courage amid natural greenery.",
    image: "images/destinations/mangima-heroes-shrine/mangima1.png",
    link: "destinations/nature-&-landmarks/mangima-heroes-shrine.html",
  },
  {
    name: "Manolo Fortich Bus Terminal",
    category: "key places",
    description:
      "The main transport hub in Manolo Fortich connecting commuters and visitors across Bukidnon.",
    image: "images/destinations/manolo-terminal/terminal.png",
    link: "destinations/major-&-historical-places/manoloTerminal.html",
  },
  {
    name: "Nasiklapan Falls",
    category: "nature",
    description:
      "A secluded waterfall surrounded by lush forest and cool, refreshing air.",
    image: "images/destinations/nasiklapan-falls/falls.png",
    link: "destinations/nature-&-landmarks/nasiklapan-falls.html",
  },
  {
    name: "Sumalsag Cave",
    category: "nature",
    description:
      "A cool, rocky cavern offering an exciting underground stop for nature explorers.",
    image: "images/destinations/sumalsag-cave/cave.png",
    link: "destinations/nature-&-landmarks/sumalsag-cave.html",
  },

  // --- LOCAL ATTRACTIONS (shown ONLY when "Local attractions" is clicked) ---
  {
    name: "Kumaykay River Farm",
    category: "local",
    description:
      "A peaceful farm-and-river stop with garden paths, cozy stays, and cool upland air.",
    image: "images/destinations/kumaykay-river-farm/1.webp",
    link: "destinations/kumaykay-river-farm.html",
  },
  {
    name: "Manolo Fortich Municipal Plaza",
    category: "local",
    description:
      "An inviting town square with open lawns, evening snacks, and everyday local life.",
    image: "images/destinations/manolo-municipal-plaza/plaza.png",
    link: "destinations/major-&-historical-places/manolo-fortich-municipal-plaza.html",
  },
];

const destinationList = document.getElementById("destinationList");
let activeCategory = "all";

function mapLabelToCategory(labelText) {
  const text = (labelText || "").trim().toLowerCase();
  if (text.includes("local")) return "local";
  if (text.includes("all")) return "all";
  if (text.includes("nature")) return "nature";
  if (text.includes("adventure")) return "adventure";
  if (text.includes("histor")) return "historical places";
  return null;
}

function getFilteredDestinations(category = activeCategory, searchValue = "") {
  const query = searchValue.trim().toLowerCase();

  return destinations.filter((destination) => {
    const matchesSearch =
      destination.name.toLowerCase().includes(query) ||
      destination.description.toLowerCase().includes(query);

    if (!matchesSearch) return false;

    if (category === "local") {
      return destination.category === "local";
    }

    if (category === "all") {
      return destination.category !== "local";
    }

    if (category === "historical places") {
      return (
        destination.category === "historical places" ||
        destination.category === "landmarks"
      );
    }

    return destination.category === category;
  });
}

function displayDestinations(list) {
  if (!destinationList) return;
  destinationList.innerHTML = "";

  if (list.length === 0) {
    destinationList.textContent = "No destinations found.";
    return;
  }

  list.forEach((destination) => {
    const card = document.createElement("div");
    card.className = "destination-card";

    const image = document.createElement("img");
    image.src = destination.image;
    image.alt = destination.name;
    image.width = 250;

    const dotIndex = destination.image.lastIndexOf(".");
    const basePath =
      dotIndex > -1 ? destination.image.slice(0, dotIndex) : destination.image;
    const candidates = [
      `${basePath}.jpg`,
      `${basePath}.png`,
      `${basePath}.avif`,
      `${basePath}.webp`,
    ];
    let fallbackIndex = 0;

    image.onerror = function () {
      while (fallbackIndex < candidates.length) {
        const nextSrc = candidates[fallbackIndex++];
        if (nextSrc !== image.getAttribute("src")) {
          image.src = nextSrc;
          return;
        }
      }
      image.onerror = null;
    };

    const title = document.createElement("h3");
    title.textContent = destination.name;

    const description = document.createElement("p");
    description.textContent = destination.description;

    const link = document.createElement("a");
    link.href = destination.link;
    link.textContent = "View Details";

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(link);

    destinationList.appendChild(card);
  });
}

function applyFilters() {
  const searchInput = document.getElementById("searchInput");
  const searchValue = searchInput ? searchInput.value : "";
  displayDestinations(getFilteredDestinations(activeCategory, searchValue));
}

function updateActiveStates(category) {
  document.querySelectorAll(".side-link").forEach((link) => {
    const mapped = mapLabelToCategory(link.textContent);
    if (mapped) {
      link.classList.toggle("active", mapped === category);
    }
  });

  document.querySelectorAll(".filter-pill").forEach((pill) => {
    const mapped = mapLabelToCategory(pill.textContent);
    pill.classList.toggle("selected", mapped === category);
  });
}

function selectCategory(category) {
  activeCategory = category;
  updateActiveStates(category);
  applyFilters();
}

document.querySelectorAll(".side-link").forEach((link) => {
  const mappedCategory = mapLabelToCategory(link.textContent);
  if (mappedCategory) {
    link.addEventListener("click", () => {
      selectCategory(mappedCategory);
    });
  }
});

document.querySelectorAll(".filter-pill").forEach((pill) => {
  const mappedCategory = mapLabelToCategory(pill.textContent);
  if (mappedCategory) {
    pill.addEventListener("click", () => {
      selectCategory(mappedCategory);
    });
  }
});

const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

if (searchButton) {
  searchButton.addEventListener("click", applyFilters);
}

if (searchInput) {
  searchInput.addEventListener("keyup", applyFilters);
}

updateActiveStates(activeCategory);
applyFilters();
