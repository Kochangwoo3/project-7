// Change CSS with Scroll with jQuery
$(window).scroll(function(){
  if($(window).scrollTop() > 50) {
    $('header, .gototop').addClass('active')
  }
  else {
    $('header, .gototop').removeClass('active')
  }
})


