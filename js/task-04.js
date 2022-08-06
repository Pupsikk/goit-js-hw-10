let valueEl = Number(document.querySelector("#value").textContent);

let counterValue = document.querySelector("#value");

const dekrBtn = document.querySelector("#counter").firstElementChild;
const inkrBtn = document.querySelector("#counter").lastElementChild;

dekrBtn.addEventListener('click', (e) =>{
    valueEl += 1;

    counterValue.innerText = valueEl;
});

inkrBtn.addEventListener('click', (e) =>{
    valueEl -= 1;

    counterValue.innerText = valueEl;
});