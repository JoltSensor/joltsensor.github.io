$(document).ready(function(){
    
    // FADE EFFECT

    /*
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
    */

    // SLIDE EFFECT
    // Add something to fix shit getting fucked on resize

    var width = $(window).width();

    $('.slide').animate({left:width});
    $('.slide').eq(0).animate({left:0});

    var pause = 4000;
    var motion = 1000;

    var slides= $('.slide');
    var count = slides.length;
    var i = 0;

    setTimeout(transition, pause);

    function transition(){
        slides.eq(i).animate({left:-width}, motion);

        if(i+1>=count){
            slides.eq(0).animate({left:0}, motion);
        }else{
            slides.eq(i+1).animate({left:0}, motion);
        }

        slides.eq(i).animate({opacity:'toggle'});
        slides.eq(i).animate({left:width});
        slides.eq(i).animate({opacity:'toggle'});

        if(++i>=count){
            i=0;
        }
        
        setTimeout(transition, pause);
    }

});