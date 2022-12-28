const API = {
  url: "https://api.openweathermap.org/data/2.5/weather",
  key: "8087a745a911326b4ecdd982363dd8d3"
}

async function getWeatherData(location) {
    const data = await fetch(`${API.url}?q=${location}&appid=${API.key}`, {mode: 'cors'});
    return data.json();
}

function extractData(data) {
  let extractedData = {};
  extractedData.temp = {};
  data.then(data => {
    extractedData.temp.kelvin = data.main.temp;
    extractedData.name = data.name;
    extractedData.temp.celsius = kelvinToCelsius(extractedData.temp.kelvin);
    extractedData.temp.Fahrenheit = kelvinToFahrenheit(extractedData.temp.kelvin);
    console.log(extractedData);
  })
  return extractedData;
}

function kelvinToCelsius(kelvin) {
  return (kelvin - 273.15); 
}

function kelvinToFahrenheit(kelvin) {
  return (kelvin - 273.15)*(9/5) + 32; 
}

