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

	console.log('jQuery is ready!');
	$('.header__burger').click(function(e) {
		$('.header').toggleClass('header-open');
	})
});


// service page accordion
// $(".accordion-btn").each(function(index, element){
//
//     //this introduces child elements in sequence
//
//     var introAnimation = new TimelineLite({paused:true});
//     introAnimation.staggerFrom(".accordion-panel" + index + " ul", 0.5, {y:'-=50', opacity:0}, .1);
//
//     //this animation opens or closes the accordion-panel
//     element.openAnimation = TweenMax.from(".accordion-panel" + index, 1,{height:0, paused:true, onReverseComplete:resetIntro, onReverseCompleteScope:this});
//
//     element.introAnimation = introAnimation;
//     element.index = index;
//     if(element.index === 0) {
//         element.open = true;
//         this.openAnimation.play();
//         TweenLite.delayedCall(0.3, playIntro, null, this);
//     } else {
//         element.open = false;
//     }
//     console.log(element.openAnimation);
//     //this gets triggered by openAnimation's onReverseCompleteCallback so that things get reset when accordion-panel closes
//     function resetIntro() {
//         this.introAnimation.pause(0);
//     }
//
//
//     function playIntro() {
//         //if the introAnimation is partially revealed then keep playing it forward
//         // this condition is necessary if people click open / close very quickly.
//         if(this.introAnimation.progress() > 0){
//             this.introAnimation.play()
//         } else {
//             this.introAnimation.restart();
//         }
//     }
//
//     //figure out what to do on each click based on whether or not accordion-panel is open or closed
//
//     $(this).click(function(){
//
//         if(!this.open){
//             this.openAnimation.play();
//             //0.3 seconds after telling the open animation to play, call a function that will play the introAnimation
//             TweenLite.delayedCall(0.3, playIntro, null, this);
//             this.open = true;
//         } else {
//             //accordion-panel is open, lets close it
//             this.openAnimation.reverse();
//             this.open = false;
//
//         }
//     });
// });

$(".accordion-btn").each(function(index, element){

    var $this = $(element);
    var isOpen = false;
    var openAnimation = new TimelineMax({paused:true, onComplete: resetClose})
        .from($this.find(".accordion-panel"), 0.5, {height:0})
        .set($this, {className:"+=open"})
        .staggerFromTo($this.find(".accordion-panel ul"), 0.4, {y: -100, autoAlpha: 0}, {y: 0, autoAlpha: 1}, .1);



    var closeAnimation = new TimelineMax({paused:true, onComplete: resetOpen})
        .to($this.find(".accordion-panel ul"), 0.2, {y: -100, autoAlpha: 0}, .1)
        .set($this, {className:"-=open"})
        .to($this.find(".accordion-panel"), 0.5, {height:0});

    if(index === 0) {
        openAnimation.play();
        isOpen = true;
    } else {
        isOpen = false;
    }

    $this.click(function(){
        if(!isOpen){
            closeAnimation.pause();
            openAnimation.play();
            isOpen = true;
        } else {
            openAnimation.pause();
            closeAnimation.play();
            isOpen = false;
        }
    });

    function resetClose() {
        closeAnimation.pause(0);
    }
    function resetOpen() {
        openAnimation.pause(0);
    }
});