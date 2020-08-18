$(function () {

  $(document).ready(function () {
    $(".button").click(function () {
      var value = $(this).attr("data-filter")
      var elem = $(".elem")
      if (value == "all") {
        $(elem).show("500")
      }
      else {
        $(elem).not("." + value).hide("500")
        $(elem).filter("." + value).show("500")
      }
    })
  })

  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $('#toTop').fadeIn()
    } else {
      $('#toTop').fadeOut()
    }
  })

  $('#toTop').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 777)
  })

  $('#check__menu').on('click', function () {
    $('.header__menu').toggleClass('visible')
  })

  new WOW().init()

  $('.list-mobile').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: false,
    // centerMode: true,
    variableWidth: true
  })

  $('.works__items-mobile').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: false,
    asNavFor: '.dots__slider-mobile'
  })

  $('.dots__slider-mobile').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: false,
    asNavFor: '.works__items-mobile',
    // centerMode: true,
    focusOnSelect: true
  })

})

function slowScroll(id) {
  var offset = 0
  $('html, body').animate({
    scrollTop: $(id).offset().top - offset
  }, 1000)
  return false
}