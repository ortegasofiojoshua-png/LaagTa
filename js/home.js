const destinations = [
    {
        name: "Dahilayan Adventure Park",
        description: "An adventure destination known for outdoor activities and exciting attractions.",
        image: "images/destinations/dahilayan-adventure-park/1.jpg",
        link: "destinations/dahilayan-adventure-park.html"
    },
    {
        name: "Dahilayan Forest Park",
        description: "A nature destination surrounded by trees and cool mountain surroundings.",
        image: "images/destinations/dahilayan-forest-park/1.jpg",
        link: "destinations/dahilayan-forest-park.html"
    },
    {
        name: "Dahilayan Alpine Village and Kawa Hot Bath",
        description: "A mountain destination featuring alpine-inspired attractions and a relaxing kawa bath experience.",
        image: "images/destinations/dahilayan-alpine-village/1.jpg",
        link: "destinations/dahilayan-alpine-village.html"
    },
    {
        name: "KampoJuan Eco-Adventure Farm",
        description: "An eco-adventure destination offering outdoor experiences and nature activities.",
        image: "images/destinations/kampojuan/1.jpg",
        link: "destinations/kampojuan-eco-adventure-farm.html"
    },
    {
        name: "Del Monte Pineapple Plantation and Monument",
        description: "A landmark associated with the area's well-known pineapple plantation and agricultural heritage.",
        image: "images/destinations/del-monte/1.jpg",
        link: "destinations/del-monte-pineapple-plantation.html"
    },
    {
        name: "Sumalsag Cave and View Decks",
        description: "A natural attraction featuring a cave and scenic viewing areas.",
        image: "images/destinations/sumalsag-cave/1.jpg",
        link: "destinations/sumalsag-cave.html"
    },
    {
        name: "General Douglas MacArthur Landmark",
        description: "A historical landmark commemorating General Douglas MacArthur.",
        image: "images/destinations/macarthur-landmark/1.jpg",
        link: "destinations/macarthur-landmark.html"
    },
    {
        name: "Mangima Heroes Shrine",
        description: "A historical memorial honoring heroes and remembering the past.",
        image: "images/destinations/mangima-heroes-shrine/1.jpg",
        link: "destinations/mangima-heroes-shrine.html"
    },
    {
        name: "Manolo Fortich Municipal Museum",
        description: "A museum where visitors can learn about the history and heritage of Manolo Fortich.",
        image: "images/destinations/municipal-museum/1.jpg",
        link: "destinations/municipal-museum.html"
    }
];

const destinationList = document.getElementById("destinationList");

function displayDestinations(list) {
    destinationList.innerHTML = "";

    if (list.length === 0) {
        destinationList.textContent = "No destinations found.";
        return;
    }

    list.forEach(destination => {
        const card = document.createElement("div");

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

function searchDestinations() {
    const searchValue = document
        .getElementById("searchInput")
        .value.toLowerCase();

    const filteredDestinations = destinations.filter(destination =>
        destination.name.toLowerCase().includes(searchValue)
    );

    displayDestinations(filteredDestinations);
}

document.getElementById("searchButton")
    .addEventListener("click", searchDestinations);

document.getElementById("searchInput")
    .addEventListener("keyup", searchDestinations);

displayDestinations(destinations);