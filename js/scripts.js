$(document).ready(function(){
	scroller();
	fader();
});

window.onresize = function(event) {}

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