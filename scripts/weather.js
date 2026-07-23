// Select HTML elements
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=a468f6d198dfddefa1427e9cf4a66fcf";

// Fetch weather data
async function apiFetch() {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();

      console.log(data);

      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

function displayResults(data) {
  console.log(data.weather[0]);

  const iconCode = data.weather[0].icon;
  console.log("Icon code:", iconCode);

  const iconSrc = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  console.log("Icon URL:", iconSrc);

  currentTemp.textContent = data.main.temp;

  weatherIcon.src = iconSrc;
  weatherIcon.alt = data.weather[0].description;

  captionDesc.textContent = data.weather[0].description;
}

// Call the function
apiFetch();