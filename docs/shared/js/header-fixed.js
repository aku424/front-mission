let visible = "header--visible";
let header_top = "header-top";
let mv = document.getElementById("js-mv-height");
var mv_height = mv.clientHeight;

window.addEventListener("scroll", function() {
    var window_height = window.scrollY;
    var visible_header_height = mv_height* 2;
    console.log(visible_header_height);

    if (window_height > visible_header_height) {
        header.classList.add(visible);
    }else{
        header.classList.remove(visible);
    }
})

