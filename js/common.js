document.addEventListener("DOMContentLoaded", () => {

    fetch('./component/common.html')
    .then((data)=>{ return data.text()})
    .then((data)=>{ 

        // chatbot
        (function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.");}var ch=function(){ch.c(arguments);};ch.q=[];ch.c=function(args){ch.q.push(args);};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return;}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x);}}if(document.readyState==="complete"){l();}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l);}})();

        ChannelIO('boot', {
            "pluginKey": "dbf51d87-0b32-4469-b099-572fefb331ca"
        });

        // [↓] header, footer 제어
        const login = document.querySelector(".login_common")
        const footer = document.querySelector(".footer")
        if (!login) {
            let createHeader = document.createElement('header')
            let createFooter = document.createElement('footer')
            createHeader.className = 'header'
            createFooter.className = 'footer'
            createHeader.innerHTML = data.split('/nn')[0];
            createFooter.innerHTML = data.split('/nn')[1];
            document.body.prepend(createHeader)
            document.body.append(createFooter)
            
            const footerVideo = document.querySelector(".footer .video_wrap")
            const main = document.querySelector(".main")
            const footer = document.querySelector(".footer")
            
            if (main) {
                footer.classList.add("main")
            } else {
                footerVideo.remove();
            }
            
            // [↓] gnb
            const body = document.querySelector("body")
            const header = document.querySelector(".header")
            const navBg = document.querySelector(".nav_bg")
            const navLi = document.querySelectorAll(".nav .sub > li")
            const depth1 = document.querySelectorAll(".nav .sub > li > a:not(.solo)")
            const mbBtn = document.querySelector(".mb_menu")
            
            const handleMbBtnClick = () => {
                header.classList.toggle("on");
                body.classList.toggle("prevent_scroll");
            };
            
            const handleHeaderMouseOver = () => {
                // body.classList.add("prevent_scroll");
                header.classList.add("on");
            };
            
            const handleNavBgMouseOver = () => {
                header.classList.add("on");
            };
            
            const handleNavBgMouseLeave = () => {
                // body.classList.remove("prevent_scroll");
                header.classList.remove("on");
            };
            
            const handleGnb = () => {
                if (header) {
                    header.removeEventListener("mouseover", handleHeaderMouseOver);
                }
                if (navBg) {
                    navBg.removeEventListener("mouseover", handleNavBgMouseOver);
                    navBg.removeEventListener("mouseleave", handleNavBgMouseLeave);
                }
                if (mbBtn) {
                    mbBtn.removeEventListener("click", handleMbBtnClick);
                }
                if (body.offsetWidth > 1280) {
                    // pc
                    if (header) {
                        header.addEventListener("mouseover", handleHeaderMouseOver);
                    }
                    if (navBg) {
                        navBg.addEventListener("mouseover", handleNavBgMouseOver);
                        navBg.addEventListener("mouseleave", handleNavBgMouseLeave);
                    }
                } else {
                    // mb
                    depth1.forEach((depth) => {
                        depth.addEventListener("click", (e) => {
                            navLi.forEach((v) => v.classList.remove("on"));
                            e.preventDefault();
                            e.target.parentNode.classList.toggle("on");
                        });
                    });
                    if (mbBtn) {
                        mbBtn.addEventListener("click", handleMbBtnClick);
                    }
                }
            }
            
            handleGnb();
            window.addEventListener("resize", handleGnb);

            
        } else if (login) {
            footer.classList.add("login")
        }

        // [↓] chekcbox
        const chkAll = document.querySelector(".checkbox_wrap #all_chk")
        const chk = document.querySelectorAll(".checkbox_wrap input[name='chk']")
        chk.forEach((v,i)=>{
            chkAll.addEventListener("click", ()=>{
                if (chkAll.checked) {
                    chk[i].checked = true;
                } else {
                    chk[i].checked = false;
                }
            })
            chk[i].addEventListener("change", ()=>{
                const chkLength = chk.length;
                const chkCheckedLength = document.querySelectorAll(".checkbox_wrap input[name='chk']:checked").length
                if (chkCheckedLength === chkLength) {
                    chkAll.checked = true;
                } else {
                    chkAll.checked = false;
                }
            })
        })

        // [↓] tab
        const tabCont = document.querySelectorAll(".tab_cont > *")
        const tabLi = document.querySelectorAll(".tab li")
        tabLi.forEach((v,i)=>{
            v.addEventListener("click", ()=>{
                for(let i=0;i<tabLi.length;i++){
                    tabLi[i].classList.remove("on")
                    tabCont[i].classList.remove("on")
                }
                v.classList.add("on")
                tabCont[i].classList.add("on")
            })
        })
        
        // KAKAO MAP
        const mapContainer = document.getElementById('map'); // 지도를 표시할 div
        if (mapContainer){ 
            let mapOption = { 
                center: new kakao.maps.LatLng(37.83117086809958, 127.46889840605908), // 지도의 중심좌표
                level: 1 // 지도의 확대 레벨
            };
        
            var map = new kakao.maps.Map(mapContainer, mapOption);
        
            // 마커가 표시될 위치입니다 
            var markerPosition  = new kakao.maps.LatLng(37.83117086809958, 127.46889840605908); 
        
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                position: markerPosition
            });
        
            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);
        
            var iwContent = '<div style="padding:10px; margin-left:30px; font-weight:700; color:#111">다온펜션</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            iwPosition = new kakao.maps.LatLng(20, 100); //인포윈도우 표시 위치입니다
        
            // 인포윈도우를 생성합니다
            var infowindow = new kakao.maps.InfoWindow({
                position : iwPosition, 
                content : iwContent 
            });

            // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
            infowindow.open(map, marker); 
        }
    })
    
    // [↓] datepicker
    let today = new Date();
    let tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const day = document.querySelectorAll("ul li .date span")
    const weekDay = ['일', '월', '화', '수', '목', '금', '토'];
    const todayWeekDay = weekDay[today.getDay()];
    const tomorrowWeekDay = weekDay[tomorrow.getDay()];
    day.forEach((v,i)=>{
        day[0].innerText = `(${todayWeekDay})`;
        day[1].innerText = `(${tomorrowWeekDay})`;
    })
    let picker = tui.DatePicker.createRangePicker({
        language: 'ko',
        startpicker: {
            date: today,
            input: '#startpicker-input',
            container: '#startpicker-container'
        },
        endpicker: {
            date: tomorrow,
            input: '#endpicker-input',
            container: '#endpicker-container'
        },
        selectableRanges: [
            [today, new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())]
        ],
        format: 'YYYY. MM. dd',
    });

    function getDayOfWeek(date) {
        if (!date) { return '날짜 선택'; }
        var dayOfWeek = date.getDay();
        var daysOfWeek = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'];
        return daysOfWeek[dayOfWeek];
    }
    
    picker.getStartpicker().on('change', function() {
        var selectedDate = picker.getStartpicker().getDate();
        day[0].innerHTML = `${getDayOfWeek(selectedDate)}`;
    });
    
    picker.getEndpicker().on('change', function() {
        var selectedDate = picker.getEndpicker().getDate();
        day[1].innerHTML = `${getDayOfWeek(selectedDate)}`;
        if(day[1].innerText !== '날짜 선택') { 
            day[1].style.cssText = 'margin-left:0px;'
        } else {
            day[1].style.cssText = 'margin-left:-140px;'
        }
    });
})