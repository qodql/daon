document.addEventListener("DOMContentLoaded", () => {

    //Intro Grid Image Scroll Event
    const introGrid = document.querySelectorAll('.intro_grid_wrapper p');

    const gridAnimate = new IntersectionObserver(function(entry){
        entry.forEach((v,i)=>{
            if(v.isIntersecting){
                setTimeout(()=>{
                    v.target.classList.add('intro_fadein');
                },50*i)
            }
        })
    });

    introGrid.forEach((v)=>{
        gridAnimate.observe(v);
    })

    //Intro Full Background Scroll Event
    const introFull = document.querySelectorAll('.intro_full_bg');

    const expandAnimate = new IntersectionObserver(function(entry){
        entry.forEach((v)=>{
            if(v.isIntersecting){
                v.target.classList.add('intro_expand');
            }
        })
    })

    introFull.forEach((v)=>{
        expandAnimate.observe(v);
    })

})