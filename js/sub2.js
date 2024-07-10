document.addEventListener("DOMContentLoaded", () => {

  // [↓] swiper
  var swiper = new Swiper(".love_you_list", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: false,
    navigation: {
        nextEl: ".swiper-button-next.love_you_next",
        prevEl: ".swiper-button-prev.love_you_prev",
    },
  });
})

