$(document).ready(function() {
	$(function() {
		var placeholder =  
			$(".feedback-form__form-control_select").data("placeholder");

	    $(".feedback-form__form-control_select").select2({
	    	placeholder: placeholder,
	    	allowClear: true,
	    	minimumResultsForSearch: Infinity,
	    	theme: "default"
	    });

	    var controller = new ScrollMagic.Controller();

	    var tl = new TimelineMax()
	    	.set('.feedback-form-wrap', {autoAlpha: 0})
			.to('.feedback-form-wrap', 1, {autoAlpha: 1});

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

		scene($('.feedback-form-wrap').get(0), 1, '0', tl);
	});
   
});