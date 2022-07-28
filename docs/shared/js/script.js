let input_wrap = document.querySelector(".m-form-list__item--file-label");
let input_item = input_wrap.children[0];
    
input_item.addEventListener('focus', ()=> {
    input_wrap.classList.add("__focus");
})
input_item.addEventListener('blur', ()=> {
    input_wrap.classList.remove("__focus");
})


