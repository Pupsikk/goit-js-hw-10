let counterValue = 0;

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");
console.log(valueEl);

function makeDecrement() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

function makeIncrement() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}

buttonDecrement.addEventListener("click", makeDecrement);
buttonIncrement.addEventListener("click", makeIncrement);