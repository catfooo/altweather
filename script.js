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

const getSun = async () => {
    try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=6cf9113cc039128887bea41cc4117942", { method: 'GET'});
        const data = await response.json();
        console.log(data)

        const sunrise = data.sys.sunrise;
        console.log("sunrise:", sunrise);
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        });
        console.log("Sunrise:", sunriseTime);
        const sunriseTimeText = "sunrise: " + sunriseTime;
        document.getElementById("sunrise").innerText = sunriseTimeText;

        const sunset = data.sys.sunset;
        console.log("sunset:", sunset);
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        });
        console.log("Sunset:", sunsetTime);
        const sunsetTimeText = "sunset: " + sunsetTime;
        document.getElementById("sunset").innerText = sunsetTimeText;


    } catch {
        console.error("Could not get weather data");
    }
}

getSun();

// const getWeek = async () => {
//     try {
//         const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=Stockholm,Sweden&units=metric&APPID=966881349119fc14f6f3831c44ff9b53", { method: 'GET' });

//         const data = await response.json();

//         console.log(data)

//         const mon = parseInt(data.list[0].main.temp);
//         console.log("mon:", mon);
//         const monText = "mon: " + mon;
//         document.getElementById("mon").innerText = monText;

//         const tue = parseInt(data.list[9].main.temp);
//         console.log("tue:", tue);
//         const tueText = "tue: " + tue;
//         document.getElementById("tue").innerText = tueText;

//         const wed = parseInt(data.list[19].main.temp);
//         console.log("wed:", wed);
//         const wedText = "wed: " + wed;
//         document.getElementById("wed").innerText = wedText;

//         const thu = parseInt(data.list[29].main.temp);
//         console.log("thu:", thu);
//         const thuText = "thu: " + thu;
//         document.getElementById("thu").innerText = thuText;

//         const fri = parseInt(data.list[39].main.temp);
//         console.log("fri:", fri);
//         const friText = "fri: " + fri;
//         document.getElementById("fri").innerText = friText;

//     } catch {
//         console.error("Could not get weather data");
//     }
// }

// getWeek();
