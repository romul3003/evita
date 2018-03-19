$( document ).ready(function() {
	console.log('jQuery is ready!');	
});


$(document).ready(function(){

    var $slickElement = $('.oursalons__myslick');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.oursalons__item1').removeClass('oursalons__select'); 
        $('.oursalons__item2').removeClass('oursalons__select'); 
        $('.oursalons__item3').removeClass('oursalons__select'); 
        $('.oursalons__item'+i).addClass('oursalons__select');
        console.log(i);
        if(i==1) {
        	$('.oursalons__lines').css('margin-left', '0px');
        	console.log('Uiiii');
        	$('.oursalons__titlem').html('Evita Premium Ходынка');
        }
        if(i==2) {
        	$('.oursalons__lines').css('margin-left', '29px');
        	console.log('Uiiii');
        	$('.oursalons__titlem').html('Evita classic');
        }
        if(i==3) {
        	$('.oursalons__lines').css('margin-left', '56px');
        	console.log('Uiiii');
        	$('.oursalons__titlem').html('Evita studio речной');
        }
    });

    $slickElement.slick({
    	dots: true,
    	dotsClass: 'custom-dots',
		customPaging: function(slick,i) {
			var i=i+1;
			var titles=$('.oursalons__item'+i).data('title')
        	return '<a>' + titles + '</a>';
    	}
    });

    $('.slick-next.slick-arrow').html('');
    $('.slick-prev.slick-arrow').html('');
    
});
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




$(document).ready(function() {
	$(function() {

	    var controller = new ScrollMagic.Controller();

	    var tl = new TimelineMax()
	    	.set('.categories-wrap', {autoAlpha: 0})
			.to('.categories-wrap', 1.5, {autoAlpha: 1});

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

		scene($('.categories-wrap').get(0), 1, '0', tl);
	});
   
});

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








$(document).ready(function() {
	$(function() {

	    var controller = new ScrollMagic.Controller();

	    var tl = new TimelineMax()
	    	.set('.title-section', {autoAlpha: 0})
			.to('.title-section', 1.5, {autoAlpha: 1});

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

		scene($('.title-section'), 1, '0', tl);
	});
});





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

$(document).ready(function(){

    var $slickElement = $('.special-offers__myslick');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.special-offers__item1').removeClass('special-offers__select');
        $('.special-offers__item2').removeClass('special-offers__select');
        $('.special-offers__item3').removeClass('special-offers__select');
        $('.special-offers__item'+i).addClass('special-offers__select');
        console.log(i);
        if(i==1) {
            $('.special-offers__lines').css('margin-left', '0px');
            $('.special-offers__title').html('Внимание акция до февраля!  Час тайского массажа в подарок');
            $('.special-offers__left-num').html('0'+i);
        }
        if(i==2) {
            $('.special-offers__lines').css('margin-left', '29px');
            $('.special-offers__title').html('Evita Premium Ходынка');
            $('.special-offers__left-num').html('0'+i);
        }
        if(i==3) {
            $('.special-offers__lines').css('margin-left', '56px');
            $('.special-offers__title').html('Evita classic');
            $('.special-offers__left-num').html('0'+i);
        }
    });

    $slickElement.slick({
        dots: false,
        customPaging: function(slick,i) {
            var i=i+1;
            var titles=$('.special-offers__item'+i).data('title')
            return '<a>' + titles + '</a>';
        }
    });

    $('.slick-next.slick-arrow').html('');
    $('.slick-prev.slick-arrow').html('');

});