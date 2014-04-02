$(document).ready(function(){
	//align();
	scroller();
	//fader();
});

window.onresize = function(event) {
    //align();
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
	var rate = 1500;
	var slide = $(".slide");
	slide.hide();
	var elem = $(".first.slide");
	elem.fadeIn(rate);
    setInterval(function() {
    	if(elem.next().length>0){
    		elem.fadeOut(rate);
    		elem.next().fadeIn(rate);
    		elem = elem.next();
    	}else{
    		elem.fadeOut(rate);
    		elem.siblings(':first').fadeIn(rate);
    		elem = elem.siblings(':first');
    	}
	}, 4000);
}