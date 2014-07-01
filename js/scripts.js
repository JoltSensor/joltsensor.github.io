$(document).ready(function() {
	$("#show_form").click(function(){
		$("header").css("border-bottom", "2px solid rgb(255,255,255)");
		$("#slide_me").animate({
			top: "+=800"
		}, 500);
		if ($(window).width() > 700){$("#mce-EMAIL").focus()};
	});
	$("#hide_form").click(function(){
		$("#slide_me").animate({
			top: "-=800"
		}, 500 );
		$("#mce-EMAIL").val("");
		setTimeout(function(){
    		$("header").css("border-bottom", "2px solid rgb(242,242,242)");
  		}, 500);
	});
});