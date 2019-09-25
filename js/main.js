
var displayWidth = $(window).width();
console.log('display width is ' + displayWidth + ' px');

$(document).ready(function () {

    //bx init next

    $('#newsSlider').bxSlider({
        minSlides: 1,
        maxSlides: 3,
        nextText: '<img src="img/sl1.svg" alt="">',
        prevText: '<img src="img/sl1.svg" alt="">',
        controls: true,
        pause: 10000,
        slideMargin: 15,
        slideWidth: 370,
        infiniteLoop: true,
        moveSlides: 1,
        auto: true,
        pager: false
    });

    $('#videoSlider').bxSlider({
        controls: false,
        pager: true,
        slideMargin: 25
    });


    //angle arrow scripts next


    $('.whyChooseText').click(function () {

        $(this).find('.hiddenText').toggle('slow');

        if ($('img.roundAngle', this).hasClass('rotate90')) {

            $('img.roundAngle', this).removeClass('rotate90');

        } else {

            $('img.roundAngle', this).addClass('rotate90');
        }
    });

    //burger menu script next

    $('#burgerIcon').click(function () {

        $('#navigation').slideDown('slow');
        $('#burgerIcon').css('display', 'none');
        $('#burgerClose').css('display', 'flex');
        $('nav').css('background', 'rgba(0,0,0,0.9')
        $('body').css('overflow-y', 'hidden');

    });

    if (displayWidth < 468) {
        
        $('#burgerClose, .navItem').click(function () {

            $('#navigation').slideUp('slow');
            $('#burgerIcon').css('display', 'flex');
            $('#burgerClose').css('display', 'none');
            $('nav').css('background', 'transparent')
            $('body').css('overflow-y', 'scroll');

        });

    } 

});