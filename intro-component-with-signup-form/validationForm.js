const EMAIL_PATTERN = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const formFields = document.querySelectorAll('.signup-form__field');
const formSubmitButton = document.querySelector('.signup-form__button');
const emailInput = document.querySelector('.signup-form__field-email');

function isValidEmail(email) {
  return EMAIL_PATTERN.test(email);
}

formSubmitButton.addEventListener('click', (e) => {
  e.preventDefault();
  formFields.forEach(validateFormField);
});

formFields.forEach(field => field.addEventListener('input', (e) => validateFormField(e.target)));

function validateFormField(formField) {
  const errorMessage = formField.parentNode.querySelector('.signup-form__error-msg');

  formField.classList.toggle('signup-form__field_error', formField.value.length === 0 ||
    (formField === emailInput && !isValidEmail(formField.value)));
  
  errorMessage.style.display = formField.classList.contains('signup-form__field_error') ? 'block' : 'none';
}
