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
	var interval = 3000;
	var slide = $(".slide");
	slide.hide();
	var elem = $(".first.slide");
	//elem.fadeIn(rate);
    setInterval(function() {
    	if($(window).width()<1000){
    		slide.hide();
    	}else{
	    	if(elem.prev().length>0){
	    		elem.fadeIn(rate);
	    		elem.prev().fadeOut(rate);
	    		if(elem.next().length>0){
	    			elem = elem.next();
	    		}else{
	    			elem = elem.siblings(':first');
	    		}
	    	}else{
	    		elem.fadeIn(rate);
	    		elem.siblings(':last').fadeOut(rate);
	    		elem = elem.next();
	    	}
	    }
	}, interval);
}

