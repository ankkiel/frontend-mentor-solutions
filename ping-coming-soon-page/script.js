const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const inputForm = document.querySelector('.form-notify__input');
const buttonForm = document.querySelector('.form-notify__button');
const errorState = document.querySelector('.form-notify__error-state');

function isValid() {
    return EMAIL_REGEXP.test(inputForm.value);
}

function validateEmail() {
    const isValidInput = isValid();

    inputForm.classList.toggle('form-notify__input_invalid', !isValidInput);
    errorState.classList.toggle('form-notify__error-state_active', !isValidInput);
}

buttonForm.addEventListener('click', (e) => {
    e.preventDefault();
    validateEmail();
})
