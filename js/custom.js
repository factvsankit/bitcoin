$(function(){

	// scrollbar js initialization
	$(".nano").nanoScroller();

	hH = $('.header').height();
  //alert(hH);


	// cloning menu items in mobile
	$mobileNav = $('<div id="mobileNav"></div>').prependTo('.offcanvas .nano .nano-content');
	$mobileNav.append($('.header .my-menu > ul').clone());

	// offcanvas toggle
	$('.toggle a').click(function(e){
		$('.offcanvas').addClass('show-offcanvas');
		$('body').addClass('pushed');
		$('.body-inactive').fadeIn(350);
		e.preventDefault();
	});

	// closing ups clicking on the screen
	$('.body-inactive, .coff a').click(function(e){
		$('.offcanvas').removeClass('show-offcanvas');
		$('.body-inactive').fadeOut(350);
		e.preventDefault();
	});

})

$(document).ready(function(){
	$('.hero').height($(window).height());
});

$(document).ready(function(){
// Submenu DropDown
$('#mobileNav li.hasDropdown > a').click(function(e){
	findSubMenuDisplay = $(this).parent().children('.dropdown').css('display');
	if(findSubMenuDisplay == 'block'){
		$(this).parent().children('.dropdown').slideUp(350);
	}
	else{
		$('.dropdown').slideUp(350);
		$(this).parent().children('.dropdown').slideDown(350);
	}
	e.preventDefault();
})
});

	// Sticky Navigation Initialization
	$("header").sticky({ topSpacing: 0 });
	$(window).scroll(function(){
		if ($(this).scrollTop() > 0) {
			$('header').addClass('white-header');
		} else {
			$('header').removeClass('white-header');
		}

	});

	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();   
	});