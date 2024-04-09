export function setupAccordion() {
  const accordionButtons = document.querySelectorAll('.faqs__btn');

  accordionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle("active");
      let descriptionText = button.parentElement.querySelector('.faqs__description');

      if (descriptionText.style.maxHeight) {
        descriptionText.style.maxHeight = null;
        descriptionText.style.marginBottom = 0;
      } else {
        descriptionText.style.maxHeight = descriptionText.scrollHeight + 'px';
        descriptionText.style.marginBottom = '20px';
      }
    })
  })
  accordionButtons[0].click();
}