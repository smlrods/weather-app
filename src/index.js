import './style.css';
import * as handlerDOM from './modules/dom';
import * as weather from './modules/api';

// Make API request when clicking the button
document.querySelector('button').addEventListener('click', () => {
  const input = document.getElementById('city');
  const img = document.createElement('img');
  img.src = 'https://img.itch.zone/aW1hZ2UvMTEzNTA0NS82NTc4ODU4LmdpZg==/original/GuSHJB.gif';
  img.id = 'loading';
  document.getElementById('result').append(img);

  weather.get(input.value).then(function (result) {
    setTimeout(() => {
      img.remove();
        // console.log(result.weather[0])
      if(result.cod == '404') { // Check if the city was not found
        handlerDOM.showError(result);
      } else {
        handlerDOM.showData(weather.extract(result));
      }
      
    }, 1000);
  });
  input.value = '';

});

// Show a default location every  time that page is loaded
addEventListener('load', () => {
  weather.get('London').then(result => handlerDOM.showData(weather.extract(result)));
})