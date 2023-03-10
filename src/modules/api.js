import * as convert from './utils';

const API = {
  url: 'https://api.openweathermap.org/data/2.5/weather',
  key: '8087a745a911326b4ecdd982363dd8d3',
};

// Make API requests and return the response as JSON
export async function get(location) {
  const data = await fetch(`${API.url}?q=${location}&appid=${API.key}`, { mode: 'cors' });
  return data.json();
}

// Receive a JSON and return an object with the data required for the app
export function extracth({ name, weather, main }) {
  const extractedData = {};

  extractedData.temp = {};
  extractedData.name = name;
  extractedData[weather] = weather;

  extractedData.temp.celsius = convert.celsius(main.temp);
  extractedData.temp.fahrenheit = convert.fahrenheit(main.temp);
  return extractedData;
}
