"use strict"

const formControl = document.querySelector('form');
const cardWeather = document.querySelector('.weather-info')
const cardInfo = document.querySelector('.weather-info__title')
const icon = document.querySelector('.img-icon')
const loaderScreen = document.querySelector('loader')

// loader function:
// function loader(state){
//     ( state == true) 
//     ? loaderScreen.classList.remove('d-none') 
//     : loaderScreen.classList.add('d-none') 
// }
// updateUI():

const updateUI = (weather) => {
    cardInfo.innerHTML = `
        <p class="fs-3 text-primary">${weather.name}, ${weather.sys.country}</p>
        <p class="fs-5 text-center text-muted">${weather.weather[0].main}</p>
        <p class="fs-1 text-center text-secondary">${weather.main.temp}&#176; C</p>
        <p class="fs-5 text-center text-secondary">wind speed: ${weather.wind.speed} m/s</p>
    `
    if(cardWeather.classList.contains('d-none')){
        cardWeather.classList.remove('d-none');
    }

    icon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
}

// get WeatherInfo:
const getWeather = async (cityName) => {
    const data = await  getData(cityName)
    
    return data
}


formControl['input__weather'].focus();
// get Location:
formControl.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = formControl['input__weather'].value.trim();
    formControl.reset();
    getWeather(city).then((data) => updateUI(data))
})




























