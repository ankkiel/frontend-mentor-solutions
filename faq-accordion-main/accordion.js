export function setupAccordion() {
  let btns = document.querySelectorAll('.faqs__btn');

  btns.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle("active");
      let descriptionText = item.parentElement.querySelector('.faqs__description');

      if (descriptionText.style.maxHeight) {
        descriptionText.style.maxHeight = null;
        descriptionText.style.marginBottom = 0;
      } else {
        descriptionText.style.maxHeight = descriptionText.scrollHeight + 'px';
        descriptionText.style.marginBottom = '20px';
      }
    })
  })
}
