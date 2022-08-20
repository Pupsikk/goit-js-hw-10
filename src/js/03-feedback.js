import '../css/common.css';
import '../css/03-feedback.css';

const refs = {
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

function onFormSubmit(e) {
    e.preventDefauld();
} 

function onTextareaInput(e) {
    const massage = e.currentTarget.value;

    localStorage.setItem('feedback-msg', massage)
}
