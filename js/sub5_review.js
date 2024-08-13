document.addEventListener('DOMContentLoaded', () => {
  fetch("../data/sub5_community_review.json")
    .then((res) => { return res.json() })
    .then((data) => {
      const data_review = data.community_review;
      const page_reverse = data.community_review.reverse();
      const user_id = document.querySelector('.user_id');
      review_thm = document.querySelector('.images > ul')
      popup_wrap = document.querySelector('.review_wrap');


      data_review.forEach((v, i) => {
        
        review_thm.innerHTML += `
            <li><a name="pop_btn" data-id = ${v.id}><img src="${v.review_img}"> </a></li>`

      })
     

      //common 비동기 처리 때문에 다시 넣어줌
      const btn = document.querySelectorAll('[name="pop_btn"]');
      popup = document.querySelector('.popup'),
        popupClose = document.querySelector('.popup_close_btn'),
        body = document.body;
      btn.forEach((v,i) => {
        v.addEventListener('click', function (){
          let idx = Number(v.dataset.id);
        let d = data_review.find((item)=>item.id==idx)
        if(data_review.in === true){
          user_id.classList.add('')
        }
          popup.classList.add("active");
          body.classList.add("prevent_scroll");
          popup_wrap.innerHTML =`<div>
          <img src="${d.review_img}" alt="pension_review">
          </div>
          <div class="review_cont">
            <p class="user_id">
            ${d.review_id}
            </p>
            <div class="rating_img">
                <img src="./img/icon/icon_sub5_review_5star.svg" alt="">
            </div>
            <p class="review_desc">
              ${d.review_text}
              </p>
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

       //pagination

       let page = [];
       for(let i=0; i<page_reverse.length; i+=9){
         page.push(page_reverse.slice(i, i+9));
       }
     
        let notice_paging = ()=>{
          const page_list = document.querySelector('.pagination_num');
          
          page.forEach((v,i)=>{
            page_list.innerHTML += `<a href='#'>${i+1}</a>`;
          })
          
          const page_btn = document.querySelectorAll('.pagination_num a');
          
          page_list.firstElementChild.classList.add('on');
        }
        notice_paging();
    })
})