export function setupFeedbackForm() {
  const submitButton = document.querySelector('.feedback__submit');
  const feedbackSection = document.querySelector('.feedback');
  const feedbackForm = feedbackSection.querySelector('.feedback__form');
  const thankYouForm = document.querySelector('.thank-you');
  const thankYouRating = thankYouForm.querySelector('.thank-you__rating-selected');
  
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const selectedRating = document.querySelector('input[name="rating"]:checked');

    if (selectedRating) {
      thankYouForm.classList.add('thank-you--active');
      feedbackSection.classList.add('feedback--hidden');

      thankYouRating.textContent = selectedRating.value;
      feedbackForm.reset();

    } else {
      alert('No rating selected');
    }
  });

  thankYouForm.addEventListener('click', () => {
    thankYouForm.classList.remove('thank-you--active');
    feedbackSection.classList.remove('feedback--hidden');
  });
}
