$(document).ready(function(){

    // Header Scrolling
    $(window).scroll(function(){
        heightIntro = $('#intro').height() - 18;
        if ($(window).scrollTop() > heightIntro) {
            $('.header').addClass('scrolling');
        } else {
            $('.header').removeClass('scrolling');
        }
        console.log(heightIntro);
        console.log($(window).scrollTop());
    });

    // Search Input
    $('.search__btn').click(function(){
        $('.search__input').toggleClass('active');
    });

    // Slick Slider
    $('.intro__items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        asNavFor: '.intro__dots',
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $('.intro__dots').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.intro__items',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
    });

    // Menu Btn
    $('.menu__btn').click(function(){
        $('.menu__btn').toggleClass('active');
        $('.header__nav').toggleClass('active');
    })
    $('.nav__list-item').click(function(){
        $('.menu__btn').removeClass('active');
        $('.header__nav').removeClass('active');
    });

    // Scroll Reveal
    window.sr = ScrollReveal();

    sr.reveal('.animate-left',{
        origin:'left',
        duration: 1000,
        distance:'25rem',
        delay:500
    });
    sr.reveal('.animate-right',{
        origin:'right',
        duration: 1000,
        distance:'25rem',
        delay:600
    });
    sr.reveal('.animate-top',{
        origin:'top',
        duration: 1000,
        distance:'25rem',
        delay:300
    });
    sr.reveal('.animate-bottom',{
        origin:'bottom',
        duration: 1000,
        distance:'25rem',
        delay:800
    });
    sr.reveal('.spotlight', {
        distance: '0px',
        opacity: 0,
        duration: 2000,
        delay:600
    });

});

