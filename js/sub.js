document.addEventListener("DOMContentLoaded", () => {

    function animateElement(elementId, slideInClass, slideOutClass) {
        const element = document.getElementById(elementId); // id로 해당 요소 찾기
        const rect = element.getBoundingClientRect(); // 요소 위치 구하기
        
        // 요소가 화면 안쪽으로 들어왔을 경우 isVisible로 인식
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0; 
      
        if (isVisible) {
          element.classList.add(slideInClass);
          element.classList.remove(slideOutClass);
        } else {
          element.classList.add(slideOutClass);
          element.classList.remove(slideInClass);
        }
      }
      
      window.addEventListener("scroll", function () {
        animateElement("element-1", "fadein", "fadeout");
      });




})
