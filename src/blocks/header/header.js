$( document ).ready(function() {
	magicLine();
	toggleMainMenu();
	fixHeader();
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

function toggleMainMenu() {
	(function() {
		var header = $('.header');
		var burger = header.find('.header__burger');
		var mainMenu = header.find('.header__main-menu');

		burger.click(function() {
			if (header.hasClass('header-open')) {
				closeMainMenu();
			} else {
				openMainMenu();
			}
		})

		function openMainMenu(e) {
			header.addClass('header-open');
			TweenMax.fromTo(mainMenu, .3, {
				autoAlpha: 0,
				x: '0',
				y: '-15%',
				ease: Power2.easeIn
			}, {
				autoAlpha: 1,
				x: '0',
				y: '0%',
				ease: Power2.easeOut
			})
		}

		function closeMainMenu() {
			TweenMax.fromTo(mainMenu, .3, {
				autoAlpha: 1,
				x: '0',
				y: '0%',
				ease: SlowMo.easeIn
			}, {
				autoAlpha: 0,
				x: '0',
				y: '-15%',
				ease: SlowMo.easeOut,
				onComplete: function() {
					header.removeClass('header-open');
				}
			})
		}

	})(jQuery);
}


function fixHeader() {
	(function() {
		var topHeader = $('.header__nav').get(0);
		var headroom = new Headroom(topHeader, {
		"offset": 205,
		"tolerance": 5,
		"classes": {
			"initial": "animated",
			"pinned": "slideDown",
			"unpinned": "slideUp"
		}
	});
		
	headroom.init();
	})();
}







