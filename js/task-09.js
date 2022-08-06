// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерации случайного цвета используй функцию getRandomHexColor.




const refs = {
  body: document.body,
  changeColorBtn: document.querySelector('.change-color'),
  spanArrayColor: document.querySelector('.color'),
};

refs.changeColorBtn.addEventListener("click", changeColor); 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.spanArrayColor.textContent = refs.body.style.backgroundColor;
}