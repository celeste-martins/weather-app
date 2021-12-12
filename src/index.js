let apiKey = "e4aa3c0e373328216b4a28084c529413";

function cityChange(event) {
  event.preventDefault();
  let input = document.querySelector("#search-bar");
  let currentCity = document.querySelector("#cityName");
  currentCity.innerHTML = input.value;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=e4aa3c0e373328216b4a28084c529413&units=metric`;

  function changeCityTemp(response) {
    let temperature = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector("#temp");
    temperatureElement.innerHTML = `${temperature}°C`;
  }

  function changeCitySky(response) {
    let description = response.data.weather[0].description;
    let skyElement = document.querySelector("#sky");
    skyElement.innerHTML = `${description}`;
  }

  function changeHumidity(response) {
    let humidity = response.data.main.humidity;
    let humidityElement = document.querySelector(".card-humidity");
    humidityElement.innerHTML = `Humidity: ${humidity}%`;
  }

  function changeWindspeed(response) {
    let windspeed = Math.round(response.data.wind.speed);
    let windElement = document.querySelector(".card-wind");
    windElement.innerHTML = `Wind: ${windspeed} m/s`;
  }

  axios.get(apiUrl).then(changeCityTemp);
  axios.get(apiUrl).then(changeCitySky);
  axios.get(apiUrl).then(changeHumidity);
  axios.get(apiUrl).then(changeWindspeed);
}

let form = document.querySelector("form");
form.addEventListener("submit", cityChange);

let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

let date = now.getDate();

let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}

let h2 = document.querySelector("#dayWeek");
h2.innerHTML = `${day}`;
let time = document.querySelector("#fullTime");
time.innerHTML = `${hour}:${minute}`;
