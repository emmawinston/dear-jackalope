$(document).ready(function(){
	if ($('html').hasClass('no-touch')){

	$('.curtains>li').css('position', 'fixed');

   $('.curtains').curtain();
}

});


$(window).bind('resize', function(e)
{
  if ($('html').hasClass('no-touch')){

  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache */
  }, 200);

 }
   
});


