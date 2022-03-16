let buttons = document.querySelector(".btn-search");
let bar = document.querySelector(".center");
let buttons2 = document.querySelector(".arrow");

let menu_icon = document.querySelector(".fa-bars");
let menu = document.querySelector(".menu-bar");
let mains = document.querySelector(".main");


buttons.onclick = () =>{
    bar.classList.add("active");
}

buttons2.onclick = () => {
    bar.classList.remove("active")
}



menu_icon.onclick = () =>{
    menu.classList.toggle("active");
    mains.classList.toggle("active");
}