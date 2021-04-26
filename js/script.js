console.log("Hello there!");

let changeColor = document.querySelector(".js-changeColor");
let header = document.querySelector(".js-header");

changeColor.addEventListener("click", () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    header.style.color = "#" + randomColor;
});

let showHidden = document.querySelector(".js-showHidden");
let hidden = document.querySelector(".js-section__hidden");

let showText = "Zamów";
let hideText = "Schowaj"
showHidden.addEventListener("click", () => {
    hidden.classList.toggle("section__hidden");
    showHidden.innerText = showHidden.innerText === hideText ? showText : hideText;
});