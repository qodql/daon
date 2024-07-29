fetch('./component/common.html')
.then((data)=>{ return data.text()})
.then((data)=>{ 

    const login = document.querySelector(".login_common")
    if (!login) {
        let createHeader = document.createElement('header')
        let createFooter = document.createElement('footer')
        createHeader.className = 'header'
        createFooter.className = 'footer'
        createHeader.innerHTML = data.split('/nn')[0];
        createFooter.innerHTML = data.split('/nn')[1];
        document.body.prepend(createHeader)
        document.body.append(createFooter)

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
            header.removeEventListener("mouseover", handleHeaderMouseOver);
            navBg.removeEventListener("mouseover", handleNavBgMouseOver);
            navBg.removeEventListener("mouseleave", handleNavBgMouseLeave);
            mbBtn.removeEventListener("click", handleMbBtnClick);
        
            if (body.offsetWidth > 1280) {
                //pc
                header.addEventListener("mouseover", handleHeaderMouseOver);
                navBg.addEventListener("mouseover", handleNavBgMouseOver);
                navBg.addEventListener("mouseleave", handleNavBgMouseLeave);
            } else {
                //mb
                for (let i=0; i < depth1.length; i++){
                    depth1[i].addEventListener("click", (e) => {
                        navLi.forEach((v, i) => {
                            navLi[i].classList.remove("on")
                        })
                        e.preventDefault();
                        e.target.parentNode.classList.toggle("on")
                    })
                }
                mbBtn.addEventListener("click", handleMbBtnClick);
            }
        };
        
        handleGnb();
        window.addEventListener("resize", handleGnb);
        
    }
    // footer style
    const main = document.querySelector(".main")
    const footer = document.querySelector(".footer")
    const footerVideo = document.querySelector(".footer .video_wrap")
    const handleFooterClass = () => {
        if(main) {
            footer.classList.add("main")
        } else if (login) {
            footer.classList.add("login")
        } else {
            footerVideo.remove();
        }
    }
    handleFooterClass();


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
})