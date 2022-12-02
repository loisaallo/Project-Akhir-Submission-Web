import DataSource from './data-source.js';
const main = function () {
  const searchElement = document.querySelector('#searchElement');
  const buttonSearchElement = document.querySelector('#searchButtonElement');
  const foodListElement = document.querySelector('#foodList');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchFood(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };
  const renderResult = function (results) {
    foodListElement.innerHTML = '';
    results.forEach(function (food) {
      const {name, gambar, description} = food;

      const foodElement = document.createElement('div');
      foodElement.setAttribute('class', 'food');

      foodElement.innerHTML = `
      <img class="gambar-food" src="${gambar}" alt="gambar">
      <div class="food-info">
        <h2>${name}</h2>
        <p>${description}</p>
      </div>
    `;
      foodListElement.appendChild(foodElement);
    });
  };

  const fallbackResult = function (message) {
    foodListElement.innerHTML = '';
    foodListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  };

  buttonSearchElement.addEventListener('click', onButtonSearchClicked);
};
export default main;