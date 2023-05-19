//menu btn
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav");
const header = document.querySelector("header");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show-nav");
});

//auto height calc
let footerHeight = document.querySelector("footer").clientHeight;
console.log(document.body.clientHeight);
let main = document.querySelector("main");

let mainHeight =
  document.body.clientHeight - (footerHeight + header.clientHeight) - 0.5;
main.style.height = mainHeight + "px";
