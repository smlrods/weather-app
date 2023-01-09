// Convert Kelvin to Celsius
export function celsius(kelvin) {
  return Math.round((kelvin - 273.15));
}

// Convert Kelvin to Fahrenheit
export function fahrenheit(kelvin) {
  return Math.round(((kelvin - 273.15) * (9 / 5) + 32));
}
