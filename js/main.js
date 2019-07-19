$(document).on('ready', function() {
     
  $(".center").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1.7,
    slidesToScroll: 1
  });
  $(".variable").slick({
    dots: true,
    infinite: true,
    variableWidth: true
  });
  $(".lazy").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true
  });
});

$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
      $('.header-menu').addClass('fixed');
  } else {
      $('.header-menu').removeClass('fixed');
  }
});

$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
      $('.header-logo').addClass('fix');
  } else {
      $('.header-logo').removeClass('fix');
  }
});

$('.mini-menu-button').click(function() {
  $('.mini-menu-mobile').fadeIn(500);

});
$('.mini-menu-mobile-close').click(function() {
  $('.mini-menu-mobile').fadeOut(200);
});

$('.mini-menu-search').click(function() {
  $('.header-field').fadeIn(500);

});
$('.header-field').click(function() {
  
});


