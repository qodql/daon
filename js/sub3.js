document.addEventListener("DOMContentLoaded", () => {
  fetch("./data/sub3.json")
    .then((res) => res.json())
    .then((res) => {
      let datacontents = function (n) {
        let data,
          info = "";

        switch (n) {
          case 0:
            data = res.items[0].bbq[0];
            break;
          case 1:
            data = res.items[1].pool[0];
            break;
          case 2:
            data = res.items[2].rooftop[0];
            break;
        }

        data.text.forEach((text) => {
          info += `<div class="rooftop-s1">
                        <dt>${text.subtext1}</dt>
                        <dd>${text.subtext1inner}</dd>
                    </div>`;
        });

        let contents = document.querySelector(".contents");

        let content = 
        `<div class="sub3_rooftop_contents">
          <div class="swiper slide rooftop-img">
            <div class="swiper-wrapper">
              <a class="swiper-slide"><img src="${data.img[0]}" a href="#" /></a>
              <a class="swiper-slide"><img src="${data.img[1]}" a href="#" /></a>
              <a class="swiper-slide"><img src="${data.img[2]}" a href="#" /></a>
            </div>
            <div class="swiper_btn_wrap">
                  <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div>
            </div>
            <div class="swiper-pagination"> </div>
            </div>
            <div class="rooftop-title">
                    <div class="rooftop-t">
                        <p>${data.title[0]}</p>
                        <p>${data.title[1]}</p>
                        <p>${data.title[2]}</p>
                    </div>
            <dl class="rooftop-s">
              ${info}
            </dl>
              <div class="rooftop-bt">
                <a href="#">바베큐 </a>
                <a href="#">옥상 정원</a>
                <a href="#"> 야외 수영장</a>
              </div>
            </div>
          </div>`;

        contents.innerHTML = content;

        var swiper = new Swiper(".slide", {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

        const button = document.querySelectorAll(".rooftop-bt a");

        button.forEach(function (bt, i) {
          bt.onclick = function (e) {
            e.preventDefault();
            datacontents(i);

            button.forEach((btn) => btn.classList.remove("active"));
            bt.classList.add("active");
          };
        });
      };
      let pageType = Number(localStorage.num) || 0;
      datacontents(pageType);
    });
});
