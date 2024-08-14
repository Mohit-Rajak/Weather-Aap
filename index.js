const apiKey = "497625ca1f932865988cc66e598a938f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        let data = await response.json();
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "/weaderaap/weadher.img/clouds.png";
        }
       else  if(data.weather[0].main == "Clear"){
        weatherIcon.src = "/weaderaap/weadher.img/clear.png";
        }
        else  if(data.weather[0].main == "Rain"){
            weatherIcon.src = "/weaderaap/weadher.img/rain.png";
        }
        else  if(data.weather[0].main == "Drizzel"){
            weatherIcon.src = "/weaderaap/weadher.img/drizzel.png";
        }
        else  if(data.weather[0].main == "Mist"){
            weatherIcon.src = "/weaderaap/weather.img/mist.png";
         }
         document.querySelector(".weather").style.display = "block";
         document.querySelector(".error").style.display = "none";
    }

    
}

searchBtn.addEventListener("click" , () => {
  checkWeather(searchBox.value);
})

