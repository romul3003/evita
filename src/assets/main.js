$( document ).ready(function() {
	console.log('jQuery is ready!');	
});


$(document).ready(function(){

    var $slickElement = $('.oursalons__myslick');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.oursalons__item1').removeClass('oursalons__select'); 
        $('.oursalons__item2').removeClass('oursalons__select'); 
        $('.oursalons__item3').removeClass('oursalons__select'); 
        $('.oursalons__item'+i).addClass('oursalons__select');
        console.log(i);
        if(i==1) {
        	$('.oursalons__lines').css('margin-left', '0px');
        	console.log('Uiiii');
        	$('.oursalons__titlem').html('Evita Premium Ходынка');
        }
        if(i==2) {
        	$('.oursalons__lines').css('margin-left', '29px');
        	console.log('Uiiii');
        	$('.oursalons__titlem').html('Evita classic');
        }
        if(i==3) {
        	$('.oursalons__lines').css('margin-left', '56px');
        	console.log('Uiiii');
        	$('.oursalons__titlem').html('Evita studio речной');
        }
    });

    $slickElement.slick({
    	dots: true,
    	dotsClass: 'custom-dots',
		customPaging: function(slick,i) {
			var i=i+1;
			var titles=$('.oursalons__item'+i).data('title')
        	return '<a>' + titles + '</a>';
    	}
    });

    $('.slick-next.slick-arrow').html('');
    $('.slick-prev.slick-arrow').html('');
    
});