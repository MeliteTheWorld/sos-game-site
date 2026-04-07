// логика dropdown

const lang = document.querySelector('.header__lang');
const btn = document.querySelector('.lang__btn');

btn.addEventListener('click', function (e) {

    e.stopPropagation();

    if (lang.classList.contains('is-open')) {
        lang.classList.remove('is-open');
    } else {
        lang.classList.add('is-open');
    }

});

document.addEventListener('click', function () {

    lang.classList.remove('is-open');

});

// логика slider

const imgs = document.querySelectorAll('.slider__img');
const dots = document.querySelectorAll('.slider__dot');

let current = 0;

function updateSlider() {

    for (let i = 0; i < imgs.length; i++) {

        imgs[i].className = "slider__img";

        if (i === current) {
            imgs[i].classList.add("slider__img--active");
        } else if (i === current + 1) {
            imgs[i].classList.add("slider__img--mid");
        } else {
            imgs[i].classList.add("slider__img--back");
        }
    }

    for (let i = 0; i < dots.length; i++) {

        if (i === current) {
            dots[i].classList.add("slider__dot--active");
        } else {
            dots[i].classList.remove("slider__dot--active");
        }

    }
}

updateSlider();

const nextBtn = document.getElementById("sliderNext");

nextBtn.addEventListener("click", function () {

    current = current + 1;

    if (current >= imgs.length) {
        current = 0;
    }

    updateSlider();

});


// логика hero__scroll

const scrollBtn = document.getElementById("hero__scroll");

scrollBtn.addEventListener("click", function (e) {

    e.preventDefault();

    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });

});