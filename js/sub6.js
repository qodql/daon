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

    let roomNum=1, adultNum=2, childNum=0;
    plusBtn.forEach((v,i)=>{
        plusBtn[i].addEventListener("click", (e) => {
            let targetLi = e.target.parentElement.parentElement.parentElement;
            if (targetLi.classList.contains("room")) {
                if(roomNum >= 4) {
                    alert('동시예약 가능한 최대 객실 수는 4개 입니다.')
                } else {
                    roomNum++;
                    roomInput.value = roomNum;
                }
            } else if (targetLi.classList.contains("adult")) {
                adultNum++;
                adultInput.value = adultNum;
                if (adultInput.value > 24){
                    adultInput.value = 24;
                    alert('최대 예약 인원 수를 초과하였습니다.')
                } else if (adultInput.value >= 19){
                    if(roomInput.value < 4) {
                        roomInput.value = 4;
                    }
                } else if (adultInput.value >= 13) {
                    if(roomInput.value < 3) {
                        roomInput.value = 3;
                    }
                } else if (adultInput.value >= 7){
                    if(roomInput.value < 2) {
                        roomInput.value = 2;
                    }
                }
            } else if (targetLi.classList.contains("child")) {
                childNum++;
                childInput.value = childNum;
            }
        })
    })

    minusBtn.forEach((v,i)=>{
        minusBtn[i].addEventListener("click", (e) => {
            let targetLi = e.target.parentElement.parentElement.parentElement;
            if (targetLi.classList.contains("room")) {
                if(roomNum <= 1) {
                    roomInput.value = 1;
                } else {
                    roomNum--;
                    roomInput.value = roomNum;
                }
            } else if (targetLi.classList.contains("adult")) {
                if(adultNum <= 2) {
                    adultInput.value = 2;
                } else {
                    adultNum--;
                    adultInput.value = adultNum;
                }
            } else if (targetLi.classList.contains("child")) {
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


})