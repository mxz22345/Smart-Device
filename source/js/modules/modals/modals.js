const modal = document.querySelector('.modal-call');
const modalOpenElement = document.querySelector('.nav__button');
const modalCloseElement = modal.querySelector('.modal-call__button-close');

modalOpenElement.addEventListener('click', () => {
  modal.classList.remove('visually-hidden');
});

modalCloseElement.addEventListener('click', () => {
  modal.classList.add('visually-hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    modal.classList.add('visually-hidden');
  }
});
