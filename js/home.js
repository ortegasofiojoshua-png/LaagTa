const destinations = [
  {
    name: "Dahilayan Adventure Park",
    category: "adventure",
    description:
      "An adventure destination known for outdoor activities and exciting attractions.",
    image: "images/destinations/dahilayan-adventure-park/entrance.jpg",
    link: "destinations/adventure/dahilayan-adventure-park.html",
  },
  {
    name: "Cowboy's Camp",
    category: "adventure",
    description:
      "Enjoy a relaxing countryside getaway at Cowboy's Camp, where rustic cowboy vibes, scenic views, and outdoor fun come together!",
    image: "images/destinations/cowboy's-camp/1.jpg",
    link: "destinations/adventure/cowboy's-camp.html",
  },
  {
    name: "Del Monte Golf Course",
    category: "adventure",
    description:
      "Enjoy a relaxing golf experience at Del Monte Golf Club in Manolo Fortich, Bukidnon, featuring an 18-hole course, beautiful green fairways, pine trees, and scenic lakes surrounded by the cool highland atmosphere.",
    image: "images/destinations/del-monte-golf-course/3.jpg",
    link: "destinations/adventure/del-monte-golf-course.html",
  },
  {
    name: "KampoJuan Eco-Adventure Farm",
    category: "adventure",
    description:
      "An eco-adventure destination offering outdoor experiences and nature activities.",
    image: "images/destinations/kampojuan-eco-adventure-farm/1.jpg",
    link: "destinations/adventure/kampojuan-eco-adventure-farm.html",
  },
  {
    name: "Kumaykay River Farm",
    category: "adventure",
    description:
      "An adventure destination known for outdoor activities and exciting attractions.",
    image: "images/destinations/kumaykay-river-farm/1.webp",
    link: "destinations/adventure/kumaykay-river-farm.html",
  },
  {
    name: "Ogaong View Deck",
    category: "adventure",
    description:
      "Take in the breathtaking views of Tagoloan River Canyon, Rolling Pigsuguan Hills, and Buklod Ridge at Ogaong View Deck in Manolo Fortich, Bukidnon.",
    image: "images/destinations/ogaong-view-deck/1.jpg",
    link: "destinations/adventure/ogaong-view-deck.html",
  },

  {
    name: "View deck Maluko",
    category: "adventure",
    description:
      "An adventure destination known for outdoor activities and exciting attractions.",
    image: "images/destinations/view-deck-maluko/view1.png",
    link: "destinations/adventure/view-deck-maluko.html",
  },
  {
    name: "Del Monte Pineapple Plantation and Monument",
    category: "key places",
    description:
      "A landmark associated with the area's well-known pineapple plantation and agricultural heritage.",
    image: "images/destinations/del-monte-pineapple-plantation/1.jpg",
    link: "destinations/major-&-historical-places/del-monte-pineapple-plantation.html",
  },
  {
    name: "Bukidnon Provincial Hospital",
    category: "key places",
    description:
      "A historical landmark associated with the area's healthcare facilities.",
    image: "images/destinations/bukidnon-provincial-hospital/hospital1.png",
    link: "destinations/major-&-historical-places/bukidnon-provincial-hospital.html",
  },
  {
    name: "Our Lady of Perpetual Help Parish Church",
    category: "historical places",
    description:
      "A historical landmark associated with the area's religious heritage.",
    image:
      "images/destinations/our-lady-of-perpetual-help-parish-church/church1.png",
    link: "destinations/major-&-historical-places/our-lady-of-perpetual-help-parish-church.html",
  },
  {
    name: "Del Monte Airstrip",
    category: "historical places",
    description:
      "A historical landmark associated with the area's aviation heritage.",
    image: "images/destinations/del-monte-airstrip/airstrip1.png",
    link: "destinations/major-&-historical-places/del-monte-airstrip.html",
  },
  {
    name: "Del Monte Soccer Field",
    category: "key places",
    description:
      "A historical landmark associated with the area's sports and recreation facilities.",
    image: "images/destinations/del-monte-soccer-field/soccer.png",
    link: "destinations/major-&-historical-places/del-monte-soccer-field.html",
  },
  {
    name: "Manolo Fortich Municipal Hall",
    category: "key places",
    description:
      "A historical landmark associated with the area's civic heritage.",
    image: "images/destinations/manolo-fortich-municipal-hall/municipal.png",
    link: "destinations/major-&-historical-places/manolo-fortich-municipal-hall.html",
  },

  {
    name: "Manolo Fortich Municipal Plaza",
    category: "key places",
    description:
      "A historical landmark associated with the area's civic heritage.",
    image: "images/destinations/manolo-municipal-plaza/plaza.png",
    link: "destinations/major-&-historical-places/manolo-fortich-municipal-plaza.html",
  },

  {
    name: "Our Lady of the Immaculate Conception Parish Church",
    category: "historical places",
    description:
      "A historical landmark associated with the area's religious heritage.",
    image: "images/destinations/immaculate-conception-church/church.png",
    link: "destinations/major-&-historical-places/our-lady-of-the-immaculate-conception-parish-church.html",
  },

  {
    name: "Philippine Eagle Landmark",
    category: "landmarks",
    description:
      "A scenic landmark in Barangay Guilang-Guilang offering sweeping highland views.",
    image: "images/destinations/eagle-landmark/eagle-landmark.png",
    link: "destinations/nature-&-landmarks/eagle-landmark-guilang-guilang.html",
  },

  {
    name: "General Douglas MacArthur Landmark",
    category: "landmarks",
    description:
      "A historical landmark commemorating General Douglas MacArthur.",
    image: "images/destinations/macarthur-landmark/macarthur.png",
    link: "destinations/nature-&-landmarks/macarthur-landmark.html",
  },
  {
    name: "Mangima Heroes Shrine",
    category: "landmarks",
    description:
      "A historical memorial honoring heroes and remembering the past.",
    image: "images/destinations/mangima-heroes-shrine/mangima1.png",
    link: "destinations/nature-&-landmarks/mangima-heroes-shrine.html",
  },
  {
    name: "Manolo Fortich Bus Terminal",
    category: "key places",
    description:
      "A public transportation hub located in Tankulan, Manolo Fortich, Bukidnon. It serves commuters traveling to nearby municipalities and cities.",
    image: "images/destinations/manolo-terminal/terminal.png",
    link: "destinations/major-&-historical-places/manoloTerminal.html",
  },

  {
    name: "Nasiklapan Falls",
    category: "nature",
    description:
      "A scenic waterfall surrounded by lush greenery and cool highland air in Manolo Fortich, Bukidnon.",
    image: "images/destinations/nasiklapan-falls/falls.png",
    link: "destinations/nature-&-landmarks/nasiklapan-falls.html",
  },
  {
    name: "Sumalsag Cave",
    category: "nature",
    description:
      "A natural cave formation set amid scenic highland terrain in Manolo Fortich, Bukidnon.",
    image: "images/destinations/sumalsag-cave/cave.png",
    link: "destinations/nature-&-landmarks/sumalsag-cave.html",
  },

  // --- LOCAL ATTRACTIONS (shown ONLY when "Local attractions" is clicked) ---
  {
    name: "Kumaykay River Farm",
    category: "local",
    description:
      "A relaxing farm-to-table riverside getaway featuring botanical gardens, cozy cabins, and peaceful nature trails.",
    image: "images/destinations/kumaykay-river-farm/kumaykay1.png",
    link: "destinations/kumaykay-river-farm.html",
  },
  {
    name: "Manolo Fortich Municipal Plaza",
    category: "local",
    description:
      "The lively town center of Manolo Fortich, featuring open lawns, evening food stalls, and community landmarks.",
    image: "images/destinations/manolo-fortich-municipal-plaza/plaza1.png",
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
