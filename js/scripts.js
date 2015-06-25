$(document).ready(function(){
    
    setup();

    setTimeout(function(){setup();}, 1000);

});

$(window).resize(setup);

$(window).scroll(function () { 

    var width = $(window).width();

    if(width > 480){

        var height = $('#hero').height();
        var scrolled = $(window).scrollTop();
        var difference = height - scrolled;

        $('#hero').css({'top' : 70 - (scrolled/2)+"px"});
        $('#hero .content').stop().css({'opacity': 1-(1.5*scrolled/height)});
    
    }

});

$('.hamburger').click(function() {

    $('#menu').fadeToggle(10, function() {

        $('.hamburger').hide();
        $('.exit').show();

    });

});

$('.exit').click(function() {

    $('#menu').fadeToggle(10, function() {
    
        $('.exit').hide();
        $('.hamburger').show();
    
    });

});

function setup() {

    $('.hamburger').show();
    $('.exit').hide().css({'visibility' : 'visible'});
    $('#menu').hide().css({'visibility' : 'visible'});
    $('#menu').css({'height' : $(window).height() - 70 + "px"});

    if($(window).height() < 600){

        $('#hero').css({'height' : $(window).height() - 70 + "px"});
    
    }else{
    
        $('#hero').css({'height' : 500 + "px"});
    
    };

    if($(window).width() < 480){
    
        $('#hero').css({'height' : $(window).height() - 70 + "px"});
        $('#hero').css({'top' : 70 +"px"});
        $('#hero .content').css({'opacity': 1});
    
    }else{
    
        $('#hero').css({'height' : 500 + "px"});

        var height = $('#hero').height();
        var scrolled = $(window).scrollTop();
        var difference = height - scrolled;

        $('#hero').css({'top' : 70 - (scrolled/2)+"px"});
        $('#hero .content').stop().css({'opacity': 1-(1.5*scrolled/height)});
    
    };

    $('#hero.full').css({'height' : $(window).height() - 140 + "px"});

    var height = $('#hero').height();

    $('#wrapper').css({'top': 70 + height+"px"});

    var text_height = $('.content').height();
    var text_margin = (height - text_height) / 2;

    $('#hero .content').css({'margin-top': text_margin +"px"});
    $('#hero .content').css({'margin-bottom': text_margin +"px"});

};