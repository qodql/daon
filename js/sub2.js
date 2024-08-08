document.addEventListener("DOMContentLoaded", () => {

  // [↓] swiper


  // database
  fetch("../data/sub2.json")
  .then((res)=> {return res.json()})
  .then((data)=>{
    const room_content = document.querySelector('.room_content');
    let dataLove = data.LOVE;
    let a = "";
    const currentUrl = window.location.href;

    if (currentUrl.includes('sub2_room_love_you.html')) {
     
      dataLove.forEach((value)=>{
          a = '';
       value.photo.forEach((v)=>{
        a += `<div class="swiper-slide"><img src="${v}" alt="love you 101호"></div>`;
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
                                  <li><h3>LOVE YOU 101호</h3></li>
                                  <li>
                                      <p>객실크기</p>
                                      <p>16평</p>
                                  </li>
                                  <li>
                                      <p>객실구성</p>
                                      <p>침대룸A(더블1),주방, 화장실</p>
                                  </li>
                                  <li>
                                      <p>최대인원</p>
                                      <p>기본2인/최대6인</p>
                                  </li>
                                  <li>
                                      <p>추가요금</p>
                                      <p>2인 초과 및 침구 추가 시 인당 1만원</p>
                                  </li>
                                  <li>
                                      <button onclick="location.href='./sub6_reservation_step1.html'" class="main_btn";>예약하기</button>
                                  </li>
                              </ul>
                          </li>`
      })
      console.log('Love You page loaded!');
      // only_you_html 페이지에서 자동으로 실행될 코드
    } else if (currentUrl.includes('sub2_room_only_you.html')) {
      console.log('Only You page loaded!');
    }
  

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

