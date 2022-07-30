let ham_btn = document.getElementById("js-header-btn");
let ham_menu = document.getElementById("js-nav-menu");
let header = document.getElementById("js-header");
let active = "header--open";

function hum() {
    if (header.classList.contains(active)){
        header.classList.remove(active);
    }else{
        header.classList.add(active);
    }
}


ham_btn.addEventListener("click", function () {
    hum();
})
