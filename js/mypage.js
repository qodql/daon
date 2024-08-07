document.addEventListener("DOMContentLoaded", () => {
    
    //Mypage Tab
    const mypageTabBtn = document.querySelectorAll('.mypage_tap_wrap .tab li');
    const mypageTabCont = document.querySelectorAll('.mypage_tap_wrap .tab_cont > div');

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

    //Mypage Popup
    const mypageCouponPopup = document.querySelector('.coupon_popup_layer');
    const mypageCouponBtn = document.querySelector('.coupon_box input');
    const mypageCouponClose = document.querySelector('.coupon_popup_close_btn');
    
    let mypageCouponFun = function(){
        mypageCouponBtn.onclick = function(){
            mypageCouponPopup.style = "display: block;"
        }
        mypageCouponClose.onclick = function(){
            mypageCouponPopup.style = "display: none;"
        }
    }
    mypageCouponFun();






    
})