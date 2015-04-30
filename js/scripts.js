$(document).ready(function(){
    
    setup();

    // Fixes issues with rendering in some mobile browsers
    
    setTimeout(function(){setup();}, 3000);

    /*$('.thumbnail').hover(
        function(){$('.thumbnail').not(this).stop().animate({opacity: 0.5});},
        function(){$('.thumbnail').not(this).stop().animate({opacity: 1});
    });*/


});

$(window).resize(setup);

// Need to call alignment function on window resize to account for blog cards

$(window).scroll(function () { 

    var height = $('#hero').height();
    var scrolled = $(window).scrollTop();
    var difference = height - scrolled;

    // Add fill to navbar when it hits bottom of hero

    if(difference > 60){

        $('#header_wrapper').css({'background-color' : "rgba(26,102,216,0)"});
        $('#header_wrapper').css({'border' : 'none'});

    }else {

        $('#header_wrapper').css({'background-color' : "rgba(26,102,216,1)"});
        $('#header_wrapper').css({'border-bottom' : '1px solid rgb(18,72,152)'});

    }

    // Parallax scrolling for hero

    $('#hero').css({'top' : (-scrolled/2)+"px"});

    // Stop any other animations affecting 
    
    $('#hero .content').stop();

    // Fade out hero content with scroll

    $('#hero .content').css({'opacity': 1-(1.5*scrolled/height)});

});

function setup() {

    var height = $('#hero').height();

    // Push the wrapper past the bottom of the hero

    $('#wrapper').css({'top': height+"px"});

    // Center hero content vertically

    var text_height = $('.content').height();
    var text_margin = (height - text_height) / 2;

    $('#hero .content').css({'margin-top': text_margin+"px"});
    $('#hero .content').css({'margin-bottom': text_margin+"px"});

    var scrolled = $(window).scrollTop();

    $('#hero .content').animate({opacity : 1-(1.5*scrolled/height)}, 2000);

    $('.thumbnail').each(function( index ){
        var height = $('.thumbnail').children('.screen').height();
        var text_height = $(this).children('.screen').children('.content').height();
        var text_margin = (height - text_height) / 2;
        $(this).children('.screen').children('.content').css({'margin-top': text_margin+"px"});
        $(this).children('.screen').children('.content').css({'margin-bottom': text_margin+"px"});
    })
};