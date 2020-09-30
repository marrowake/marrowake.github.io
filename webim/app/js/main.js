$(function () {

  $('.carousel').slick({
    infinite: true,
    autoplay: true,
    // centerMode: true,
    // centerPadding: '5px',
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrow_prev.svg" width="26" height="26" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrow_next.svg" width="26" height="26" alt=""></img>',
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          // dots: true,
          // dotsClass: 'slider__dots'
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          // centerPadding: '50px'
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerMode: true,
          // centerPadding: '50px'
        }
      }
    ]
  })

  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 120) {
  //     $('.header').addClass('fixed');
  //   }
  //   else if ($(this).scrollTop() < 120) {
  //     $('.header').removeClass('fixed');
  //   }
  // });

  $('#check__menu').on('click', function () {
    $('.mobile__menu').toggleClass('visible')
  })

});

function check() {
  var submit = document.getElementsByName('submit')[0];
  if (document.getElementById('politics').checked)
    submit.disabled = '';
  else
    submit.disabled = 'disabled';
}