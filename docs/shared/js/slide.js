let review_slide = document.getElementById("js-swiper-wrap");//ここにreview-slideをつける
let review_item = document.getElementsByClassName("swiper-slide");//ここにreview-itemをつける
let slide_length = review_item.length;
let review_wrap = document.getElementById("js-review-slide-wrap");
var window_width = window.innerWidth;
console.log(slide_length);

//swiperを使わない際のクラスを付ける
function add_no_swiper_class() {
    console.log("クラスをつけます");
    review_slide.classList.add("review-slide");
    for (let i = 0; i < review_item.length; i++) {
        let review_item_individual = review_item[i];
        review_item_individual.classList.add("review-item");
        console.log(review_item_individual);
    }
}

//swiperを使う際の通常のクラスを外す
function remove_no_swiper_class() {
    review_slide.classList.remove("review-slide");
    console.log("クラスを外します");
    for (let i = 0; i < review_item.length; i++) {
        let review_item_individual = review_item[i];
        review_item_individual.classList.remove("review-item");
        console.log(review_item_individual);
    }
}
function slider(){
    new Swiper(".swiper", {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        breakpoints: {            
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
}

function slider_3(){
    review_wrap.classList.add("arrow_toggle");
    console.log(review_wrap);
    console.log("リサイズされました");
    new Swiper(".swiper", {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        breakpoints: {            
            768: {
                loop: false,
                spaceBetween: 40,
                slidesPerView: 3,
            }
        },
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });
}

window.addEventListener("load" ,function() {
    if (slide_length >= 4) {
        slider();
    }else if (slide_length == 3) {
        slider();
        // slider_3();
        // window.addEventListener('resize', function(){
        //     slider_3();
        // });
    }else{
        add_no_swiper_class();
    }
});
