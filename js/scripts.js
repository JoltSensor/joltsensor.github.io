$(document).ready(function(){
    
    setup();

    // Fixes issues with rendering in some mobile browsers
    
    setTimeout(function(){setup();}, 3000);

});

$(window).scroll(function () {

    var height = $('#hero').height();
    var scrolled = $(window).scrollTop();
    var difference = height - scrolled;

    if(difference > 60){

        $('#header_wrapper').css({'background-color' : "rgba(26,102,216,0)"});
        $('#header_Wrapper').css({'box-shadow' : '0 2px 5px rgba(0,0,0,0)'});

    }else {

        $('#header_wrapper').css({'background-color' : "rgba(26,102,216,1)"});
        $('#header_Wrapper').css({'box-shadow' : '0 2px 5px rgba(0,0,0,0.26)'});

    }

    // Parallax scrolling for hero

    $('#hero').css({'top' : (-scrolled/2)+"px"});

    // Fade out words on hero with parallax

    $('.content').css({'opacity': 1-(1.5*scrolled/height)});

});

function setup() {

    var height = $('#hero').height();

    // Push the wrapper past the bottom of the screen

    $('#wrapper').css({'top': height+"px"});

    // Fill the screen with the hero div

    $('#hero').css({'height': height+"px"});

    // Center hero text block on hero

    var text_height = $('.content').height();
    var text_margin = (height - text_height) / 2;

    $('.content').css({'margin-top': text_margin+"px"});
    $('.content').css({'margin-bottom': text_margin+"px"});
}