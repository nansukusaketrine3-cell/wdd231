// Current Year
const currentYear = document.querySelector("#currentyear");

currentYear.textContent = new Date().getFullYear();

// Last Modified

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;