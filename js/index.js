$(function() {

    'use strict';

    $('.header-nav a').click(function() {
        let target = $(this).attr('href');
        $('html, body').animate({
                scrollTop: $(target).offset().top
            },
            800
        );
    });


    $('#slide').slick({
        autoplay: true,
        autoplayspeed: 2500,
    });


    $('.modal_box, .black_fill').hide();
    $('.header-contact-me-btn').click(function() {
        $('.modal_box, .black_fill').show();
    });

    $('.close_modal, .black_fill').click(function() {
        $('.modal_box, .black_fill').hide();
    });


    $('.header-nav a:nth-of-type(1)').mouseover(function() {
        $('.nav-hover_home').css('display', 'block');
    });
    $('.header-nav a').mouseout(function() {
        $('.nav-hover_home').css('display', 'none');
    });

    $('.header-nav a:nth-of-type(2)').mouseover(function() {
        $('.nav-hover_portfolio').css('display', 'block');
    });
    $('.header-nav a').mouseout(function() {
        $('.nav-hover_portfolio').css('display', 'none');
    });

    $('.header-nav a:nth-of-type(3)').mouseover(function() {
        $('.nav-hover_blog').css('display', 'block');
    });
    $('.header-nav a').mouseout(function() {
        $('.nav-hover_blog').css('display', 'none');
    });

    $('.header-nav a:nth-of-type(4)').mouseover(function() {
        $('.nav-hover_contact').css('display', 'block');
    });
    $('.header-nav a').mouseout(function() {
        $('.nav-hover_contact').css('display', 'none');
    });

});


$(document).ready(function() {
    const link = $('.menu-link');
    const linkActive = $('.menu-link_active');
    const menu = $('.burger-menu');
    
    
    link.click(function() {
        link.toggleClass('menu-link_active');
        menu.toggleClass('burger-menu_active');
    });
    linkActive.click(function() {
        link.removeClass('.menu-link_active');
    });
});
