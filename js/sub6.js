document.addEventListener("DOMContentLoaded", () => {

    // [↓] step1 객실 수, 성인 수, 어린이 수 선택
    const roomInput = document.querySelector(".date_person .room input")
    const adultInput = document.querySelector(".date_person .adult input")
    const childInput = document.querySelector(".date_person .child input")
    const plusBtn = document.querySelectorAll(".date_person .btn_wrap .plus")
    const minusBtn = document.querySelectorAll(".date_person .btn_wrap .minus")
    const nextBtn = document.querySelector(".next_btn")

    let roomNum=1, adultNum=2, childNum=0;
    plusBtn.forEach((v,i)=>{
        plusBtn[i].addEventListener("click", (e) => {
            let targetLi = e.target.parentElement.parentElement.parentElement;
            if (targetLi.classList.contains("adult")) {
                if (adultNum < 12){
                    adultNum++;
                    if(adultNum > 12){
                        adultNum = 12;
                        adultInput.value = adultNum;
                    } else if (adultNum > 6){
                        roomNum = 2;
                        roomInput.value = roomNum;
                        let roomMinusBtn = document.querySelector(".date_person .room .minus")
                        roomMinusBtn.style.cssText = "opacity:1;"
                    }
                    if (adultNum < 12){
                        v.style.cssText = 'opacity:1;'
                        minusBtn[i].style.cssText = 'opacity:1;'
                    } else {
                        v.style.cssText = 'opacity:0.3;'
                    }
                }
                adultInput.value = adultNum;
            }
            if (targetLi.classList.contains("room")) {
                if(roomNum < 4) {
                    roomNum++;
                    if (roomNum !== 4){
                        v.style.cssText = 'opacity:1;'
                    } else {
                        v.style.cssText = 'opacity:0.3;'
                    }
                    if (roomNum !== 1) {
                        minusBtn[i].style.cssText = 'opacity: 1;'
                    }
                }
                roomInput.value = roomNum;
            }
            if (targetLi.classList.contains("child")) {
                if (childNum < 12){
                    childNum++;
                    if(childNum > 12){
                        childNum = 12;
                        childInput.value = childNum;
                    } else if (childNum > 6){
                        roomNum = 2;
                        roomInput.value = roomNum;
                        let roomMinusBtn = document.querySelector(".date_person .room .minus")
                        roomMinusBtn.style.cssText = "opacity:1;"
                    }
                    if (childNum < 12){
                        v.style.cssText = 'opacity:1;'
                        minusBtn[i].style.cssText = 'opacity:1;'
                    } else {
                        v.style.cssText = 'opacity:0.3;'
                    }
                }
                childInput.value = childNum;
            }
        })
    })

    minusBtn.forEach((v,i)=>{
        minusBtn[i].addEventListener("click", (e) => {
            let targetLi = e.target.parentElement.parentElement.parentElement;
            if (targetLi.classList.contains("adult")) {
                if(adultNum <= 2) {
                    adultInput.value = 2;
                } else {
                    adultNum--;
                    adultInput.value = adultNum;
                    if (adultNum < 12){
                        plusBtn[i].style.cssText = 'opacity:1;'
                        v.style.cssText = 'opacity: 1;'
                    }
                    if (adultNum == 2){
                        v.style.cssText = 'opacity: 0.3;'
                    }
                }
            } 
            if (targetLi.classList.contains("room")) {
                if(roomNum > 1) {
                    roomNum--;
                    if (roomNum !== 4){
                        plusBtn[i].style.cssText = 'opacity:1;'
                    }
                    if (roomNum == 1) {
                        minusBtn[i].style.cssText = 'opacity: 0.3;'
                    }
                }
                roomInput.value = roomNum;
            }
            if (targetLi.classList.contains("child")) {
                if(childNum <= 2) {
                    childInput.value = 2;
                } else {
                    childNum--;
                    childInput.value = childNum;
                    if (childNum < 12){
                        plusBtn[i].style.cssText = 'opacity:1;'
                        v.style.cssText = 'opacity: 1;'
                    }
                    if (childNum == 2){
                        v.style.cssText = 'opacity: 0.3;'
                    }
                }
            }
        })
    })

    // [↓] step1 객실 선택
    const roomBtn = document.querySelectorAll(".room_select_btn");
    let roomBtnSelected = '';
    roomBtn.forEach((v,i)=>{
        v.addEventListener("click", (e)=>{
            e.target.classList.toggle("selected");
            roomBtnSelected = document.querySelectorAll(".room_select_btn.selected").length;
            if(roomBtnSelected > roomNum) {
                alert('선택 가능한 객실 수를 초과하였습니다.');
                e.target.classList.remove("selected");
            }
        })
    })
    nextBtn.addEventListener("click", ()=>{
        if (!roomBtnSelected) {
            alert(`최소 ${roomNum}개의 객실을 선택해주세요.`);
        } else {
            window.location.href='./sub6_reservation_step2.html'
        }
    })

})