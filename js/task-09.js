function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const setColor = document.querySelector(".change-color");

const colorValue = document.querySelector(".color");

setColor.addEventListener("click", onChangeColor);

function onChangeColor() {
  const color = getRandomHexColor();

  colorValue.textContent = color;
  
  document.body.style.backgroundColor = color;
};