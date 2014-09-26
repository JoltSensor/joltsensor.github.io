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

function cards() {
    // Keeps picture cards square while re-sizing
    $('.picture').each (function () {
    	$(this).css({'height': $(this).width()+"px"});
	});
}

function align() {
    $('#header').css({'padding-top' : 0+"px"});
    $('#header').css({'padding-bottom' : 0+"px"});
    $('#header_wrapper').css({'background-color' : "rgba(63,124,215,1)"});
    var window_height = $(window).height();
    // Push the wrapper past the bottom of the screen
    $('#wrapper').css({'top': $('#header').height()+"px"});
}