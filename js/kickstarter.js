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
    margin = (window_height - container_height)/2;
    $('.shell').css({'top': margin + 'px'});
}