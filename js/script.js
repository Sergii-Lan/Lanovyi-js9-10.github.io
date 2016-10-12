
$(function () {

    $('.basic').fancySelect();


    /** Submenu show-hide*/

    $('.menu li').hover(function () {
        $(this).children('ul').slideDown(400);
        $(this).children('.submenu a').css('color', 'green');
        $(this).children('.submenu li').css('background', 'yellow');
    }, function () {
        $(this).children('ul').slideUp(400);
        $(this).children('.submenu a').css('color', 'white');
    });

});






