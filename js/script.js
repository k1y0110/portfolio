

$(function(){
    $('.burger-btn').on('click',function(){
    $('.header-nav').fadeToggle(300);
    $(this).toggleClass('open');
    $('body').toggleClass('noscroll');
    $('li').toggleClass('sp-menu');
    });

    $("li").on('click',function(){
    $('.header-nav').fadeToggle(0);
    $('.burger-btn').removeClass('open');
    $('body').removeClass('noscroll');
    $(this).removeClass('sp-menu');
    });
})

AOS.init();