$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        margin:15,
        // loop:true,
        center:true,
        mouseDrag:true,
        nav:true,
        dotsEach:true,
        // autoplay:true,
        // autoplayTimeout:1200,
        // autoplayHoverPause:true,
        animateIn:'animate__slideInUp',
        animateOut:'animate__slideOutUp',
        rewind:true,
        resposive:{
            700:{
                items:2
            },
            1000:{
                items:1
            }
        }
    });
  });