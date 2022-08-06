const input = document.querySelector('#validation-input')

input.addEventListener('blur', onInputBlur)

function onInputBlur() {
    if(+input.value.length === Number(input.dataset.length)){
        input.classList.remove('valid')
        input.classList.add('valid')
    } else {
        input.classList.remove('valid')
        input.classList.add('invalid')
    }

}

