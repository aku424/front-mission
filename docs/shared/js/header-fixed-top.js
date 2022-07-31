let visible = "header--visible";
let header_top = "header-top";
let mv = document.getElementById("js-mv-height");
var mv_height = mv.clientHeight;

window.addEventListener("scroll", function() {
    var window_height = window.scrollY;
    var visible_header_height = mv_height* 2;

    if (window_height > visible_header_height) {
        header.classList.add(visible);
        header.classList.remove(header_top);
    }else{
        header.classList.remove(visible);
        header.classList.add(header_top);
    }
})

