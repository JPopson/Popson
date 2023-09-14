$(document).ready(function() {
    
    //HERO SLIDER
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:2,
        navText: ["<", ">"],
        smartSpeed: 1000,
        dots: false,
        responsive:{
            0: {
               nav: true,
               items: 1,
            },
            768:{
               nav: true, 
            },
        }   
    })
})