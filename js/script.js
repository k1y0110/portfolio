

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
});

AOS.init();

const firstView = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

  breakpoints: {
    1025: {
      slidesPerView: 1.4, 
      centeredSlides: true,
      spaceBetween: -3,
    } 
  },
  });

