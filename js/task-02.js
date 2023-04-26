const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingList = ingredients.map((ingredient) => {
//   const list = document.createElement('li');
//   list.textContent = ingredient;
//   list.classList.add('item');
//   const addList = document.querySelector('ul#ingredients');
//   addList.appendChild(list);
// });

const ingList = ingredients.map((ingredient) => {
  const list = document.createElement('li');
  list.classList.add('item');
  list.textContent = ingredient;
  return list;
});

const addList = document.querySelector('ul#ingredients');

addList.append(...ingList);