$(function () {
  $('.center').slick({
    centerMode:true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    focusOnSelect: true,
    initialSlide: 2,
    variableWidth: true,
    prevArrow:'<span class="prev_arrow"> <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.9999 0.666748C29.1249 0.666748 37.3333 8.87508 37.3333 19.0001C37.3333 29.1251 29.1249 37.3334 18.9999 37.3334C8.87492 37.3334 0.666589 29.1251 0.666589 19.0001C0.666589 8.87508 8.87492 0.666748 18.9999 0.666748ZM22.6783 13.5117C22.9818 13.1974 23.1498 12.7764 23.146 12.3394C23.1422 11.9024 22.967 11.4844 22.658 11.1754C22.3489 10.8664 21.9309 10.6911 21.4939 10.6873C21.0569 10.6835 20.6359 10.8515 20.3216 11.1551L13.6549 17.8217C13.3425 18.1343 13.1669 18.5581 13.1669 19.0001C13.1669 19.442 13.3425 19.8659 13.6549 20.1784L20.3216 26.8451C20.6359 27.1487 21.0569 27.3167 21.4939 27.3129C21.9309 27.3091 22.3489 27.1338 22.658 26.8248C22.967 26.5158 23.1422 26.0977 23.146 25.6607C23.1498 25.2238 22.9818 24.8027 22.6783 24.4884L17.1899 19.0001L22.6783 13.5117Z" fill="#131316"/></svg>',
    nextArrow:'<span class="next_arrow"> <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 1.66675C9.87496 1.66675 1.66663 9.87508 1.66663 20.0001C1.66663 30.1251 9.87496 38.3334 20 38.3334C30.125 38.3334 38.3333 30.1251 38.3333 20.0001C38.3333 9.87508 30.125 1.66675 20 1.66675ZM16.3216 14.5117C16.018 14.1974 15.85 13.7764 15.8538 13.3394C15.8576 12.9024 16.0329 12.4844 16.3419 12.1754C16.6509 11.8664 17.069 11.6911 17.506 11.6873C17.943 11.6835 18.364 11.8515 18.6783 12.1551L25.345 18.8217C25.6574 19.1343 25.8329 19.5581 25.8329 20.0001C25.8329 20.442 25.6574 20.8659 25.345 21.1784L18.6783 27.8451C18.364 28.1487 17.943 28.3167 17.506 28.3129C17.069 28.3091 16.6509 28.1338 16.3419 27.8248C16.0329 27.5158 15.8576 27.0977 15.8538 26.6607C15.85 26.2238 16.018 25.8027 16.3216 25.4884L21.81 20.0001L16.3216 14.5117Z" fill="#131316"/></svg></i></span>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      }
    ]
  });
})
