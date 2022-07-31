const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    
    breakpoints: {
        // 768px以上の場合
        768: {
            spaceBetween: 40,
            slidesPerView: 3,
        }
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});