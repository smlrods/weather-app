import './style.css';
import * as handlerDOM from './modules/dom';
import * as weather from './modules/api';

// Make API request when clicking the button
document.querySelector('button').addEventListener('click', () => {
  const input = document.getElementById('city');
  weather.get(input.value).then(function (result) {
    // console.log(result.weather[0])
    if(result.cod == '404') { // Check if the city was not found
      handlerDOM.showError(result);
    } else {
      handlerDOM.showData(weather.extract(result));
    }
  input.value = '';
  });
});

// Show a default location every  time that page is loaded
addEventListener('load', () => {
  weather.get('London').then(result => handlerDOM.showData(weather.extract(result)));
})