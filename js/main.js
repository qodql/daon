document.addEventListener("DOMContentLoaded", () => {
    // chatbot
    (function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.");}var ch=function(){ch.c(arguments);};ch.q=[];ch.c=function(args){ch.q.push(args);};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return;}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x);}}if(document.readyState==="complete"){l();}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l);}})();
  
    ChannelIO('boot', {
      "pluginKey": "dbf51d87-0b32-4469-b099-572fefb331ca"
    });

    // [↓] gnb
    const header = document.querySelector(".header")
    const navBg = document.querySelector(".nav_bg")
    const logo = document.querySelector(".logo a img")

    header.addEventListener("mouseover", (e) => {
        e.preventDefault()
        header.classList.add("on");
        logo.setAttribute("src", "./img/logo.svg")
    })
    navBg.addEventListener("mouseover", (e) => {
        e.preventDefault()
        header.classList.add("on");
        logo.setAttribute("src", "./img/logo.svg")
    })
    navBg.addEventListener("mouseleave", (e) => {
        e.preventDefault()
        header.classList.remove("on");
        logo.setAttribute("src", "./img/logo_white.svg")
    })

    // [↓] swiper
    var swiper = new Swiper(".room_list", {
        slidesPerView: 1.36,
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