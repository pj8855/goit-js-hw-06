function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spawnBox = document.querySelector('button[data-create]');

const deleteBox = document.querySelector('button[data-destroy]');

const boxEl = document.querySelector('#boxes');

const controlsEl = document.querySelector('#controls');

spawnBox.addEventListener('click', createBoxes);
deleteBox.addEventListener('click', removeBoxes);

function removeBoxes() { 
  boxEl.innerHTML = '';
};

function createBoxes() { 
  const quantity = controlsEl.firstElementChild.value;

  const boxCollection = [];

  let boxHeight = 30;
  let boxWidth = 30;

  for (let i = 0; i < quantity; i++) {
    const box = document.createElement('div');

    box.style.height = `${boxHeight}px`;
    box.style.width = `${boxWidth}px`;
    boxHeight += 10;
    boxWidth += 10;

    box.style.backgroundColor = `${getRandomHexColor()}`;
    
    boxCollection.push(box);
  };

  boxEl.append(...boxCollection);
};