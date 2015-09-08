$(document).ready(function(){
    
    setup();

    setTimeout(function(){setup();}, 1000);

});

$(window).resize(setup);

$('.hamburger').click(function() {

    $('#menu').fadeToggle(10, function() {

        $('.hamburger').hide();
        $('.exit').show();
        
        var height = $(window).height();
        var width = $(window).width();
        var space = ((width-1000)/2)-20;

        if (space > 280) {

            $('#menu').css({'width' : space + 'px'});

        } else if (space >= 0) {
            
            $('#menu').css({'width' : 280 + 'px'});
            $('#wrapper').css({'right' : (280-space) + 'px'});
            $('#header').css({'right' : (280-space) + 'px'});
        
        } else {

            $('#menu').css({'width' : 280 + 'px'});
            $('#wrapper').css({'right' : 280 + 'px'});
            $('#header').css({'right' : 280 + 'px'});

        }

    });

});

$('.exit').click(function() {

    $('#menu').fadeToggle(10, function() {
    
        $('.exit').hide();
        $('.hamburger').show();
        $('#wrapper').css({'right' : '0'});
        $('#header').css({'right' : '0'});
    
    });

});

function setup() {

    $('.hamburger').show();
    $('.exit').hide().css({'visibility' : 'visible'});
    $('#menu').hide().css({'visibility' : 'visible'});

    if($(window).height() < 600){

        //$('#hero').css({'height' : $(window).height() - 70 + "px"});
    
    }else{
    
        $('#hero').css({'height' : 400 + "px"});
    
    };

    if($(window).width() < 480){
    
        //$('#hero').css({'height' : $(window).height() - 70 + "px"});
    
    }else{
    
        $('#hero').css({'height' : 400 + "px"});
    
    };

    $('#hero.full').css({'height' : $(window).height() - 70 + "px"});

    var height = $('#hero').height();
    var text_height = $('.content').height();
    var text_margin = (height - text_height) / 2;

    $('#hero .content').css({'opacity': 1});
    $('#hero .content').css({'margin-top': text_margin +"px"});

    $('.section.hero').each(function() {
    
        var height1 = $(this).height();
        var height2 = $(this).find('.screen > .content').height();
        var margin = ( height1 - height2 )/2;

        $(this).find('.screen > .content').css({'padding-top' : margin});

    });

};