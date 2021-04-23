$(function () {

	//active menu
	$('.header_part .navbar-nav .nav-item .nav-link').click(function () {
		$('.header_part .navbar-nav .nav-item .nav-link').removeClass('active');
		$(this).addClass('active');
	});


	// menu fix on scroll

	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 100) {
			$('.header_part').addClass('animated slideInDown fix');
			$('.header_part').removeClass('ml-auto');


		} else {

			$('.header_part').removeClass('animated slideInDown fix');


		}
	});


	//    type_js

	var typed = new Typed('.type', {
		strings: ['web designer', ' web developer'],
		loop: true,
		startDelay: 300,
		backDelay: 1500,
		typeSpeed: 105,
		backSpeed: 85,
		cursorChar: '|',
	});




	//isotop 

	$('.protfolio_grid').isotope({
		itemSelector: '.protfolio_item',
		layoutMode: 'fitRows',
	});

	$('.profolio_menu ul li').click(function () {
		$('.profolio_menu ul li').removeClass('active');
		$(this).addClass('active');


		var selector = $(this).attr('data-filter');
		$('.protfolio_grid').isotope({
			filter: selector
		});

		return false;
	});



	new WOW().init();
});


function openNav() {
	document.getElementById('slide_nav').style.width = "100%";
}

function closeNav() {
	document.getElementById('slide_nav').style.width = "0";
}
