$(document).ready(function () {
    setup();
    setTimeout(function(){setup();}, 1000);
});

$(window).scroll(function(){

    var scrolled = $(window).scrollTop();
    
    if (scrolled > 0) {
        $('.banner').addClass('scrolled');
    } else {
        $('.banner').removeClass('scrolled');
    }

});

$(window).resize(function(){

    align();

});

function setup() {

    //resetTop();
    align();

}

function resetTop() {
    $("html, body").animate({scrollTop:0}, 0);
}

function align() {

    var height = $('.promobar').outerHeight();
    console.log(height);
    $('#wrapper').css({'margin-top': height +"px"});

    $('.square').each(function() {

        var w = $(this).width();
        console.log(w);
        $(this).css({'height' : w + "px"});

    });

}

function register($form) {
    
    $.ajax({
    
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize(),
        cache       : false,
        dataType    : 'json',
        contentType: "application/json; charset=utf-8",
        error       : function(err) { $('.alert').html('Could not connect to server. Please try again later.'); },
        success     : function(data) {

            if (data.result != "success") {

                var message = data.msg.substring(4);
                $('#notification_container-1').html('<span class="">' + message + '</span>');
            
            } else {
    
                var message = data.msg;
                $('#notification_container-1').html('<span class="">' + message + '</span>');
            }

        }

    });

    align();

};