import "./getdates.js";

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        const isOpen = navigation.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

    });

}


// -----------------------------
// SERVICES DATA
// -----------------------------

const serviceContainer =
    document.querySelector("#service-container");

const dialog =
    document.querySelector("#service-dialog");

const dialogContent =
    document.querySelector("#dialog-content");

const closeDialog =
    document.querySelector("#close-dialog");

let services = [];


// -----------------------------
// FETCH SERVICES
// -----------------------------

async function getServices() {

    if (!serviceContainer) {
        return;
    }

    try {

        const response =
            await fetch("data/services.json");

        if (!response.ok) {
            throw new Error(
                `HTTP error: ${response.status}`
            );
        }

        services = await response.json();

        displayServices(services);

        localStorage.setItem(
            "zTruckServices",
            JSON.stringify(services)
        );

    } catch (error) {

        console.error(
            "Unable to load services:",
            error
        );

        loadServicesFromStorage();

    }

}


// -----------------------------
// LOCAL STORAGE
// -----------------------------

function loadServicesFromStorage() {

    const savedServices =
        localStorage.getItem("zTruckServices");

    if (savedServices) {

        services =
            JSON.parse(savedServices);

        displayServices(services);

    } else {

        serviceContainer.innerHTML = `
            <p class="error">
                Sorry, services could not be loaded.
                Please try again later.
            </p>
        `;

    }

}


// -----------------------------
// DISPLAY SERVICES
// -----------------------------

function displayServices(serviceList) {

    serviceContainer.innerHTML =
        serviceList.map(service => {

            return `
                <article class="service-card">

                    <span class="service-category">
                        ${service.category}
                    </span>

                    <h3>${service.name}</h3>

                    <p>
                        ${service.description}
                    </p>

                    <div class="service-details">

                        <p>
                            <strong>Duration:</strong>
                            ${service.duration}
                        </p>

                        <p>
                            <strong>Price:</strong>
                            ${service.price}
                        </p>

                    </div>

                    <button
                        class="details-button"
                        data-id="${service.id}">
                        View Details
                    </button>

                </article>
            `;

        }).join("");

    addServiceEvents();

}


// -----------------------------
// SERVICE BUTTON EVENTS
// -----------------------------

function addServiceEvents() {

    const buttons =
        document.querySelectorAll(
            ".details-button"
        );

    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const serviceId =
                    Number(
                        button.dataset.id
                    );

                const selectedService =
                    services.find(
                        service =>
                            service.id === serviceId
                    );

                if (selectedService) {
                    openServiceDialog(
                        selectedService
                    );
                }

            }
        );

    });

}


// -----------------------------
// MODAL
// -----------------------------

function openServiceDialog(service) {

    dialogContent.innerHTML = `

        <span class="service-category">
            ${service.category}
        </span>

        <h2>${service.name}</h2>

        <p>
            ${service.description}
        </p>

        <p>
            <strong>Estimated Duration:</strong>
            ${service.duration}
        </p>

        <p>
            <strong>Estimated Price:</strong>
            ${service.price}
        </p>

        <a href="contact.html"
           class="button">
            Request This Service
        </a>

    `;

    dialog.showModal();

}


// -----------------------------
// CLOSE MODAL
// -----------------------------

if (closeDialog) {

    closeDialog.addEventListener(
        "click",
        () => {
            dialog.close();
        }
    );

}

if (dialog) {

    dialog.addEventListener(
        "click",
        event => {

            const rectangle =
                dialog.getBoundingClientRect();

            const clickedInside =
                event.clientX >= rectangle.left &&
                event.clientX <= rectangle.right &&
                event.clientY >= rectangle.top &&
                event.clientY <= rectangle.bottom;

            if (!clickedInside) {
                dialog.close();
            }

        }
    );

}


// -----------------------------
// START APPLICATION
// -----------------------------

getServices();