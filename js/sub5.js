document.addEventListener("DOMContentLoaded", () => {
  
  
  //sub5_coumunity_review 스크립트


// review_btn 이렇게 하거나 reviewBtn << 스크립트에선 이게 좋음
  const popup_btn = document.querySelectorAll("[name='pop_btn']"),
        popup = document.querySelector('.popup'),
        popup_close = document.querySelector('.close_menu'),
        body = document.body;

  popup_btn.forEach((v)=>{  
    v.addEventListener('click', function(){
      popup.classList.add("active");
      body.classList.add("scroll_hidden");//style로 넣지 말고 class 넣어서 제어
      
      popup_close.onclick = function(){
        popup.classList.remove("active");
        body.classList.remove("scroll_hidden")
      }
    })
    
  })
  popup.addEventListener('click', function(e){
    if(e.target == popup){
      popup.classList.remove("active");
      body.classList.remove("scroll_hidden")
    }
  })

})












 
      