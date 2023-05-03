$(document).ready(function () {
     $("#slider1").owlCarousel({
          items:1,
          margin:20,
          loop:true,
          nav:true,
          navText:['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>']
     });

     $('#slider2').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          center:true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:3
              }
          }
      })
});