$(document).ready(function(){
    
    setup();

    /*

    if($('#hero').length){
        
        $('#header_wrapper').css({'background-color' : "rgba(26,102,216,0)"});
    
    }else{
        
        $('#wrapper').css({'top' : 60+"px"});
    
    }

    */

    // Fixes issues with rendering in some mobile browsers
    
    setTimeout(function(){setup();}, 3000);

});

$(window).resize(setup);

$(window).scroll(function () { 

    var height = $('#hero').height();
    var scrolled = $(window).scrollTop();
    var difference = height - scrolled;

    /*

    // Add fill to navbar when it hits bottom of hero

    if(difference > 60){

        $('#header_wrapper').css({'background-color' : "rgba(26,102,216,0)"});

    }else {

        $('#header_wrapper').css({'background-color' : "rgba(26,102,216,1)"});

    }

    */

    // Parallax scrolling for hero

    $('#hero').css({'top' : (60-scrolled/2)+"px"});

    // Stop any other animations affecting hero content & fade out with scroll
    
    $('#hero .content').stop().css({'opacity': 1-(1.5*scrolled/height)});

});

function setup() {

    $('#hero.full').css({'height' : $(window).height() - 60 + "px"});

    var height = $('#hero').height();

    // Push the wrapper past the bottom of the hero

    $('#wrapper').css({'top': 60+height+"px"});

    // Center hero content vertically

    var text_height = $('.content').height();
    var text_margin = (height - text_height) / 2;

    $('#hero .content').css({'margin-top': text_margin+"px"});
    $('#hero .content').css({'margin-bottom': text_margin+"px"});

    // Fade hero content proper amount if naviagating back to or refreshing a partially scrolled page

    var scrolled = $(window).scrollTop();

    $('#hero .content').animate({opacity : 1-(1.5*scrolled/height)}, 2000);
    $('.thumbnail .content').animate({opacity : 1}, 2000);

    // Content alignment for each blog thumbnail element

    $('.thumbnail').each(function( index ){

        var height = $('.thumbnail').children('.screen').height();
        var text_height = $(this).children('.screen').children('.content').height();
        var text_margin = (height - text_height) / 2;
        $(this).children('.screen').children('.content').css({'margin-top': text_margin+"px"});
        $(this).children('.screen').children('.content').css({'margin-bottom': text_margin+"px"});

    })
};