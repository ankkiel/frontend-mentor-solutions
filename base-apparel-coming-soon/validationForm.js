const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const emailInput = document.querySelector('.intro__form-input');
const buttonSubmit = document.querySelector('.intro__form-button');
const errorMsg = document.querySelector('.intro__form-error-msg');
const errorIcon = document.querySelector('.intro__form-error-icon');

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    if (!isEmailValid(emailInput.value)) {
        errorMsg.classList.add('intro__form-error-msg--active');
        errorIcon.classList.add('intro__form-error-icon--active');
        emailInput.classList.add('intro__form-input--error');
    } else {
        errorMsg.classList.remove('intro__form-error-msg--active');
        errorIcon.classList.remove('intro__form-error-icon--active');
        emailInput.classList.remove('intro__form-input--error');
    }
});
