import modifier from './modifier.js';
import ingredients from './ingredients.js';

let ingredentsCaptalized = modifier.captalize(ingredients, 'name')
let ordenatedIngredents = modifier.ordenate(ingredentsCaptalized, 'name')
let containerIngredients = document.getElementById('container-ingredientes');

for (let ingredients of ordenatedIngredents) {
  let textHTML = `
  <div class="ingredientes">
    <img src="./img/${ingredients.img}" >
    <p>${ingredients.name}</p>
  </div>
  `
  containerIngredients.innerHTML += textHTML;
}
