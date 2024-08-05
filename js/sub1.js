document.addEventListener("DOMContentLoaded", () => {

    console.log("ss");

    const elGrid = document.querySelectorAll('.intro_grid_wrapper p');

    const gridAnimate = new IntersectionObserver(function(entry){
        entry.forEach((v)=>{
            if(v.isIntersecting){
                v.target.classList.add('intro_fadein');
            }
        })
    })

    elGrid.forEach((v)=>{
        gridAnimate.observe(v);
    })
    
    


    

















    //intro grid image scroll event
    /*
    function gridAnimate(){

        const introElement = document.querySelector('.intro_grid_wrapper');
        const introRect = introElement.getBoundingClientRect();



     
        const isVisible = introRect.top <= 300; 
    

     

        if(isVisible){
            introElement.classList.add('intro_fadein');
        }
        isVisible && document.removeEventListener('scroll',gridAnimate);
    };

    document.addEventListener("scroll", function(){
        gridAnimate();
    });

    //intro full bg scroll event
    function expandAnimate(elementClass, slideInClass) {
        
        const element2 = document.getElementsByClassName(elementClass)[0]; 
        const rect2 = element2.getBoundingClientRect(); 
        
        const isVisible2 = rect2.top <= window.innerHeight && rect2.top <= 350; 
    
            if(isVisible2) {
                element2.classList.add(slideInClass);
            }
    }
      
    document.addEventListener("scroll", function() {
        expandAnimate("intro_full_bg", "intro_expand");
    });



    */









})