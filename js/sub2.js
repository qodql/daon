document.addEventListener("DOMContentLoaded", () => {




  // database
  fetch("../data/sub2.json")
  .then((res)=> {return res.json()})
  .then((data)=>{
    const room_content = document.querySelector('.room_content');
    let data_love = data.LOVE;
    let data_only = data.ONLY;
    let room_img = "";
    const currentUrl = window.location.href;
      // love_you_html 페이지 스크립트 실행
    if (currentUrl.includes('sub2_room_love_you.html')) {
      data_love.forEach((value)=>{
        room_img = '';
       value.photo.forEach((v)=>{
        room_img += `<div class="swiper-slide"><img src="${v}" alt="${value.type} ${value.room_info}"></div>`;
      });
        room_content.innerHTML += `<li class="main_box2">
                              <div class="swiper room_list">
                                  <div class="swiper-wrapper">
                                    ${room_img}
                                  </div>
                                  <div class="swiper_btn_wrap">
                                      <div class="swiper-button-next room_img_next"></div>
                                      <div class="swiper-button-prev room_img_prev"></div>
                                  </div>
                              </div>
                              <ul class="all_text">
                                  <li><h3>${value.type} ${value.room_name}</h3></li>
                                  <li>
                                      <p>객실크기</p>
                                      <p>${value.room_info}</p>
                                  </li>
                                  <li>
                                      <p>객실구성</p>
                                      <p>${value.room_composition}</p>
                                  </li>
                                  <li>
                                      <p>최대인원</p>
                                      <p>${value.room_personnel}</p>
                                  </li>
                                  <li>
                                      <p>추가요금</p>
                                      <p>${value.room_caution}</p>
                                  </li>
                                  <li>
                                      <button onclick="location.href='./sub6_reservation_step1.html'" class="main_btn";>예약하기</button>
                                  </li>
                              </ul>
                          </li>`
      })
      // only_you_html 페이지 스크립트 실행
    } else if (currentUrl.includes('sub2_room_only_you.html')) {
      data_only.forEach((value)=>{
        a = '';
     value.photo.forEach((v)=>{
      a += `<div class="swiper-slide"><img src="${v}" alt="${value.type} ${value.room_info}"></div>`;
    });
      room_content.innerHTML += `<li class="main_box2">
                                 <div class="swiper room_list">
                                  <div class="swiper-wrapper">
                                  ${a}
                                </div>
                                <div class="swiper_btn_wrap">
                                    <div class="swiper-button-next room_img_next"></div>
                                    <div class="swiper-button-prev room_img_prev"></div>
                                </div>
                            </div>
                            <ul class="all_text">
                                <li><h3>${value.type} ${value.room_name}</h3></li>
                                <li>
                                    <p>객실크기</p>
                                    <p>${value.room_info}</p>
                                </li>
                                <li>
                                    <p>객실구성</p>
                                    <p>${value.room_composition}</p>
                                </li>
                                <li>
                                    <p>최대인원</p>
                                    <p>${value.room_personnel}</p>
                                </li>
                                <li>
                                    <p>추가요금</p>
                                    <p>${value.room_caution}</p>
                                </li>
                                <li>
                                    <button onclick="location.href='./sub6_reservation_step1.html'" class="main_btn";>예약하기</button>
                                </li>
                            </ul>
                        </li>`
    })
    };
  

    var swiper = new Swiper(".room_list", {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        autoplay: false,
        navigation: {
            nextEl: ".swiper-button-next.room_img_next",
            prevEl: ".swiper-button-prev.room_img_prev",
        },
      });

    
  })
})

