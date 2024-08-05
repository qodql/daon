document.addEventListener("DOMContentLoaded", () => {

    var swiper = new Swiper(".rooftop-img", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".rooftop-bt",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


})