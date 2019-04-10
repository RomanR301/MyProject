
$(function(){
    
    'use strict';
    
    $('a[href^="#"]').click(function(){
        let target = $(this).attr('href');
        $('html, body').animate(
            {
                scrollTop:$(target).offset().top
            },
            800
        );
    });
    
    
    $('#slide').slick({
        autoplay: true,
        autoplayspeed: 2500,
    });
    
    
    $('.modal_box, .black_fill').hide();
    $('.header-contact-me-btn').click(function(){
        $('.modal_box, .black_fill').show();
    });
    
    $('.close_modal, .black_fill').click(function() {
        $('.modal_box, .black_fill').hide();
    })
});