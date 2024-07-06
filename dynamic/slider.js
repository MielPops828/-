const swiper = new Swiper(".swiper", {
  loop: false,
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
});