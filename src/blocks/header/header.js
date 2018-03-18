$( document ).ready(function() {
	magicLine();
	toggleNav();
	toggleMainMenu();
	fixHeader();
	$(window).on('resize', function() {
		debouncedMagicLine();
		if (window.matchMedia("(min-width: 992px)").matches) {
			// remove styles left from toggleNav animation
			$('.header').removeClass('header-open__for-nav');
			$('.nav a').attr('style','');
		}
	});
});
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

function magicLine() {
	(function() {
		var nav = $('.nav');
		// works only on LG+ screens
		if (window.matchMedia("(max-width: 991px)").matches) {
			nav.find('#magicLine').remove();
			return;
		}
		// do not add more than 1 magiclines
		if (!nav.find('#magicLine').length) {
			nav.append('<div id="magicLine"></div>');
		}

		var triggers = nav.find('.nav__link');
		var activeLink = triggers.filter('.active');
		var $magicLine = nav.find('#magicLine');
		var magicLine = $magicLine.get(0);

		// set default position
		var magicLineWidth = activeLink.outerWidth();
		var magicLineLeft = activeLink.get(0).offsetLeft;

		$magicLine.css({
			'position': 'absolute',
			'backgroundColor': '#b19870',
			'height': 4,
			'width': magicLineWidth,
			'bottom': -1,
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

var debouncedMagicLine = debounce(function() {
	magicLine();
}, 250);

function toggleMainMenu() {
	(function() {
		var header = $('.header');
		var burger = header.find('.header__burger');
		var mainMenu = header.find('.header__main-menu');
		var closeBtn = mainMenu.find('.menu__close-btn');

		burger.click(openMainMenu);
		closeBtn.click(closeMainMenu);

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

function toggleNav() {
	(function() {
		var header = $('.header');
		var navTrigger = header.find('.nav__link_trigger');
		var navLinks = header.find('.nav a');

		navTrigger.click(function() {
			if (header.hasClass('header-open__for-nav')) {
				closeNav();
			} else {
				openNav();
			}
		})

		function openNav() {
			header.addClass('header-open__for-nav');
			TweenMax.staggerFromTo(navLinks, 1, {
				autoAlpha: 0,
				x: '0',
				ease: Power2.easeIn
			}, {
				autoAlpha: 1,
				x: '40',
				ease: Power2.easeOut,
			}, 0.2)
		}

		function closeNav() {
			TweenMax.staggerFromTo(navLinks, .6, {
				autoAlpha: 1,
				x: '40',
				ease: Power2.easeOut
			}, {
				autoAlpha: 0,
				x: '0',
				ease: Power2.easeIn,
				onComplete: function() {
					header.removeClass('header-open__for-nav')
				},
			}, 0.1)
		}
	})();
}


function fixHeader() {
	(function() {
		var $header = $('.header');
		var headerOffset = $header.innerHeight();
		$('body').css('padding-top', headerOffset);

		// fix header nav on scroll up
		var $headerNav = $header.find('.header__nav');
		var headerNav = $headerNav.get(0);
		var $navLinks = $headerNav.find('nav a');
		var headerNavOffset = $headerNav.innerHeight();
		var fixedHeaderNav = new Headroom(headerNav, {
			"offset": headerNavOffset,
			"tolerance": 10,
			"classes": {
				"pinned": "header__nav_pinned",
				"unpinned": "header__nav_unpinned"
			},
			onPin : function() {
				pinElem(this.elem);
			},
			onUnpin : function() {
				// close header nav if open
				if ($header.hasClass('header-open__for-nav')) {
					TweenMax.staggerFromTo($navLinks, .6, {
						autoAlpha: 1,
						x: '40',
						ease: Power2.easeOut
					}, {
						autoAlpha: 0,
						x: '0',
						ease: Power2.easeIn,
						onComplete: function() {
							$header.removeClass('header-open__for-nav');
						}
					}, 0.1);
					$navLinks.attr('style', '');
				}
				unPinElem(this.elem);
			},
			onTop : function() {
				TweenMax.set(this.elem, {y: '0%'});
			},
		});
			
		fixedHeaderNav.init();

		// fix header body on scroll down
		var headerBody = $header.find('.header__body').get(0);
		var fixedHeaderBody = new Headroom(headerBody, {
			"offset": headerNavOffset,
			"tolerance": 10,
			"classes": {
				"pinned": "header__body_unpinned",
				"unpinned": "header__body_pinned"
			},
			onUnpin : function() {
				pinElem(this.elem);
			},
			onPin : function() {
				unPinElem(this.elem);
			},
			onTop : function() {
				TweenMax.set(this.elem, {y: '0%'});
			},
		});
			
		fixedHeaderBody.init();

		function pinElem(elem) {
			TweenMax.fromTo(elem,1, {
				x: '0',
				y: '-100%',
				ease: Power2.easeIn
			}, {
				x: '0',
				y: '0%',
				ease: Power2.easeOut
			});
		}

		function unPinElem(elem) {
			TweenMax.fromTo(elem, 1, {
				x: '0',
				y: '0%',
				ease: Power2.easeIn
			}, {
				x: '0',
				y: '-100%',
				ease: Power2.easeOut
			});
		}
	})();
}







