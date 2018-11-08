// AJAX AND APIS

// FETCH
function getWeather(woeid) {
    fetch(`https://api.codetabs.com/v1/proxy/https://www.metaweather.com/api/location/${woeid}/`)
        .then(result => {
            // console.log(result);
            return result.json();
        })
        .then(data => {
            // console.log(data);
            const today = data.consolidated_weather[0];
            console.log(`Temperatures today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}`);
        })
        .catch(error => console.log(error));
    }

getWeather(2487956);
getWeather(44418);

async function getWeatherAW(woeid) {
    try {
        const result = await fetch(`https://api.codetabs.com/v1/proxy/https://www.metaweather.com/api/location/${woeid}/`);
        const data = await result.json();
        const tomorrow = data.consolidated_weather[1];
        console.log(`Temperatures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}`);
        return data;
    } catch (error) {
        alert(error);
    }
}

getWeatherAW(2487956);

let dataLondon;
getWeatherAW(44418).then(data => {
    dataLondon = data
    console.log(dataLondon);
});
