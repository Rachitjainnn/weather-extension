async function getWeather(city) {
   let name = document.getElementById("changeLocation");
   if(city.trim().length===0){
    alert("Please input text.");
   }else{
   name.innerHTML = city.trim(); 
   }
   const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=c`;
   const options = {
	   method: 'GET',
	   headers: {
		// 'X-RapidAPI-Key': 'b16c0fe785mshb6d41b003fbd113p14c660jsn4c9cedc59a0b', //enter your api key here
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    


    const temperature = result.current_observation.condition.temperature;
    let temp = document.getElementById("temp");
    temp.innerHTML = `${temperature} °C`;

    const humidity = result.current_observation.atmosphere.humidity;
    let hum = document.getElementById("hum");
    hum.innerHTML = `${humidity} %`;

    const pressure = result.current_observation.atmosphere.pressure;
    let press = document.getElementById("press");
    press.innerHTML = `${pressure} mb`;

    const windSpeed = result.current_observation.wind.speed;
    let wind = document.getElementById("wind");
    wind.innerHTML = `${windSpeed} km/h`;

    $(".pleaseWait").hide()
    $(".mainData").show()
    
} catch (error) {
	console.error(error);
}
};
getWeather("Delhi");

let btn = document.getElementById("btn");
btn.addEventListener("click",press);
function press(e){
    e.preventDefault()
    let location = document.getElementById("location");
    if(location.value.trim().length===0){
        alert("Please input text.");
        document.getElementById("changeLocation").innerHTML = "Delhi";
    }else{
    getWeather(location.value);
    }
};