$(document).ready(function(){
	align();
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