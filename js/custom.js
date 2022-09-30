$(function () {
  // set declaration 
  // set loading screen
   $(window).on("load",function(){
      $(".loading").fadeOut(2500).remove();
      });
  // set loading section animation 
    // -- main header 
     $(".main-header .images img").addClass("animate__animated animate__flip");
     $(".main-header .content").addClass("animate__animated animate__slideInDown");
     $(window).on("scroll",function(){
       // -- services-section
       if($(this).scrollTop() >= $(".services-sec").offset().top -300){
            $(".services-sec").css("visibility","visible");
            $(".services-sec .sec-header").addClass("animate__animated animate__fadeInDown");
            $(".services-sec .box").addClass("animate__animated animate__fadeInDown");
       }
       if($(this).scrollTop() >= $(".why-us-sec").offset().top -300){
            $(".why-us-sec").css("visibility","visible");
            $(".why-us-sec .sec-header").addClass("animate__animated animate__fadeInDown");
            $(".why-us-sec .image .phone").addClass("animate__animated animate__flip");
            $(".why-us-sec .content").addClass("animate__animated animate__fadeInRight");
       }
       if($(this).scrollTop() >= $(".goals-sec").offset().top -300){
            $(".goals-sec").css("visibility","visible");
            $(".goals-sec .sec-header").addClass("animate__animated animate__fadeInDown");
            $(".why-us-sec  .goal-box").addClass("animate__animated animate__lightSpeedInLeft");
       }
       if($(this).scrollTop() >= $(".portfolio-sec").offset().top -300){
            $(".portfolio-sec").css("visibility","visible");
            $(".portfolio-sec .sec-header").addClass("animate__animated animate__fadeInDown");
            $(".portfolio-sec  .row img").addClass("animate__animated animate__rollIn");
            $(".portfolio-sec  .sec-body >img").addClass("animate__animated animate__fadeInRight");
       }
       if($(this).scrollTop() >= $(".clients-feedback-sec").offset().top -300){
            $(".clients-feedback-sec").css("visibility","visible");
            $(".clients-feedback-sec .sec-header").addClass("animate__animated animate__fadeInDown");
            $(".clients-feedback-sec  .feedback").addClass("animate__animated animate__fadeIn");
       }
       if($(this).scrollTop() >= $(".contact-us").offset().top -300){
            $(".contact-us").css("visibility","visible");
            $(".contact-us").addClass("animate__animated animate__fadeIn");
       }
     });
  // set navbar for mobile 
  $(".navbar-toggler").on("click",function(){
     $(".navbar-collapse").animate({
      left : 0,
     },500);
  });
  $(".close-icon").on("click",function(){
     $(".navbar-collapse").animate({
      left : "-100%",
     },500);
  });
//   set hyper links section 
  $("#services-link").on("click",function(){
     $("html").animate({
       scrollTop : $(".services-sec").offset().top, 
      }
     ,1000);
  });
  $("#why-us-link").on("click",function(){
     $("html").animate({
       scrollTop : $(".why-us-sec").offset().top, 
      }
     ,1000);
  });
  $("#goals-link").on("click",function(){
     $("html").animate({
       scrollTop : $(".goals-sec").offset().top, 
      }
     ,1000);
  });
  $("#portfolio-link").on("click",function(){
     $("html").animate({
       scrollTop : $(".portfolio-sec").offset().top, 
      }
     ,1000);
  });
  $("#client-feedback-link").on("click",function(){
     $("html").animate({
       scrollTop : $(".clients-feedback-sec").offset().top, 
      }
     ,1000);
  });
  $("#contact-us-link").on("click",function(){
     $("html").animate({
       scrollTop : $(".contact-us").offset().top, 
      }
     ,1000);
  });
});