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