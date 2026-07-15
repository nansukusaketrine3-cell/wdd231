const url = "data/members.json";
const cards = document.querySelector("#members");

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data);
}

const displayMembers = (members) => {

    members.forEach((member) => {

        const card = document.createElement("section");
        card.classList.add("member-card");

        const logo = document.createElement("img");
        const name = document.createElement("h2");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const website = document.createElement("a");
        const level = document.createElement("p");
        const industry = document.createElement("p");

        logo.setAttribute("src", `images/${member.image}`);
        logo.setAttribute("alt", `${member.name} logo`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "200");
        logo.setAttribute("height", "150");

        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;

        website.href = member.website;
        website.target = "_blank";
        website.textContent = member.website;

        let membership = "";

        if (member.membership === 1) {
            membership = "Member";
        } else if (member.membership === 2) {
            membership = "Silver";
        } else {
            membership = "Gold";
        }

        level.textContent = `Membership: ${membership}`;
        industry.textContent = `Industry: ${member.industry}`;

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(level);
        card.appendChild(industry);

        cards.appendChild(card);

    });

}

getMemberData();

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
});

listButton.addEventListener("click", () => {
    cards.classList.add("list");
    cards.classList.remove("grid");
});