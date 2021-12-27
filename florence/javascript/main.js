$(function() {
  $('.slider__inner').slick({
    centerMode: true,
    arrows: true,
    draggable: false,
    infinity: true,
    centerPadding: '18%',
    slidesToShow: 1,
    prevArrow: '<div class="slider__arrows-left"><img src="img/slider-arrow-left.svg" alt="slider arrow left"></div>',
    nextArrow: '<div class="slider__arrows-right"><img src="img/slider-arrow-right.svg" alt="slider arrow left"></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
})
