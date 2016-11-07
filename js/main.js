// ***** BURGER MENU ***** //

console.log('it works');

$(document).ready(function(){

	var navList = $('.menu' 'ul');
	
	$('.nav-icon').on('click', function(){
		navList.slideToggle();
	});
	$(window).on('resize', function(){

		if ( $(window).width() > 3000 ) {
			navList.show();
		} else {
			navList.hide();
		}
	});
});