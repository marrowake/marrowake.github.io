$(function () {

  $('.partners__slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  })

  $('.help__menu').on('click', function () {
    $('.help__menu-dropdown').toggleClass('visually-hidden'),
      $('.rect').toggleClass('visually-hidden')
  })

  $('.accordion-item__title').click(function () {
    const parent = $(this).parent()

    if (parent.hasClass('accordion-item--active')) {
      parent.removeClass('accordion-item--active')
    } else {
      $('.accordion-item').removeClass('accordion-item--active')
      parent.addClass('accordion-item--active')
    }
  })

  // $(document).ready(function () {
  //   $('.accordion-item__title').click(function () {
  //     $(this).next('.accordion-item__content').slideToggle(200)
  //   })
  // })

})