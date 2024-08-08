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
    let cnt = 0, timer;
    
    const rolling = () => {
        // cnt를 123가 되도록 +1 해주고, f.l로 나눈 후 나머지 값을 012로 받아서 cnt랑 i값이 같으면 on이 되는거임.
        cnt = (cnt + 1) % facilitiesLi.length;
        facilitiesRolling();
    }
    
    timer = setInterval(rolling, 5000);
    
    const facilitiesRolling = () => {
        facilitiesLi.forEach((li, i) => {
            li.classList.toggle("on", i === cnt);
        });
    }
    
    facilitiesLi.forEach((v,i)=>{
        v.addEventListener("click",(e)=>{
            e.preventDefault();
            clearInterval(timer)
            // 클릭한 요소의 인덱스값으로 cnt 설정
            cnt = i; 
            // 바로 업데이트 해줘서 on 클래스를 넣음.
            facilitiesRolling(); 
            // 그리고 5초 인터벌을 돌림.
            timer = setInterval(rolling, 5000);
        })
    })
})