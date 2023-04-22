const listEl = document.querySelector('#categories');

console.log(`Number of categories: ${listEl.children.length}`);


console.log('Category:', listEl.firstElementChild.firstElementChild.textContent);
console.log('Elements:', listEl.firstElementChild.lastElementChild.children.length);

console.log('Category:', listEl.firstElementChild.nextElementSibling.firstElementChild.textContent);
console.log('Elements:', listEl.firstElementChild.nextElementSibling.lastElementChild.children.length);

console.log('Category:', listEl.lastElementChild.firstElementChild.textContent);
console.log('Elements:', listEl.lastElementChild.lastElementChild.children.length);

