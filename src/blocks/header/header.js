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
		var $header = $('.header');
		var headerOffset = $header.innerHeight();
		$('body').css('padding-top', headerOffset);

		var $headerNav = $header.find('.header__nav');
		var headerNav = $headerNav.get(0);
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
				unPinElem(this.elem);
			},
			onTop : function() {
				TweenMax.set(this.elem, {y: '0%'});
			},
		});
			
		fixedHeaderNav.init();

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







