$(document).ready(function(){
	scroller();
	fader();
	$("#mc_embed_signup .button").click(function(){
		$('#notification_container').fadeIn();
	});
});

window.onresize = function(event) {}

function scroller() {
	$(".button").click(function(){
		$('html, body').animate({
        	scrollTop: $("#mce-EMAIL").offset().top
    	}, 800);
    	$("#mce-EMAIL").focus();
	});
	$("#footer img").click(function(){
		$('html, body').animate({
        	scrollTop: $("#header").offset().top
    	}, 800);
	});
}

function fader() {
	var rate = 1500;
	var slide = $(".slide");
	slide.hide();
	var elem = $(".first.slide");
	elem.fadeIn(rate);
    setInterval(function() {
    	if($(window).width()<1000){
    		slide.hide();
    	}else{
	    	if(elem.next().length>0){
	    		elem.fadeOut(rate);
	    		elem.next().fadeIn(rate);
	    		elem = elem.next();
	    	}else{
	    		elem.fadeOut(rate);
	    		elem.siblings(':first').fadeIn(rate);
	    		elem = elem.siblings(':first');
	    	}
	    }
	}, 4000);
}

