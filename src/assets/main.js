$( document ).ready(function() {
	console.log('jQuery is ready!');
	$('.header__burger').click(function(e) {
		$('.header').toggleClass('header-open');
	})
	$('.nav__link').first().addClass('active');
	magicLine();
});

function magicLine() {
	(function() {
		var nav = $('.nav');
		$('.nav').append('<div id="magicLine"></div>');

		var triggers = $('.nav__link');
		var activeLink = triggers.filter('.active');
		var $magicLine = $('#magicLine');
		var magicLine = $magicLine.get(0);

		var magicLineWidth = activeLink.outerWidth();
		var magicLineLeft = activeLink.get(0).offsetLeft;

		$magicLine.css({
			'position': 'absolute',
			'backgroundColor': '#b19870',
			'height': 4,
			'width': magicLineWidth,
			'bottom': 0,
			'left': 0
		})

		TweenMax.set(magicLine, {
			x: magicLineLeft
		});

		function handleEnter(e) {
			var linkCoords = e.target.getBoundingClientRect();
			$magicLine.css({
				'width': linkCoords.width,
			});
			TweenMax.to(magicLine, .5, {
				x: linkCoords.left,
				ease: SlowMo.easeOut,
			})
		}

		function handleLeave() {
			$magicLine.css('width', magicLineWidth);
			TweenMax.to(magicLine, .5, {
				x: magicLineLeft,
				ease: SlowMo.easeOut,
			});
		}
		
		triggers.on('mouseenter', handleEnter);
		nav.on('mouseleave', handleLeave);

	})(jQuery);
}