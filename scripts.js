const lang = document.querySelector('.header__lang');
const btn = document.querySelector('.lang__btn');

btn.addEventListener('click', (e) => {
    e.stopPropagation();
    lang.classList.toggle('is-open');
});

document.addEventListener('click', () => {
    lang.classList.remove('is-open');
});