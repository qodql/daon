document.addEventListener("DOMContentLoaded", () => {
    

    //Mypage Tab
    const mypageTabBtn = document.querySelectorAll('.mypage_tap_wrap .tab li');
    const mypageTabCont = document.querySelectorAll('.mypage_tap_wrap .tab_cont > div');

    console.log(mypageTabBtn);
    console.log(mypageTabCont);


    mypageTabBtn.forEach((btn,key)=>{
        btn.onclick = function(){
            mypageTabBtn.forEach((v,i)=>{
                mypageTabBtn[i].classList.remove('on');
                mypageTabCont[i].classList.remove('on');
            })
            mypageTabBtn[key].classList.add('on');
            mypageTabCont[key].classList.add('on');
        }
    })



    
})