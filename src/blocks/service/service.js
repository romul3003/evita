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
