// Footer Information

document.querySelector("#currentyear").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;


// Hamburger Menu

const menu = document.querySelector("#menu");
const navigation = document.querySelector("header nav");

menu.addEventListener("click", () => {

    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menu.textContent = "✖";
    } else {
        menu.textContent = "☰";
    }

});


// Highlight Current Page

const links = document.querySelectorAll(".nav a");

links.forEach(link => {

    if (link.href === window.location.href) {

        link.style.color = "#E9C46A";

    }

});


// Smooth Scroll (future friendly)

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        ?.scrollIntoView({
            behavior:"smooth"
        });

    });

});