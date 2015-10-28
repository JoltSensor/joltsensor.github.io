$(document).ready(function(){
    
    setup();

    setTimeout(function(){setup();}, 1000);

});

$(window).resize(setup);

$("#learnmore").click(function() {
    $('html, body').animate({
        scrollTop: $("#more").offset().top
    }, 1000);
});

$('.hamburger').click(function() {

    $('.hamburger').hide();
    $('.exit').show();

    var width = $(window).width();
    var space = ((width-1000)/2)-20;

    if (space > 280) {

        $('#menu').animate({right : 0},200);

    } else if (space >= 0) {

        $('#menu').animate({right : 0},200);
        $('#wrapper').animate({left : space-280},200);

    } else {

        $('#menu').animate({right : 0},200);
        $('#wrapper').animate({left : -280},200);

    }

});

$('.exit').click(function() {

    menu_hide(200);

});


function menu_hide(delay) {

    $('.exit').hide();
    $('.hamburger').show();

    $('#menu').animate({right : -280},delay);
    $('#header').animate({left : 0},delay);
    $('#wrapper').animate({left : 0},delay);

};

function setup() {

    $('.hamburger').show();
    $('.exit').hide().css({'visibility' : 'visible'});

    if($(window).height() < 600 || $(window).width() < 480){

        $('#hero.full').css({'height' : $(window).height() + "px"});
    
    }else{
    
        $('#hero.full').css({'height' : $(window).height() - ($('.coverage').height() + 60) + "px"});

    }

    var height = $('#hero').height();
    var text_height = $('.content').height();
    var text_margin = (height - text_height) / 2;

    $('#hero .content').css({'opacity': 1});
    $('#hero .content').css({'margin-top': 20 + text_margin +"px"});

    $('.section.hero').each(function() {
    
        var height1 = $(this).height();
        var height2 = $(this).find('.screen > .content').height();
        var margin = ( height1 - height2 )/2;

        $(this).find('.screen > .content').css({'padding-top' : margin});

    });

    $('.blog .screen').each(function() {
    
        var height1 = $(this).height();
        var height2 = $(this).find('.content').height();
        var margin = ( height1 - height2 )/2;

        $(this).find('.content').css({'padding-top' : margin});

    });

};