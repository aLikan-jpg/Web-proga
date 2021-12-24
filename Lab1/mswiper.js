new Swiper('.image-slider',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    speed: 400,
    // effect: 'fade',
    // fadeEffect: {
    //     crossFade: true
    // },
    effect: 'cube',
    cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
    },
    autoplay:{
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    autoHeight: true,

});