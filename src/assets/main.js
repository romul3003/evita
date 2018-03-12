$( document ).ready(function() {
	console.log('jQuery is ready!');
	$('.header__burger').click(function(e) {
		$('.header').toggleClass('header-open');
	})
});


// service page accordion
// TweenMax.staggerTo('.list > li', 1.5, {autoAlpha: 1, x: '+=70', ease: Power2.easeOut}, .1);

$(".accordion-btn").each(function(index, element){

    var $this = $(element);
    var isOpen = false;

    var openAnimation = new TimelineMax({paused:true})
        .from($this.find(".accordion-panel"), 1, {height:0})
        .staggerFromTo($this.find(".accordion-panel ul"), 0.5, {y: -50, autoAlpha: 0}, {y: 0, autoAlpha: 1}, .1);

    var closeAnimation = new TimelineMax({paused:true})
        .staggerTo($this.find(".accordion-panel ul"), 0.5, {y: -50, autoAlpha: 0}, .1)
        .to($this.find(".accordion-panel"), 1, {height:0});

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
});