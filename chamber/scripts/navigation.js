const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navMenu");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");

    if (navigation.classList.contains("open")) {

        menuButton.innerHTML = "&times;";
        menuButton.setAttribute("aria-label", "Close Navigation Menu");

    } else {

        menuButton.innerHTML = "&#9776;";
        menuButton.setAttribute("aria-label", "Open Navigation Menu");

    }

});