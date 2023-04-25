const listEl = document.querySelectorAll('.item');

console.log(`Number of categories:`, listEl.length);

listEl.forEach(element => {
  console.log(`Category:`, element.firstElementChild.textContent);
  console.log(`Elements:`, element.lastElementChild.children.length);
});



// console.log('Category:', listEl.firstElementChild.firstElementChild.textContent);
// console.log('Elements:', listEl.firstElementChild.lastElementChild.children.length);

// console.log('Category:', listEl.firstElementChild.nextElementSibling.firstElementChild.textContent);
// console.log('Elements:', listEl.firstElementChild.nextElementSibling.lastElementChild.children.length);

// console.log('Category:', listEl.lastElementChild.firstElementChild.textContent);
// console.log('Elements:', listEl.lastElementChild.lastElementChild.children.length);

