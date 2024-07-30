document.addEventListener("DOMContentLoaded", () => {
    // calendar
    var Calendar = tui.Calendar;

    var today = new Date();
    var firstMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    var secondMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);

    var calendarLeft = new Calendar('#calendar.left', {
        defaultView: 'month',
        taskView: true,
        scheduleView: true,
        useCreationPopup: true,
        useDetailPopup: true,
        renderStartDate: firstMonth
    });

    var calendarRight = new Calendar('#calendar.right', {
        defaultView: 'month',
        taskView: true,
        scheduleView: true,
        useCreationPopup: true,
        useDetailPopup: true,
        renderStartDate: secondMonth
    });

    function moveCalendar(monthDiff) {
        firstMonth.setMonth(firstMonth.getMonth() + monthDiff);
        secondMonth.setMonth(secondMonth.getMonth() + monthDiff);

        calendarLeft.setDate(firstMonth);
        calendarRight.setDate(secondMonth);
    }

    document.getElementById('calendar_prev').addEventListener('click', function () {
        moveCalendar(-1);
    });

    document.getElementById('calendar_next').addEventListener('click', function () {
        moveCalendar(1);
    });

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
                adultNum++;
                adultInput.value = adultNum;
                if(adultNum > 24){
                    alert('한번에 예약 가능한 최대 인원 수는 24명 입니다.')
                    adultNum = 24;
                    adultInput.value = adultNum;
                } else if (adultNum > 18){
                    roomNum = 4;
                    roomInput.value = roomNum;
                } else if (adultNum > 12){
                    roomNum = 3;
                    roomInput.value = roomNum;
                } else if (adultNum > 6){
                    roomNum = 2;
                    roomInput.value = roomNum;
                }
            }
            if (targetLi.classList.contains("room")) {
                if(roomNum > 3) {
                    alert('한번에 예약 가능한 최대 객실 수는 4개 입니다.')
                } else {
                    roomNum++;
                }
                roomInput.value = roomNum;
            }
            if (targetLi.classList.contains("child")) {
                childNum++;
                childInput.value = childNum;
                if(childNum > (24 - adultNum)){
                    alert(`예약 가능한 최대 어린이 수는 ${24 - adultNum}명 입니다.`)
                    childNum = 24 - adultNum;
                    childInput.value = childNum;
                }
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
                }
            } 
            if (targetLi.classList.contains("room")) {
                if(roomNum > 1) {
                    roomNum--;
                }
                roomInput.value = roomNum;
            }
            if (targetLi.classList.contains("child")) {
                if(childNum <= 0) {
                    childInput.value = 0;
                } else {
                    childNum--;
                    childInput.value = childNum;
                }
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

    nextBtn.addEventListener("click", ()=>{
        if(confirm(`객실 ${roomNum}개, 성인 ${adultNum}명, 어린이 ${childNum}명으로 예약을 진행하시겠습니까?`)) {
            window.location.href='./sub6_reservation_step2.html'
        }
    })

})