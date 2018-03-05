$( document ).ready(function() {
	console.log('jQuery is ready!');
	$('.header__burger').click(function(e) {
		$('.header').toggleClass('header-open');
	})
});