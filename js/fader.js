$(document).ready(function(){
	$(".button").click(function(){
		$('html, body').animate({
        	scrollTop: $("#footer").offset().top
    	}, 800);
    	$("#mce-EMAIL").focus();
	});
});