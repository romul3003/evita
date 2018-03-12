$( document ).ready(function() {
	console.log('jQuery is ready!');
	$('.header__burger').click(function(e) {
		$('.header').toggleClass('header-open');
	})
});


// service page accordion
// TweenMax.staggerTo('.list > li', 1.5, {autoAlpha: 1, x: '+=70', ease: Power2.easeOut}, .1);

$(".accordion-btn").each(function(index, element){

    //this introduces child elements in sequence

    var introAnimation = new TimelineLite({paused:true});
    introAnimation.staggerFrom(".accordion-panel" + index + " ul", 0.5, {y:'-=50', opacity:0}, .1);

    //this animation opens or closes the accordion-panel
    element.openAnimation = TweenMax.from(".accordion-panel" + index, 1,{height:0, paused:true, onReverseComplete:resetIntro, onReverseCompleteScope:this});

    element.introAnimation = introAnimation;
    element.index = index;
    if(element.index === 0) {
        element.open = true;
        this.openAnimation.play();
        TweenLite.delayedCall(0.3, playIntro, null, this);
    } else {
        element.open = false;
    }
    console.log(element.openAnimation);
    //this gets triggered by openAnimation's onReverseCompleteCallback so that things get reset when accordion-panel closes
    function resetIntro() {
        this.introAnimation.pause(0);
    }


    function playIntro() {
        //if the introAnimation is partially revealed then keep playing it forward
        // this condition is necessary if people click open / close very quickly.
        if(this.introAnimation.progress() > 0){
            this.introAnimaiton.play()
        } else {
            this.introAnimation.restart();
        }
    }

    //figure out what to do on each click based on whether or not accordion-panel is open or closed

    $(this).click(function(){

        if(!this.open){
            this.openAnimation.play();
            //0.3 seconds after telling the open animation to play, call a function that will play the introAnimation
            TweenLite.delayedCall(0.3, playIntro, null, this);
            this.open = true;
            console.log('open' + this)
        } else {
            //accordion-panel is open, lets close it
            this.openAnimation.reverse();
            this.open = false;
            console.log('close' + this)

        }
    });
});