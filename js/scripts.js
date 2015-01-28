$(document).ready(function(){
    
    $('.slide').hide().eq(0).show();

    var pause = 5000;
    var motion = 3000;

    var slides= $('.slide');
    var count = slides.length;
    var i = 0;

    setTimeout(transition, pause);

    function transition(){
        slides.eq(i).animate({opacity:'toggle'}, motion);

        if(++i>=count){
            i=0;
        }

        slides.eq(i).animate({opacity:'toggle'}, motion);
        
        setTimeout(transition, pause);
    }

});