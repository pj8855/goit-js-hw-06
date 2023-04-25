const input = document.querySelector('#name-input');

const output = document.querySelector('#name-output');

// const addName = (event) => {
//   if (input.value === '') {
//     output.textContent = 'Anonymous';
//   } else {
//     output.textContent = event.currentTarget.value;
//   }
// }

const addName = (event) => {
  input.value === '' ? output.textContent = 'Anonymous' :
    output.textContent = event.currentTarget.value;
}

input.addEventListener('input', addName);