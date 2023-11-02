const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,


    // If we need pagination
    pagination: {
        el: '.nav__bar--number',
        type: 'fraction',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.nav_bar--prev',
        prevEl: '.nav_bar--next',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        10: {
            spaceBetween: 30,
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        576: {
            spaceBetween: 0,
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        992: {
            spaceBetween: 10,
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1025: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        }
    }
});
const swiper__dev = new Swiper('.swiper__dev', {
    speed: 400,
    spaceBetween: 40,
    slidesPerView: 3,
    slidesPerGroup: 3,

    navigation: {
        nextEl: '.dev-button-next',
        prevEl: '.dev-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    breakpoints: {
        10: {
            spaceBetween: 30,
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        576: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        1025: {
            spaceBetween: 40,
        }
    }
});
const project__swiper = new Swiper('.project__swiper', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    navigation: {
        nextEl: '.project__swiper--next',
        prevEl: '.project__swiper--prev',
    },
    breakpoints: {
        10: {
            spaceBetween: 21,
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        576: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        992: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1025: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        }
    }
});





//
const validation = new JustValidate('#form');

validation
    .addField('#name', [{
            rule: 'required',
            errorMessage: 'Вы не ввели имя',
        }, {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Минимум 3 буквы',
        },
        {
            rule: 'maxLength',
            value: 30,
            errorMessage: 'Максимум 30 букв'
        },
    ])
    .addField('#tel', [{
            rule: 'required',
            errorMessage: 'Вы не ввели телефон',
        },
        {
            rule: 'number',
            errorMessage: 'Недопустимый формат',
        },
    ]);

ymaps.ready(init);

function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.760202174893486, 37.61431465403913],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 17
    });
    var myPlacemark = new ymaps.Placemark([55.7600297625492, 37.61431465403913], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'image/mapicon.svg',
        iconImageSize: [48, 48],
        iconImageOffset: [-3, -42]
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.controls.add('zoomControl');
    myMap.behaviors.disable('scrollZoom');
}





//
let burger = document.querySelector('.burger__icon')
let burgerMenu = document.querySelector('.burger__menu')

burger.addEventListener('click',
    function () {
        burger.classList.toggle('burger__icon--active');
        burgerMenu.classList.toggle('burger__menu--active')
    });




/*popups*/
let popup = document.querySelector('.popup')
let openSlide = document.querySelector('.slide__gal--2')
let clouseBtn = document.querySelector('.clouse__btn')

openSlide.addEventListener('click', function () {
    popup.classList.add('popup--active')
})
clouseBtn.addEventListener('click', function () {
    popup.classList.remove('popup--active')
})
//
let search__btn = document.querySelector('.search--img')
let input = document.querySelector('.search--input')
search__btn.addEventListener('click', function () {
    input.classList.toggle('search--input--active')
})
//tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
//mask
let selector = document.querySelector('input[type="tel"]');

let im = new Inputmask("+7-9999999");
im.mask(selector);
//simple bar
const simpleBar = new SimpleBar(document.querySelector('.dropdown-menu--hero'));
simpleBar.recalculate();