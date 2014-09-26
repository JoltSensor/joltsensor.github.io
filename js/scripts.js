$(document).ready(function(){
    align();
    cards();
    // Fixes issues with rendering in some mobile browsers
	setTimeout(function(){align();}, 3000);
});

$(window).resize(function() {
    align();
    cards();
});

$('img.arrow').click(function(){
    var window_height = $(window).height();
    // Scroll just past the last breakpoint for altering the navbar
    $('html, body').animate({scrollTop : window_height - 40},800);
});

$('#learn_more').click(function(){
    var window_height = $(window).height();
    // Scroll just past the last breakpoint for altering the navbar
    $('html, body').animate({scrollTop : window_height - 40},800);
});

$(window).scroll(function () {
    var window_height = $(window).height();
    var scrolled = $(window).scrollTop();
    var difference = window_height - scrolled;
    // Keep nav bar same size until hero is nearly obscured by wrapper scrolling up
    if(difference >= 80){
        $('#header').css({'padding-top' : 15+"px"});
        $('#header').css({'padding-bottom' : 15+"px"});
        $('#header_wrapper').css({'background-color' : "transparent"});
    }
    // As hero is almost obscured, scale nav bar down with diminishing gap
    else if(difference < 80 && difference >= 50){
        $('#header').css({'padding-top' : (difference-50)/2+"px"});
        $('#header').css({'padding-bottom' : (difference-50)/2+"px"});
        $('#header_wrapper').css({'background-color' : "transparent"});
    }
    // Once gap has been closed, re-color the nav bar
    else{
        $('#header').css({'padding-top' : 0+"px"});
        $('#header').css({'padding-bottom' : 0+"px"});
        $('#header_wrapper').css({'background-color' : "rgba(63,124,215,1)"});
    }
    // Parallax scrolling for hero
    $('.hero').css({'top' : (-scrolled/2)+"px"});
    // Fade out words on hero with parallax
    $('.content').css({'opacity': 1-(1.5*scrolled/window_height)});
});

function cards() {
    // Keeps picture cards square while re-sizing
    $('.picture').each (function () {
    	$(this).css({'height': $(this).width()+"px"});
	});
}

function align() {
    var window_height = $(window).height();
    // Push the wrapper past the bottom of the screen
    $('#wrapper').css({'top': window_height+"px"});
    // Fill the screen with the hero div
    $('.hero').css({'height': window_height+"px"});
    // Center hero text block on hero
    var text_height = $('.content').height();
    var text_margin = (window_height - text_height) / 2;
    $('.content').css({'margin-top': text_margin+"px"});
    $('.content').css({'margin-bottom': text_margin+"px"});
    // Align the scrolldown arrow to the bottom of the hero
    $('img.arrow').css({'bottom': 40 +"px"});
    // Bounce the scrolldown arrow to draw attention to it
    setTimeout(function(){
        $("img.arrow").animate({bottom: 45 +"px"}, 500);
        $("img.arrow").animate({bottom: 40 +"px"}, 500);
    }, 1000);
}