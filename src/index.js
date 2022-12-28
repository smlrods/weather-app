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
  extractedData.temp.kelvin = data.main.temp;
  extractedData.name = data.name;
  extractedData.temp.celsius = kelvinToCelsius(extractedData.temp.kelvin);
  extractedData.temp.fahrenheit = kelvinToFahrenheit(extractedData.temp.kelvin);
  return extractedData;
}

function kelvinToCelsius(kelvin) {
  return Math.round((kelvin - 273.15));
  ; 
}

function kelvinToFahrenheit(kelvin) {
  return Math.round(((kelvin - 273.15)*(9/5) + 32));
}

function showError(error) {
  showElementDOM(error.message, '');
}

function displayData(data) {
  showElementDOM(data.name, data.temp);
}

function showElementDOM(title, temp) {
  const resultField = document.getElementById('result');
  resultField.textContent = '';
  const titleField = document.createElement('h2');
  titleField.textContent = title;

  resultField.appendChild(titleField);

  if(title != 'city not found') {
    const tempField = document.createElement('p');
    const toggleTemp = document.createElement('button');
    tempField.textContent = temp.celsius + ' °C';
    resultField.appendChild(tempField);
    toggleTemp.textContent = 'Celsius';
    resultField.appendChild(toggleTemp);

    switchTemperature(toggleTemp, tempField, temp);
  }
}

function switchTemperature(btn, field, temp) {
    btn.addEventListener('click', () => {
      if(btn.textContent == 'Celsius') {
        btn.textContent = 'Fahrenheit';
        field.textContent = temp.fahrenheit + ' °F';
      } else {
        btn.textContent = 'Celsius';
        field.textContent = temp.celsius + ' °C';
      }
    });
}

const input = document.getElementById('city');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  getWeatherData(input.value).then(function (result) {

    if(result.cod == '404') {
      showError(result);
    } else {
      displayData(extractData(result));
    }

  });
});
