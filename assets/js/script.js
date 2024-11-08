const btnCarrousel1 = document.getElementById("btnCarrousel1");
const btnCarrousel2 = document.getElementById("btnCarrousel2");
const btnCarrousel3 = document.getElementById("btnCarrousel3");
const divCarrousel = document.getElementById("divCarrousel");

btnCarrousel1.addEventListener("click", () => {
    divCarrousel.style.left = "0%";
});

btnCarrousel2.addEventListener("click", () => {
    divCarrousel.style.left = "-100%";
});

btnCarrousel3.addEventListener("click", () => {
    divCarrousel.style.left = "-200%";
});

const buttons = [btnCarrousel1, btnCarrousel2, btnCarrousel3];
let interval;
let buttonIndex = 0;

function startCarrousel() {
    interval = setInterval(() => {
        buttonIndex = (buttonIndex + 1) % buttons.length;
        buttons[buttonIndex].click();
    }, 1000);
}

function pauseCarrousel() {
    clearInterval(interval);
    setTimeout(startCarrousel, 10000);
}

buttons.forEach(button => {
    button.addEventListener("click", pauseCarrousel);
});

startCarrousel();

let contentEventMar = document.querySelector(".content_event");
let titleEventMar = document.querySelector(".title_event");
let textEventMar = document.querySelector(".text_event");
let items = [];

titleEventMar.addEventListener("mouseover", () => {
    contentEventMar.style.visibility = "visible";
});

contentEventMar.addEventListener("mouseout", () => {
    contentEventMar.style.visibility = "hidden";
    titleEventMar.style.visibility = "visible";
});
