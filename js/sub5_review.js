document.addEventListener('DOMContentLoaded',()=> {
  fetch("../data/sub5_community_review.json")
  .then((res)=>{return res.json()})
  .then((data)=>{ 
    const data_review = data.community_review;
          review_thm = document.querySelector('.images > ul')
          popup_wrap = document.querySelector('.review_wrap');
          console.log(data.community_review);
          
          data_review.forEach((v,i)=>{
      review_thm.innerHTML += `
      <li><a name="pop_btn"><img src="${v.review_img}"> </a></li>`
    })

    const selectedReview = data_review.find((v) => v.id === reviewId);
    console.log(selectedReview)
    popup_wrap.innerHTML += `<div>
                  <img src="./img/img_coumunity_review_0${idx+1}.jpg" alt="pension_review">
              </div>
              <div class="review_cont">
                  <p class="user_id">
                      ${data.community_review[idx].review_id}
                  </p>
                  <div class="rating_img">
                      <img src="./img/icon/icon_sub5_review_5star.svg" alt="">
                  </div>
                  <p class="review_desc">
                    ${data_review.review_text}
              </div>`
            
  })
})