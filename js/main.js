document.addEventListener("DOMContentLoaded", () => {

    // [↓] swiper
    var swiper = new Swiper(".room_list", {
        slidesPerView: 1.04,
        spaceBetween: 40,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next.room_next",
            prevEl: ".swiper-button-prev.room_prev",
        },
        breakpoints: {
        
          1401: {
            slidesPerView: 1.36,  //브라우저가 1401보다 클 때
            spaceBetween: 40,
          },
          1279: {
            slidesPerView: 1.16,  //브라우저가 1279 클 때
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 1.16,  //브라우저가 767보다 클 때
            spaceBetween: 16,
          },
          480: {
            slidesPerView: 1.04,  //브라우저가 480보다 클 때
            spaceBetween: 16,
          },
        },
    });
    var swiper = new Swiper(".event_list", {
        slidesPerView: "auto",
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next.event_next",
            prevEl: ".swiper-button-prev.event_prev",
        },
    });
    

    // [↓] facilities on class 제어
    let facilitiesLi = document.querySelectorAll(".facilities_list li");
    let cnt = 0

    setInterval(() => {
        cnt += 1
        facilitiesRolling()
    }, 5000)
    
    const facilitiesRolling = () => {
        if(cnt === 1) {
            facilitiesLi[0].classList.remove("on")
            facilitiesLi[1].classList.add("on")
        } else if(cnt === 2) {
            facilitiesLi[1].classList.remove("on")
            facilitiesLi[2].classList.add("on")
        } else if (cnt === 3) {
            facilitiesLi[2].classList.remove("on")
            facilitiesLi[0].classList.add("on")
            cnt = 0
        } else {
            return
        }
    }
})