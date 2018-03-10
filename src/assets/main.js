$( document ).ready(function() {
	console.log('jQuery is ready!');	
});


$(document).ready(function(){

    var $status = $('.pagingInfo');
    var $slickElement = $('.oursalons__myslick');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
        console.log(i);
        console.log(currentSlide);
        $('.oursalons__item1').removeClass('oursalons__select'); 
        $('.oursalons__item2').removeClass('oursalons__select'); 
        $('.oursalons__item3').removeClass('oursalons__select'); 
        $('.oursalons__item'+i).addClass('oursalons__select'); 


    });

    $slickElement.slick();


	console.log('jQuery is ready!');
	$('.header__burger').click(function(e) {
		$('.header').toggleClass('header-open');
	})
});