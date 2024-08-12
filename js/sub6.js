document.addEventListener("DOMContentLoaded", () => {

    fetch("../data/sub2.json")
    .then((data)=> {return data.json()})
    .then((data)=>{

        // *****************[step1]******************* //
        const step1 = document.querySelector(".step1")
        const roomInput = document.querySelector(".date_person .room input")
        const adultInput = document.querySelector(".date_person .adult input")
        const childInput = document.querySelector(".date_person .child input")
        const plusBtn = document.querySelectorAll(".date_person .btn_wrap .plus")
        const minusBtn = document.querySelectorAll(".date_person .btn_wrap .minus")
        const nextBtn = document.querySelector(".next_btn")
        let roomNum=1, adultNum=2, childNum=0;
    
        if(step1){
            // [↓] step1 객실 수, 성인 수, 어린이 수 증감
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
                        if(childNum <= 0) {
                            childInput.value = 0;
                        } else {
                            childNum--;
                            childInput.value = childNum;
                            if (childNum < 12){
                                plusBtn[i].style.cssText = 'opacity:1;'
                                v.style.cssText = 'opacity: 1;'
                            }
                            if (childNum == 0){
                                v.style.cssText = 'opacity: 0.3;'
                            }
                        }
                    }
                })
            })

            // [↓] step1 room list 뿌리기
            const loveRoomList = document.querySelector(".room_list_wrap.love")
            const onlyRoomList = document.querySelector(".room_list_wrap.only")
            
            let listWrite = (page) => {
                let type, listName;
                if (page === data.love) {
                    type = "love";
                    listName = loveRoomList;
                } else if (page === data.only) {
                    type = "only";
                    listName = onlyRoomList;
                }
                page.forEach((v,i)=>{
                    listName.innerHTML += `
                    <li>
                        <div class="room_img">
                            <img src="./img/img_sub2_room_${type + v.room_num+"_01.jpg"}" alt="${type} ${v.room_sqft}평">
                        </div>
                        <div class="room_info">
                            <p class="room_name">
                                <span class="tag ${type}">${type} YOU</span>
                                ${v.room_num}호
                                <span class="room_price">${v.room_price}원</span>
                            </p>
                            <ul>
                                <li>
                                    <p><span>객실크기</span>${v.room_sqft}평 (약 ${v.room_sqft * 3}㎡)</p>
                                </li>
                                <li>
                                    <p><span>객실구성</span>${v.room_personnel}</p>
                                </li>
                                <li>
                                    <p><span>최대인원</span>${v.room_composition}</p>
                                </li>
                                <li>
                                    <p><span>추가요금</span>${v.room_caution}</p>
                                </li>
                            </ul>
                            <div class="room_btn_wrap">
                                <button type="button" class="room_select_btn">선택</button>
                            </div>
                        </div>
                    </li>
                    `
                })
            }
            
            listWrite(data.love)
            listWrite(data.only)
        
            // [↓] step1 객실 선택
            const roomBtn = document.querySelectorAll(".room_select_btn");
            let roomBtnSelected = '';
        
            roomBtn.forEach((v,i)=>{
                v.addEventListener("click", (e)=>{
                    e.target.classList.toggle("selected");
                    roomBtnSelected = document.querySelectorAll(".room_select_btn.selected").length;
                    if(roomBtnSelected > roomNum) {
                        e.target.classList.remove("selected");
                        alert('선택 가능한 객실 수를 초과하였습니다.');
                    }
                })
            })
        
            let profile = [{"adultNum":adultNum},{"roomNum":roomNum},{"childNum":childNum}]
            profile.forEach((v,i) => {
                console.log(v);
                // 240813 lhj 여기서부터 하면 됨
                // document.cookie = `${v}=${v.value};`;
            })
            // [↓] step1 정보 입력 버튼 (다음페이지로 넘어가는 버튼)
            nextBtn.addEventListener("click", ()=>{
                if (!roomBtnSelected || roomBtnSelected < roomNum) {
                    alert(`최소 ${roomNum}개의 객실을 선택해주세요.`);
                } else if(roomBtnSelected === roomNum){

                    // document.cookie = `adultNum=${adultNum};`
                    // document.cookie = `roomNum=${roomNum};`
                    // document.cookie = `childNum=${childNum};`
                    window.location.href='./sub6_reservation_step2.html'
                }
            })
        }
    
        // *****************[step2]******************* //
        // [↓] step2 card input
        const step2 = document.querySelector(".step2")
        const card = document.querySelector(".card")
        const cardAllInput = document.querySelectorAll(".input_list li input")
        const cardCvcInput = document.querySelector(".input_list .card_cvc")
        const cardNumInput = document.querySelector(".input_list .card_num")
        const cardNum = document.querySelector(".card_data .num")
        const cardFirstNameInput = document.querySelector(".input_list .card_name.first")
        const cardLastNameInput = document.querySelector(".input_list .card_name.last")
        const cardFirstName = document.querySelector(".card_data .name.first")
        const cardLastName = document.querySelector(".card_data .name.last")
        const cardYearInput = document.querySelector(".input_list .card_date.year")
        const cardMonthInput = document.querySelector(".input_list .card_date.month")
        const cardYear = document.querySelector(".card_data .date.year")
        const cardMonth = document.querySelector(".card_data .date.month")
        const cardCvc = document.querySelector(".card_back .cvc_num")
            
        if (step2) {
            cardAllInput.forEach((v,i)=>{
                if(v.classList.contains("card_cvc")){
                    cardCvcInput.addEventListener("focus", ()=>{
                        card.classList.add("on")
                    }) 
                } else {
                    v.addEventListener("focus", ()=>{
                        card.classList.remove("on")
                    })
                    cardMonthInput.addEventListener("click", ()=>{
                        card.classList.remove("on")
                    })
                }
            })
            cardNumInput.addEventListener("input",(e)=>{
                let input = e.target;
                let value = input.value;
                
                // 숫자만 남기고 문자를 제거
                let numericValue = value.replace(/\D/g, '');
            
                let formattedValue = '';
                for (let i = 0; i < numericValue.length; i++) {
                    if (i > 0 && i % 4 === 0) {
                        formattedValue += ' ';
                    }
                    formattedValue += numericValue[i];
                }
            
                input.value = formattedValue;
                cardNum.innerHTML = formattedValue;
            })
            cardFirstNameInput.addEventListener("input", (e)=>{
                let input = e.target;
                let value = input.value;
                
                // 문자만 남기고 숫자 제거
                let stringicValue = value.replace(/[^a-zA-Z]/g, '');
                
                let formattedValue = '';
                for (let i = 0; i < stringicValue.length; i++) {
                    formattedValue += stringicValue[i];
                }
            
                input.value = formattedValue;
                cardFirstName.innerHTML = formattedValue;
            })
            cardLastNameInput.addEventListener("input", (e)=>{
                let input = e.target;
                let value = input.value;
                
                // 문자만 남기고 숫자 제거
                let stringicValue = value.replace(/[^a-zA-Z]/g, '');
                
                let formattedValue = '';
                for (let i = 0; i < stringicValue.length; i++) {
                    formattedValue += stringicValue[i];
                }
            
                input.value = formattedValue;
                cardLastName.innerHTML = formattedValue;
            })
            cardYearInput.addEventListener("input", (e)=>{
                let input = e.target;
                let value = input.value;
                
                // 숫자만 남기고 문자를 제거
                let numericValue = value.replace(/\D/g, '');
                
                let formattedValue = '';
                for (let i = 0; i < numericValue.length; i++) {
                    formattedValue += numericValue[i];
                }
            
                input.value = formattedValue;
                cardYear.innerHTML = formattedValue;
            })
            cardMonthInput.addEventListener("input", (e)=>{
                cardMonth.innerText = e.target.value;
            })
            cardCvcInput.addEventListener("input", (e)=>{
                let input = e.target;
                let value = input.value;
                
                // 숫자만 남기고 문자를 제거
                let numericValue = value.replace(/\D/g, '');
                
                let formattedValue = '';
                for (let i = 0; i < numericValue.length; i++) {
                    formattedValue += numericValue[i];
                }
            
                input.value = formattedValue;
                cardCvc.innerHTML = formattedValue;
            })
            
            const cookie = document.cookie.split(';');
            for(let i=0;i <cookie.length; i++) {
                const getDataName = cookie[i].split('=')[0]
                const getData = cookie[i].split('=')[1]
                // 객실 수
                if (getDataName.includes('roomNum')) {
                    room_data[0].innerHTML = getData;
                    room_data[1].innerHTML = getData;
                }
                // 성인, 어린이 수
                if (getDataName.includes('adultNum')) {
                    adult_num[0].innerHTML = getData;
                    adult_num[1].innerHTML = getData;
                } else if (getDataName.includes('childNum')) {
                    child_num[0].innerHTML = getData;
                    child_num[1].innerHTML = getData;
                }0
            }
        }
    })

})