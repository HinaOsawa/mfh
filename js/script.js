$('.burger-btn').on('click',function(){
  $('.burger-btn').toggleClass('close');
  $('.nav-wrap').slideToggle(300);
});

$(function(){
  var pagetop = $('#page-top');
  pagetop.hide();

  $(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.on(click, function(){
    $('body,html').animate({scrollTop:0},500);
    return false;
  });
});

AOS.init();