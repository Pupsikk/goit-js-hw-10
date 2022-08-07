const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur() {
    if (Number(input.value.length) === +input.dataset.length) {
        input.classList.remove("invalid");
        input.classList.add("valid");
        console.log("это иф: color -> green");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
        console.log("это элсс: color -> red");
    }
        console.log(Number(input.value.length));
        console.log(input.dataset.length);
}

