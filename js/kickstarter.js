$(document).ready(function(){
	align();
	setTimeout(function(){
 		align();
	}, 3000);
});

window.onresize = function(event) {
    align();
}

function align() {
    window_height = $(window).height();
    container_height = $('.shell').height();
    if(window_height < container_height + 40){
    	$('.shell').css({'top': 0 + 'px'});
    	$('.shell').css({'padding': '20px 0'});
    }else{
	    margin = (window_height - container_height)/2;
	    $('.shell').css({'top': margin + 'px'});
	}
}