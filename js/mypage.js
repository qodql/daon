document.addEventListener("DOMContentLoaded", () => {
    
    //Mypage Tab
    const mypage_tab_btn = document.querySelectorAll('.mypage_tap_wrap .tab li');
    const mypage_tab_cont = document.querySelectorAll('.mypage_tap_wrap .tab_cont > div');

    mypage_tab_btn.forEach((btn,key)=>{
        btn.onclick = function(){
            mypage_tab_btn.forEach((v,i)=>{
                mypage_tab_btn[i].classList.remove('on');
                mypage_tab_cont[i].classList.remove('on');
            })
            mypage_tab_btn[key].classList.add('on');
            mypage_tab_cont[key].classList.add('on');
        }
    })



    
})