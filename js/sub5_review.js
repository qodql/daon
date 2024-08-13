document.addEventListener('DOMContentLoaded', () => {
  fetch("../data/sub5_community_review.json")
    .then((res) => { return res.json() })
    .then((data) => {
      const data_review = data.community_review;
      review_thm = document.querySelector('.images > ul')
      popup_wrap = document.querySelector('.review_wrap');
      console.log(data.community_review);

      data_review.forEach((v, i) => {
        review_thm.innerHTML += `
            <li><a name="pop_btn" data-id = ${i}><img src="${v.review_img}"> </a></li>`

      })

      //common 비동기 처리 때문에 다시 넣어줌
      const btn = document.querySelectorAll('[name="pop_btn"]');
      popup = document.querySelector('.popup'),
        popupClose = document.querySelector('.popup_close_btn'),
        body = document.body;
      btn.forEach((v,i) => {
        v.addEventListener('click', function (){
          popup.classList.add("active");
          body.classList.add("prevent_scroll");
          
          popup_wrap.innerHTML =`<div>
          <img src="./img/img_coumunity_review_0${i + 1}.jpg" alt="pension_review">
          </div>
          <div class="review_cont">
            <p class="user_id">
            ${data.community_review[i].review_id}
            </p>
            <div class="rating_img">
                <img src="./img/icon/icon_sub5_review_5star.svg" alt="">
            </div>
            <p class="review_desc">
              ${data_review[i].review_text}
          </div>`
        })
      })
      popupClose.onclick = function () {
        popup.classList.remove("active");
        body.classList.remove("prevent_scroll");
      }
      popup.addEventListener('click', function (e) {
        if (e.target == popup) {
          popup.classList.remove("active");
          body.classList.remove("prevent_scroll");
        }
       })
       
      
    })
})