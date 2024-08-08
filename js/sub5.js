document.addEventListener("DOMContentLoaded", () => {
  
  
  //sub5_coumunity_review 스크립트



  const review_Btn = document.querySelectorAll(".images ul li a[name='pop_btn']"),
        review_Popup = document.querySelector('.popup'),
        modal_close = document.querySelector('.closemenu'),
        review_popbg = document.querySelector(".popup_bg"),
        modal_scroll = document.body;

  review_Btn.forEach((v)=>{  
    v.addEventListener('click', function(){
      review_Popup.classList.add("active");
      review_Popup.classList.remove("unactive");
      modal_scroll.style.overflow = "hidden";
      
      modal_close.onclick = function(e){
        review_Popup.classList.remove("active");
        review_Popup.classList.add("unactive");
      modal_scroll.style.overflow = "unset"
      }
    })
    
  })
  window.addEventListener('click', function(e){
    if(e.target == review_Popup){
      review_Popup.classList.remove("active");
      review_Popup.classList.add("unactive");
    modal_scroll.style.overflow = "unset"
    }
  })

})












 
      