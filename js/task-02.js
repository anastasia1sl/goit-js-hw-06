const listBodyEl = document.querySelector('#ingredients');

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = ingredients.map(ingredient => {
  let ingredientItem = document.createElement('li');

  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add('item');

  return ingredientItem;
});

listBodyEl.append(...ingredientsEl);

// способ 2

// for (const ingredient of ingredients) {
//   const ingredientItem = document.createElement('li');

//   ingredientItem.textContent = ingredient;
//   ingredientItem.classList.add('item');
//   listBodyEl.append(ingredientItem);
// }
