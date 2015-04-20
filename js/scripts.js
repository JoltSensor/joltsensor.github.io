$(document).ready(function(){
    
    setup();

    // Fixes issues with rendering in some mobile browsers
    
    setTimeout(function(){setup();}, 3000);

});

$(window).scroll(function () {

    var height = $('#hero').height();
    var scrolled = $(window).scrollTop();
    var difference = height - scrolled;

    // Add fill to navbar when it hits bottom of hero

    if(difference > 60){

        $('#header_wrapper').css({'background-color' : "rgba(26,102,216,0)"});
        $('#header_wrapper').css({'box-shadow' : '0 2px 5px rgba(0,0,0,0)'});

    }else {

        $('#header_wrapper').css({'background-color' : "rgba(26,102,216,1)"});
        $('#header_wrapper').css({'box-shadow' : '0 2px 5px rgba(0,0,0,0.26)'});

    }

    // Parallax scrolling for hero

    $('#hero').css({'top' : (-scrolled/2)+"px"});

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

    $('#hero .content').animate({opacity : 1.0}, 2000);
}