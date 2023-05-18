window.addEventListener('DOMContentLoaded', function () {

    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu-item'),
        bars = document.querySelector('.bars'),
        close = document.querySelector('.close-btn'),
        open = document.querySelector('.open-btn');

    bars.addEventListener('click', () => {
        menu.classList.toggle('-translate-x-full');
        menu.style = 'transiton easy-in-out;'
        open.classList.toggle('hidden');
        close.classList.toggle('hidden');
    });

    // open.addEventListener('click', () => {
    //     menu.classList.toggle('-translate-x-full');
    //     open.classList.toggle('hidden');
    //     close.classList.toggle('hidden');
    // });


    // close.addEventListener('click', () => {
    //     menu.classList.toggle('-translate-x-full');
    //     open.classList.toggle('hidden');
    //     close.classList.toggle('hidden');
    // });


    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('-translate-x-full');
            open.classList.toggle('hidden');
            close.classList.toggle('hidden');
        });


        window.addEventListener('click', function (e) {
            if (!menu.contains(e.target) && !bars.contains(e.target) && !close.contains(e.target) && !open.contains(e.target)) {
                menu.classList.toggle('-translate-x-full');
                open.classList.toggle('hidden');
                close.classList.toggle('hidden');
            }
        });
    });


    // Close when click outside




    // Slider
    // const slides = document.querySelectorAll('.slider_item'),
    //     prev = document.querySelector('.prev'),
    //     next = document.querySelector('.next'),
    //     total = document.querySelector('#total'),
    //     current = document.querySelector('#current');

    // let slideIndex = 1;

    // showSlides(slideIndex);

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // }
    // else {
    //     total.textContent = slides.length;
    // }

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }
    //     if (n < 1)
    //         slideIndex = slides.length;

    //     slides.forEach(item => item.style.display = 'none');

    //     slides[slideIndex - 1].style.display = 'block';

    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     }
    //     else {
    //         current.textContent = slideIndex;
    //     }
    // }

    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // }

    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // }
    // );

    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // }
    // );


});