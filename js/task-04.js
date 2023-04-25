const counterValue = {
    value: 0,
    decrement(value) {
      this.value -= 1;
    },
    increment(value) {
      this.value += 1;
    },
};
  
const valueNum = document.querySelector("#value");

const decBtn= document.querySelector('button[data-action="decrement"]');
decBtn.addEventListener("click", () => {
  counterValue.decrement();
  valueNum.textContent = counterValue.value;
});

const incBtn= document.querySelector('button[data-action="increment"]');
incBtn.addEventListener("click", () => {
  counterValue.increment();
  valueNum.textContent = counterValue.value;
});