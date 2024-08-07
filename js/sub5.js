document.addEventListener("DOMContentLoaded", () => {

})











//sub5_coumunity_review 스크립트

const review_Btn = document.querySelectorAll('.images ul li a[name="pop_btn"]'),
      review_Popup = document.querySelector('.popup');
  review_btn.forEach((v)=>{
    v.addEventListener('click', function(){
      review_Popup.classList.add("active")
    })
  })
      