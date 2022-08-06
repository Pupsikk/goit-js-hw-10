// Напиши скрипт который, при наборе текста в инпуте input#name-input 
// (событие input), подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

let inputEl = document.querySelector("#name-input");
inputEl.addEventListener('input', onInputChange);

let outputEl = document.querySelector("#name-output");

function onInputChange (event) {
    console.log(inputEl);
    inputEl = event.currentTarget.value;

    inputEl !== " " ? (outputEl.innerText = inputEl.trim()) : "Anonymous";
}