const apikey = "fd2ca18e8936ae908cfc371ee4808eec";

async function getWeather() {
    const city = document.getElementById('city').value;
    if(city === ""){
        alert("Please enter the city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    try{
        const response = await fetch(url);

        const data = await response.json();

        console.log("response",data);

        if(data.cod === "404"){
            document.getElementById("weather-info").innerHTML = `<p style="font-size="20px">${data.message}</p>`
        }else{
            const wetherdes = data.weather[0].description;
            const temp = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;


            document.getElementById("weather-info").innerHTML = 
            `<h1>Weather in ${city}</h1>
            <p><strong>Temperature : </strong>${temp}°C</p>
            <p><strong>Condition : </strong>${wetherdes}</p>
            <p><strong>Humidity : </strong>${humidity}</p>
            <p><strong>Wind Speed : </strong>${windSpeed}</p>
            `
        }
    }catch(err){
        console.error("Error fetching weather data: ", err);
    }
}