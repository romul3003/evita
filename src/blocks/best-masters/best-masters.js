$(document).ready(function() {
	$(function() {

	    var controller = new ScrollMagic.Controller();

	    var tl = new TimelineMax()
	    	.set('.best-masters-wrap', {autoAlpha: 0})
			.to('.best-masters-wrap', 1.5, {autoAlpha: 1});

		// create a scene
		var scene = function(trEl, trHook, duration, tween) {
			new ScrollMagic.Scene({
				duration: duration
			})
			.triggerElement(trEl)
			.triggerHook(trHook)
			.setTween(tween)
			.addTo(controller); // assign the scene to the controller
		};

		scene($('.best-masters-wrap').get(0), 1, '0', tl);
	});
});