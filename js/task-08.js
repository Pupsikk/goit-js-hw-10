const form = document.querySelector(".login-form");

form.addEventListener("submit", onformSubmit);

function onformSubmit(event) {
  event.preventDefault(); // предотвращает перезагрузку страницы
    console.log(`предотвращает перезагрузку страницы`);

  // будет собирать данные
    const formData = new FormData(event.currentTarget);
    console.log(formData);
    formData.forEach((value, name) => {
    console.log("name:", name);
    console.log("value:", value);
    });
  // очищает форму после отправки
    form.reset();
}