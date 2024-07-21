document.addEventListener("DOMContentLoaded", () => {





    
    function gridAnimate(elementClass, slideInClass){

        const introElement = document.querySelector('.intro_grid_wrapper');
        const introRect = introElement.getBoundingClientRect();


        //const isVisible = introRect.top <= window.innerHeight && introRect.bottom >= 1200; 
        const isVisible = introRect.top <= window.innerHeight; 
        if(isVisible){
            introElement.classList.add(slideInClass);
        }
    };

    document.addEventListener("scroll", function(){
        gridAnimate("intro_grid_wrapper", "intro_fadein");
    },{once : true});









})