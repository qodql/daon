document.addEventListener("DOMContentLoaded", () => {

/*

=====================================
common 수정 금지
=====================================

*/

    // chatbot
    (function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.");}var ch=function(){ch.c(arguments);};ch.q=[];ch.c=function(args){ch.q.push(args);};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return;}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x);}}if(document.readyState==="complete"){l();}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l);}})();
  
    ChannelIO('boot', {
      "pluginKey": "dbf51d87-0b32-4469-b099-572fefb331ca"
    });

    // [↓] gnb
    const header = document.querySelector(".header")
    const navBg = document.querySelector(".nav_bg")
    const logo = document.querySelector(".logo a img")

    header.addEventListener("mouseover", (e) => {
        e.preventDefault()
        header.classList.add("on");
        logo.setAttribute("src", "./img/logo.svg")
    })
    navBg.addEventListener("mouseover", (e) => {
        e.preventDefault()
        header.classList.add("on");
        logo.setAttribute("src", "./img/logo.svg")
    })
    navBg.addEventListener("mouseleave", (e) => {
        e.preventDefault()
        header.classList.remove("on");
        logo.setAttribute("src", "./img/logo_white.svg")
    })
})