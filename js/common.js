document.addEventListener("DOMContentLoaded", () => {

    // chatbot
    (function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.");}var ch=function(){ch.c(arguments);};ch.q=[];ch.c=function(args){ch.q.push(args);};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return;}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x);}}if(document.readyState==="complete"){l();}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l);}})();
  
    ChannelIO('boot', {
      "pluginKey": "dbf51d87-0b32-4469-b099-572fefb331ca"
    });

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
        body.classList.add("prevent_scroll");
        header.classList.add("on");
    };

    const handleNavBgMouseOver = () => {
        header.classList.add("on");
    };

    const handleNavBgMouseLeave = () => {
        header.classList.remove("on");
        body.classList.remove("prevent_scroll");
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

    // [↓] chekcbox
    const chkAll = document.querySelector(".checkbox_wrap #all_chk")
    const chk = document.querySelectorAll(".checkbox_wrap input[name='chk']")
    if (chkAll) {
        chkAll.addEventListener("click", ()=>{
            chk.forEach((v,i)=>{
                chk[i].checked = true;
            })
        })
    }
})