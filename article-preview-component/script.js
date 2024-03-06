let shareButton = document.querySelector('.article__share-button');
let social = document.querySelector('.social');

shareButton.addEventListener('click', () => {
    social.classList.toggle('social--active');
})