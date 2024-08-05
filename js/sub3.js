document.addEventListener("DOMContentLoaded", () => {

fetch('./data/sub3_facilities.json')
.then(res => res.json())
.then(res =>{
    console.log(res.items[2])
    let data = res.items[0].rooftop[0];
    let contents = document.querySelector('.contents')

    let content =`<div class="sub3_rooftop_contents">
                    <div class="rooftop-img">
                        <a><img src="${data.img[0]}" a href="#" /></a>
                        <a><img src="${data.img[1]}" a href="#" /></a>
                        <a><img src="${data.img[2]}" a href="#" /></a>
                    </div>
                    <div class="rooftop-title">
                        <div class="rooftop-t">
                        <p>${data.title[0]}</p>
                        <p>${data.title[1]}</p>
                        <p>${data.title[2]}</p>
                    </div>
                        <dl class="rooftop-s">
                    <div class="rooftop-s1">
                        <dt>${data.text[0].subtext1[0]}</dt>
                        <dd>이용 가능 시간: 12:00  ~ 22:00</dd>
                    </div>
                    <div class="rooftop-s1">
                        <dt>이용 안내</dt>
                        <dd>
                        우천 시 사용 불가 <br>
                        허용되지 않은 화기류 사용 불가 </dd>
                    </div>
                    </dl>
                    <div class="rooftop-bt">
                        <a href="#">바베큐 </a>
                        <a href="#" class="active">옥상 정원</a>
                        <a href="#"> 야외 수영장</a>
                    </div>
                    </div>
                    </div>`;

    contents.innerHTML=content

})


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