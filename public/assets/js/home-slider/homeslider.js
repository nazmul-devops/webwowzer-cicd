const homeSlider = new Swiper('.homeSlider', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  // loop: true,
  speed: 500,
  parallax: true,
  spaceBetween: 40,
  slidesPerView: 1,
  centeredSlides: true,
  pagination: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
