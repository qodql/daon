document.addEventListener("DOMContentLoaded", () => {

    
    function gridAnimate(){

        const introElement = document.querySelector('.intro_grid_wrapper');
        const introRect = introElement.getBoundingClientRect();

        //const isVisible = introRect.top <= window.innerHeight && introRect.bottom >= 1200; 
        const isVisible = introRect.top <= 300; 

        //console.log(introRect.top);

        if(isVisible){
            introElement.classList.add('intro_fadein');
        }
        isVisible && document.removeEventListener('scroll',gridAnimate);
    };

    document.addEventListener("scroll", function(){
        gridAnimate();
    });

    









})