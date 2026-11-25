const destinations = [
  {
    name: "Dahilayan Adventure Park",
    category: "adventure",
    description:
      "An adventure destination known for outdoor activities and exciting attractions.",
    image: "images/destinations/dahilayan-adventure-park/entrance.jpg",
    link: "destinations/dahilayan-adventure-park.html",
  },

  {
    name: "KampoJuan Eco-Adventure Farm",
    category: "adventure",
    description:
      "An eco-adventure destination offering outdoor experiences and nature activities.",
    image: "images/destinations/kampojuan/1.jpg",
    link: "destinations/kampojuan-eco-adventure-farm.html",
  },

  {
    name: "Del Monte Pineapple Plantation and Monument",
    category: "history",
    description:
      "A landmark associated with the area's well-known pineapple plantation and agricultural heritage.",
    image: "images/destinations/del-monte-pineapple-plantation/1.jpg",
    link: "destinations/del-monte-pineapple-plantation.html",
  },

  {
    name: "General Douglas MacArthur Landmark",
    category: "history",
    description:
      "A historical landmark commemorating General Douglas MacArthur.",
    image: "images/destinations/macarthur-landmark/1.jpg",
    link: "destinations/macarthur-landmark.html",
  },

  {
    name: "Mangima Heroes Shrine",
    category: "history",
    description:
      "A historical memorial honoring heroes and remembering the past.",
    image: "images/destinations/mangima-heroes-shrine/mangima1.png",
    images: [
      "images/destinations/mangima-heroes-shrine/mangima1.png",
      "images/destinations/mangima-heroes-shrine/mangima2.png",
      "images/destinations/mangima-heroes-shrine/mangima3.png",
    ],
    link: "destinations/mangima-heroes-shrine.html",
  },

  {
    name: "Manolo Fortich Bus Terminal",
    category: "nature",
    description:
      "A public transportation hub located in Tankulan, Manolo Fortich, Bukidnon. It serves commuters traveling to nearby municipalities and cities.",
    image: "images/destinations/manolo-terminal/terminal.png",
    link: "destinations/manoloTerminal.html",
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
    name: "Alalum Falls",
    category: "local",
    description:
      "A towering 148-foot waterfall easily visible along Sayre Highway, surrounded by lush forest greenery.",
    image: "images/destinations/alalum-falls/alalum1.png",
    link: "destinations/alalum-falls.html",
  },

  {
    name: "Mangima Spring Resort",
    category: "local",
    description:
      "A classic roadside mountain resort nestled in Mangima Canyon, famous for its cool natural spring pools.",
    image: "images/destinations/mangima-spring-resort/resort1.png",
    link: "destinations/mangima-spring-resort.html",
  },

  {
    name: "Manolo Fortich Municipal Plaza",
    category: "local",
    description:
      "The lively town center of Manolo Fortich, featuring open lawns, evening food stalls, and community landmarks.",
    image: "images/destinations/manolo-fortich-municipal-plaza/plaza1.png",
    link: "destinations/manolo-fortich-municipal-plaza.html",
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
  if (text.includes("histor")) return "history";
  return null;
}

function getFilteredDestinations(category = activeCategory, searchValue = "") {
  const query = searchValue.trim().toLowerCase();

  return destinations.filter((destination) => {
    const matchesSearch =
      destination.name.toLowerCase().includes(query) ||
      destination.description.toLowerCase().includes(query);

    if (!matchesSearch) return false;

    // Show ONLY local attractions when "Local attractions" is active
    if (category === "local") {
      return destination.category === "local";
    }

    // Never show "local" items in "all" or other categories
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

// Sidebar category links (.side-link)
document.querySelectorAll(".side-link").forEach((link) => {
  const mappedCategory = mapLabelToCategory(link.textContent);
  if (mappedCategory) {
    link.addEventListener("click", () => {
      selectCategory(mappedCategory);
    });
  }
});

// Toolbar filter pills (.filter-pill)
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

// Initial render: shows non-local destinations; clicking "Local attractions" shows only "local"
updateActiveStates(activeCategory);
applyFilters();
