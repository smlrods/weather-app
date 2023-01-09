// Toggle temperatures between Fahrenheit and Celsius
function toggleTemperature(btn, field, temp) {
  btn.addEventListener('click', () => {
    if (btn.textContent === 'Celsius') {
      btn.textContent = 'Fahrenheit';
      field.textContent = `${temp.fahrenheit}°F`;
    } else {
      btn.textContent = 'Celsius';
      field.textContent = `${temp.celsius}°C`;
    }
  });
}

// Show information on the page
function showElementDOM(title, temp, weather, code) {
  const resultField = document.getElementById('result');
  resultField.textContent = '';
  const weatherField = document.createElement('p');
  weatherField.id = 'weather';
  const cityTitle = document.createElement('h2');

  cityTitle.textContent = title;
  weatherField.textContent = weather;

  resultField.appendChild(weatherField);
  resultField.appendChild(cityTitle);

  if (code !== '404') {
    const tempField = document.createElement('p');
    const toggleTemp = document.createElement('button');
    tempField.id = 'temp';
    tempField.textContent = `${temp.celsius}°C`;
    resultField.appendChild(tempField);
    toggleTemp.textContent = 'Celsius';
    resultField.appendChild(toggleTemp);

    toggleTemperature(toggleTemp, tempField, temp);
  }

  if (code === '404') {
    const img = document.createElement('img');
    img.src = 'https://78.media.tumblr.com/a71bc83661d3be8192c7d6cd62e2e966/tumblr_pa2knrX5Zz1xu0hh4o1_500.gif';
    resultField.appendChild(img);
  }
}

export function showError(error) {
  showElementDOM(error.message, '', '', error.cod);
}

export function showData(data) {
  showElementDOM(data.name, data.temp, data.weather.main, '');
}
