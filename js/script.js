$(document).ready(function () {
    $(".panther").owlCarousel(
        {
            items: 4,
            loop: true,
            margin: 60,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
        }
    );
}); 


$(document).ready(function(){
    $(".experts").owlCarousel({
        items:3,
        nav:true,
        margin:20,
        loop:true,
        dots:false,
        navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
    });
  });

  
$(document).ready(function () {
    $(".testimonals-slider").owlCarousel(
        {
            items:1,
            loop:true,
            nav:false,
            dots:false,
            navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
        }
    );
}); 

$(document).ready(function(){
    $(".blog").owlCarousel({
        items:2,
        margin:20,
        loop:true,
        dots:false,
        nav:true,
        navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
    });
  });

  $(document).ready(function(){
    $(".team-slider").owlCarousel({
        items:3,
        margin:20,
        loop:true,
        dots:false,
        nav:true,
        navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
    });
  });

  $(document).ready(function () {
    $(".testimonals-three-slider").owlCarousel(
        {
            items:2,
            loop:true,
            nav:true,
            dots:false,
            navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
        }
    );
}); 

$(document).ready(function(){
    $(".team-two-slider").owlCarousel({
        items:3,
        margin:20,
        loop:true,
        dots:false,
        nav:false,
    });
  });