let ham_btn = document.getElementById("js-header-btn");
let ham_menu = document.getElementById("js-nav-menu");
let header = document.getElementById("js-header");
let active = "header--open";

function hum() {
    if (header.classList.contains(active)){
        header.classList.remove(active);
        ham_btn.setAttribute("aria-label","メニューを開く");
        ham_btn.setAttribute("aria-pressed","false");
        ham_btn.setAttribute("aria-expanded","false");
        ham_menu.setAttribute("aria-hidden","false");
    }else{
        header.classList.add(active);
        ham_btn.setAttribute("aria-label","メニューを閉じる");
        ham_btn.setAttribute("aria-pressed","true");
        ham_btn.setAttribute("aria-expanded"," true");
        ham_menu.setAttribute("aria-hidden"," true");
    }
}


ham_btn.addEventListener("click", function () {
    hum();
})
