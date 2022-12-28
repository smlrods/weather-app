const API = {
  url: "https://api.openweathermap.org/data/2.5/weather",
  key: "8087a745a911326b4ecdd982363dd8d3"
}

async function getWeatherData(location) {
    const data = await fetch(`${API.url}?q=${location}&appid=${API.key}`, {mode: 'cors'});
    return data.json();
}

