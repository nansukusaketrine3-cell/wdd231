// FOOTER DATE
document.querySelector("#currentyear").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;



// ======================
// WEATHER API
// ======================


const apiKey = "YOUR_API_KEY";

const weatherURL =
`https://api.openweathermap.org/data/2.5/forecast?lat=0.31&lon=32.58&units=metric&appid=${apiKey}`;



async function getWeather(){

try{

const response = await fetch(weatherURL);

const data = await response.json();


displayWeather(data);


}

catch(error){

console.log(error);

}

}



function displayWeather(data){


document.querySelector("#temperature").textContent =
`${data.list[0].main.temp} °C`;


document.querySelector("#description").textContent =
data.list[0].weather[0].description;



const forecast = document.querySelector("#forecast");


forecast.innerHTML="";



// three day forecast

const days = [0,8,16];


days.forEach(day=>{


const card=document.createElement("div");


card.innerHTML=`

<h4>
${new Date(data.list[day].dt_txt)
.toLocaleDateString()}
</h4>

<p>
${data.list[day].main.temp} °C
</p>

<p>
${data.list[day].weather[0].description}
</p>

`;


forecast.appendChild(card);


});


}


getWeather();




// ======================
// BUSINESS SPOTLIGHTS
// ======================


const memberURL="data/members.json";


async function getSpotlights(){


const response = await fetch(memberURL);

const members = await response.json();



const premium = members.filter(member =>

member.membership === "Gold" ||
member.membership === "Silver"

);



const randomMembers =
premium.sort(()=>0.5-Math.random())
.slice(0,3);



displaySpotlights(randomMembers);



}




function displaySpotlights(members){


const container =
document.querySelector("#spotlights");


container.innerHTML="";



members.forEach(member=>{


const card=document.createElement("article");


card.classList.add("spotlight-card");


card.innerHTML=`

<img src="images/${member.image}"
alt="${member.name} logo"
loading="lazy">


<h3>${member.name}</h3>

<p>${member.address}</p>

<p>${member.phone}</p>


<a href="${member.website}" target="_blank">
${member.website}
</a>


<p>
Membership:
${member.membership}
</p>

`;



container.appendChild(card);


});


}



getSpotlights();