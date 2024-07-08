document.addEventListener("DOMContentLoaded", () => {

  
    //grid image scroll event
    function animateElement(elementClass, slideInClass) {
        const element = document.getElementsByClassName(elementClass)[0]; // id로 해당 요소 찾기
        const rect = element.getBoundingClientRect(); // 요소 위치 구하기
        
        // 요소가 화면 안쪽으로 들어왔을 경우 isVisible로 인식
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 1200; 
      
        if (isVisible) {
          element.classList.add(slideInClass);
        } 
      }
      
      window.addEventListener("scroll", function () {
        animateElement("intro-grid-wrapper", "intro-fadein");
      });


      //full bg scroll event
      function animateElement2(elementid, slideInClass) {
        const element2 = document.getElementById(elementid); 
        const rect2 = element2.getBoundingClientRect(); 
        
        const isVisible2 = rect2.top <= window.innerHeight && rect2.bottom >= 1600; 
      
        if (isVisible2) {
          element2.classList.add(slideInClass);
        } 
      }
      
      window.addEventListener("scroll", function () {
        animateElement2("intro-full-bg", "intro-expand");
      });
    









})

