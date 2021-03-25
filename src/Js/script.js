const menuList = document.querySelectorAll('.header__menu-link');


menuList.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.tagName ==='A' && !item.classList.contains('active')){
            menuList.forEach(item => item.classList.remove('active'));
            item.classList.add('active');
        }
    });
});

function slider(left, right){
    const slides = [
        {
            img: './img/promo-slider.png',
            title: 'ARTCASTING',
            subtitle: 'Это самый удобный, интуитивный сервис кастингов в рунете',
            button: 'Найти кастинг'
        },
        {
            img: './img/promo-slider2.png',
            title: 'ЭТО БЕЛКА',
            subtitle: 'Имеет удлинённое тело с пушистым  хвостом, длинные уши, тёмно-бурый цвет с белым брюшком. ', 
            button: 'Покормить'
        },
        {
            img: './img/promo-slider3.png',
            title: 'Это Пикачу',
            subtitle: 'Пикачу — обаятельный зверек, снабженный зигзагообразным хвостом и ярким окрасом. ',
            button: 'Поймать Пикачу!' 
        }
    ];

    const ArrowLeft = document.querySelector(left),
        ArrowRight = document.querySelector(right),
        img = document.querySelector('.promo-slider__img'),
        title = document.querySelector('.promo-slider__content-title'),
        descr = document.querySelector('.promo-slider__content-descr'),
        button = document.querySelector('.promo-slider__content-btn'),
        dots = document.getElementsByClassName("dot");

    let currentSlide = 0;
    let i;
    
    function plusSlides(n){
        currentSlide += n;
        if(currentSlide > slides.length - 1){
            currentSlide = 0;
        }
        if(currentSlide < 0){
            currentSlide = slides.length - 1;
        }
        return currentSlide;
    }
    
    ArrowLeft.addEventListener('click', () => {
        plusSlides(-1);
        slides.forEach((slide, i) => {
            if(currentSlide === i){
                img.setAttribute('src', slide.img);
                title.textContent = slide.title;
                descr.textContent = slide.subtitle;
                button.textContent = slide.button;
                
            }
        });
    });
    ArrowRight.addEventListener('click', () => {
        plusSlides(1);
        slides.forEach((slide, i) => {
            if(currentSlide === i){
                img.setAttribute('src', slide.img);
                title.textContent = slide.title;
                descr.textContent = slide.subtitle;
                button.textContent = slide.button;
            
            }
        });
    });
}

slider(".left-arr", ".right-arr");


$(document).ready(function(){
    $('.casting__items').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                // infinite: true,
                // dots: true
              }
            }
        ]
    });
  });

// window.addEventListener('DOMContentLoaded', () => {
//     const menu = document.querySelector('header__menu'),
//     menuItem = document.querySelectorAll('header__menu-item'),
//     hamburger = document.querySelector('.header__hamburger');

//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle('header__hamburger_active');
//         menu.classList.toggle('header__menu_active');
//     });

//     menuItem.forEach(item => {
//         item.addEventListener('click', () => {
//             hamburger.classList.toggle('header__hamburger_active');
//             menu.classList.toggle('header__menu_active');
//         });
//     });

// });






