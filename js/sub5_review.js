document.addEventListener('DOMContentLoaded',()=> {
  fetch("../data/sub5_community_review.json")
  .then((res)=>{return res.json()})
  .then((data)=>{ 
    const data_review = data.community_review;
          review_thm = document.querySelector('.images > ul')
          popup_wrap = document.querySelector('.review_wrap');


    data_review.forEach((v)=>{
      console.log(v.review_img)
      review_thm.innerHTML += `
      <li><a name="pop_btn"><img src="${v.review_img}"> </a></li>`
      popup_wrap.innerHTML += ``
    })
  })
})