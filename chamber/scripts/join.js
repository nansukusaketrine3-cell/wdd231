// Set form timestamp

const timestamp = document.querySelector("#timestamp");

if (timestamp) {
    timestamp.value = new Date().toLocaleString();
}



// Open membership modals

const modalLinks = document.querySelectorAll(".modal-link");


modalLinks.forEach(link => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const modalId = link.dataset.modal;

        const modal = document.querySelector(`#${modalId}`);

        if (modal) {
            modal.showModal();
        }

    });

});



// Close membership modals

const closeButtons = document.querySelectorAll("dialog button");


closeButtons.forEach(button => {

    button.addEventListener("click", () => {

        const modal = button.closest("dialog");

        if (modal) {
            modal.close();
        }

    });

});