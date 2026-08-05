// Import places data
import { places } from "../data/places.mjs";

// ===============================
// Build Discover Cards
// ===============================

const discoverGrid = document.querySelector("#discoverGrid");

function displayPlaces(placeList) {

    placeList.forEach(place => {

        const card = document.createElement("article");
        card.classList.add("place-card");

        // Title
        const title = document.createElement("h2");
        title.textContent = place.name;

        // Figure
        const figure = document.createElement("figure");

        // Image
        const image = document.createElement("img");
        image.src = place.image;
        image.alt = place.alt;
        image.loading = "lazy";
        image.width = 300;
        image.height = 200;

        figure.appendChild(image);

        // Address
        const address = document.createElement("address");
        address.textContent = place.address;

        // Description
        const description = document.createElement("p");
        description.textContent = place.description;

        // Button
        const button = document.createElement("button");
        button.textContent = "Learn More";

        button.addEventListener("click", () => {
            alert(`Learn more about ${place.name}.`);
        });

        // Assemble Card
        card.appendChild(title);
        card.appendChild(figure);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);

        discoverGrid.appendChild(card);

    });

}

displayPlaces(places);

// ===============================
// Last Visit Message
// ===============================

const visitMessage = document.querySelector("#visitMessage");

const today = Date.now();

const lastVisit = Number(localStorage.getItem("lastVisit"));

if (!lastVisit) {

    visitMessage.textContent =
        "Welcome! Let us know if you have any questions.";

} else {

    const milliseconds = today - lastVisit;

    const days = Math.floor(milliseconds / 86400000);

    if (days < 1) {

        visitMessage.textContent =
            "Back so soon! Awesome!";

    } else if (days === 1) {

        visitMessage.textContent =
            "You last visited 1 day ago.";

    } else {

        visitMessage.textContent =
            `You last visited ${days} days ago.`;

    }

}

// Save current visit
localStorage.setItem("lastVisit", today);