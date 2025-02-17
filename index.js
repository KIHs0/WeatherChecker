const search = document.querySelector(".search-box button");
const container0 = document.querySelector(".container");
const weathertop = document.querySelector(".weather-box");
const weatherdown = document.querySelector(".weather-details");
const error = document.querySelector(".non-found");

search.addEventListener("click", () => {
  const city = document.querySelector(".search-box input").value;

  let APIKey = "8a8d8952fd60aae1ab028872d79bc96e";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8a8d8952fd60aae1ab028872d79bc96e
  `
  )
    .then((res) => res.json())
    .then((xx) => {
      if (xx.cod === "404") {
        container0.style.height = "400px";
        weathertop.style.display = "none";
        weatherdown.style.display = "none";
        error.style.display = "block";
        error.classList.add("fadeIn");
        return;
      }
      error.style.display = "none";
      error.classList.remove("fadeIn");

      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".weather-box .temperature");
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelector(
        ".weather-details .humidity span"
      );
      const wind = document.querySelector(".weather-details .wind span");

      console.log(xx.weather[0].main);
      switch (xx.weather[0].main) {
        case "Clear":
          image.src = "clearsky.png";
          break;
        case "Snow":
          image.src = "snow.png";
          break;
        case "Haze ":
          image.src = "haze.png";
          break;
        case " Rain":
          image.src = "rainimg.png";
          break;
        case "Clouds":
          image.src = "clouds.png";
          break;
        default:
          image.src = "";
      }
      description.innerHTML = `${xx.weather[0].description}`;
      humidity.innerHTML = `${xx.main.humidity}%`;
      temperature.innerHTML = `${xx.main.temp}<span>°C</span> `;
      wind.innerHTML = `${parseInt(xx.wind.speed)}Km/h`;

      weathertop.style.display = "";
      weatherdown.style.display = "";
      weathertop.classList.add("fadeIn");
      weatherdown.classList.add("fadeIn");
      container0.style.height = "590px";
    });
});
