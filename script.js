// Fetching weather data and converted to json.
const getWeather = async () => {
    try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=Stockholm,Sweden&units=metric&APPID=966881349119fc14f6f3831c44ff9b53", { method: 'GET' });

        const data = await response.json();

        console.log(data)

        const forecast = data.list[0];

        document.getElementById("city-name").innerText = data.city.name;
        // document.getElementById("temperature").innerText = forecast.main.temp;
        const temperature = data.list[0].main.temp;
        const temperatureNumber = parseInt(temperature);
        document.getElementById("temperature").innerText = temperatureNumber;
        document.getElementById("weather").innerText = forecast.weather[0].main;
    } catch {
        console.error("Could not get weather data");
    }
}
getWeather();
