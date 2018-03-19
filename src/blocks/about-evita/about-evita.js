$(document).ready(function() {
	$(function() {

		// if (window.matchMedia("(min-width: 992px)").matches) {
		// 	TweenMax.to(".about-evita-wrap__chisel", 1.5, {width: "85%"});
		// } else {
		// 	TweenMax.to(".about-evita-wrap__chisel", 1.5, {width: "70%"});
		// }

		// TweenMax.to(".about-evita__img-wrap_left", 1.5, {left: "0"});
		// TweenMax.to(".about-evita__img-wrap_right", 1.5, {right: "0"});

		var controller = new ScrollMagic.Controller();

		// var scene1 = new ScrollMagic.Scene({
			// start scene after scrolling for 100px
			// offset: 100, 
			// triggerElement: '.about-evita-wrap',

			// pin the element for 400px of scrolling
			// duration: 400 
		// });

		// controller.addScene({
		// 	scene1
		// });
		var tl;

		if (window.matchMedia("(min-width: 992px)").matches) {

			tl = new TimelineMax()
				.set('.about-evita-wrap', {autoAlpha: 0})
				.to('.about-evita-wrap', 1, {autoAlpha: 1})
				.to('.about-evita-wrap__chisel', 1.5, {width: '85%'})
				.to('.about-evita__img-wrap_left', 1.5, {left: '0'}, 1)
				.to('.about-evita__img-wrap_right', 1.5, {right: '0'}, 1);
				
		} else {
			tl = new TimelineMax()
				.set('.about-evita-wrap', {autoAlpha: 0})
				.to('.about-evita-wrap', 1, {autoAlpha: 1})
				.to('.about-evita-wrap__chisel', 1.5, {width: '70%'})
				.to('.about-evita__img-wrap_left', 1.5, {left: '0'}, 1)
				.to('.about-evita__img-wrap_right', 1.5, {right: '0'}, 1);
		}

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

		scene($('.about-evita-wrap').get(0), 1, '0', tl);

	});

});