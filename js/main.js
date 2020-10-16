$(document).ready(function(){
    // search input
    $('.search__btn').on('click', function(){
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
    });
    $('.intro__dots').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.intro__items',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true
    });
});