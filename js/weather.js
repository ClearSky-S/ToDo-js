const API_KEY = "d254c8d4b6da4b341835a4d1ce5a2bfe";

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(response => response.json()).then(data=>{
        const weatherElement = document.querySelector("#weather span:first-child");
        const cityElement = document.querySelector("#weather span:last-child");
        weatherElement.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        cityElement.innerText = data.name;
    });
}

function onGeoFailure(){
    console.error("can't get geolocation");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoFailure);