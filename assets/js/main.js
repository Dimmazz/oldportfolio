$(function() {

      // Главный слайдер с контентом
  $('.skills__slider').slick({
    accessibility: false,
    draggable: false,
    swipe: false,
    fade: true,
    speed: 250,
    infinity: true,
    dots: false,
    arrows: false,
    asNavFor: '.skills__dots',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          dots: true,
        }
      }]
    })

      // Доп слайдер для главного 
  $('.skills__dots').slick({
    infinity: true,
    speed: 300,
    arrows: false,
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    focusOnSelect: true,
    asNavFor: '.skills__slider'
  })

})