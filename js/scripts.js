$(document).ready(function(){
	align();
	scroller();
});

window.onresize = function(event) {
    align();
}

function align() {
    window_height = $(window).height();
    window_width = $(window).width();
    container_height = $('#container').height()+100;
    margin = (window_height - container_height)/2;
    if (margin < 50){margin = 50;}
    if (window_width < 501){margin = 0;}
    $('#container').css({'top': margin + 'px'});
}

function scroller() {
	$(".button").click(function(){
		$('html, body').animate({
        	scrollTop: $("#footer").offset().top
    	}, 800);
    	$("#mce-EMAIL").focus();
	});
}

function fader() {
	var slide = $(".slide");
    var count = 0;
    function fader() {
        slide.eq(count % quotes.length)
            .fadeIn(2000)
            .delay(1000)
            .fadeOut(2000, fader);
    	++count;
    }
    fader();
}