const modal = document.querySelector('.modal-call');
const modalOpenElement = document.querySelector('.nav__button');
const modalCloseElement = modal.querySelector('.modal-call__button-close');
const wrapper = document.querySelector('.wrapper');

if (modal) {
  modalOpenElement.addEventListener('click', () => {
    modal.classList.remove('visually-hidden');
    document.body.style.overflow = 'hidden';
    wrapper.focus(false);
  });

  modalCloseElement.addEventListener('click', () => {
    modal.classList.add('visually-hidden');
    document.body.style.overflow = '';
    wrapper.focus(true);
  });

  document.addEventListener('click', (evt) => {
    const target = evt.target;
    if (target === modal) {
      modal.classList.add('visually-hidden');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      modal.classList.add('visually-hidden');
    }
  });
}


