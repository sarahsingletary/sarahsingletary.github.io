$(() => {
  $(window).scroll(() => {
     if($(window).scrollTop() >= 100) {
       $('nav').addClass('scrolled');
     }
    else {
      $('nav').removeClass('scrolled');
    }
  });
});


