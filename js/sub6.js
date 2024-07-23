document.addEventListener("DOMContentLoaded", () => {

    // [↓] step1 객실 수, 성인 수, 어린이 수 선택
    const roomInput = document.querySelector(".date_person .room input")
    const adultInput = document.querySelector(".date_person .adult input")
    const childInput = document.querySelector(".date_person .child input")
    const plusBtn = document.querySelectorAll(".date_person .btn_wrap .plus")
    const minusBtn = document.querySelectorAll(".date_person .btn_wrap .minus")

    let roomNum=1, adultNum=2, childNum=0;
    plusBtn.forEach((v,i)=>{
        plusBtn[i].addEventListener("click", (e) => {
            let targetLi = e.target.parentElement.parentElement.parentElement;
            if (targetLi.classList.contains("room")) {
                roomNum++;
                roomInput.value = roomNum;
            } else if (targetLi.classList.contains("adult")) {
                adultNum++;
                adultInput.value = adultNum;
            } else if (targetLi.classList.contains("child")) {
                childNum++;
                childInput.value = childNum;
            }
        })
    })

    // [↓] step1 객실 선택
    const roomBtn = document.querySelectorAll(".room_select_btn")
    roomBtn.forEach((v,i)=>{
        roomBtn[i].addEventListener("click", (e) => {
            const roomSelectedBtn = document.querySelectorAll(".room_select_btn.selected")
            let roomSelectedBtnLength = roomSelectedBtn.length
            if (roomSelectedBtn){
                if(roomNum - 1 < roomSelectedBtnLength) {
                    alert("선택할 수 있는 객실 수를 초과하였습니다.")
                } else {
                    e.target.classList.add("selected")
                }
            }
        })
    })
})