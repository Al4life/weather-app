async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "YOUR_API_KEY"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById("weatherResult").innerHTML = 
            `<h3>${data.name}, ${data.sys.country}</h3>
             <p>Temperature: ${data.main.temp}°C</p>
             <p>Weather: ${data.weather[0].description}</p>`;
    } catch (error) {
        document.getElementById("weatherResult").innerHTML = "City not found!";
    }
}
