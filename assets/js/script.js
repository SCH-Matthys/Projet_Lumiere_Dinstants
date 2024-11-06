const btnCarrousel1 = document.getElementById("btnCarrousel1");
const btnCarrousel2 = document.getElementById("btnCarrousel2");
const btnCarrousel3 = document.getElementById("btnCarrousel3");
const divCarrousel = document.getElementById("divCarrousel");

btnCarrousel1.addEventListener("click", () =>{
    divCarrousel.style.left = "0%";
})

btnCarrousel2.addEventListener("click", () =>{
    divCarrousel.style.left = "-100%";
})

btnCarrousel3.addEventListener("click", () =>{
    divCarrousel.style.left = "-200%";
})

const buttons = [btnCarrousel1, btnCarrousel2, btnCarrousel3];
let interval;

function startCarrousel(){
    interval = setInterval(() => {
        btnCarrousel2.click();
    }, 5000)
    interval = setInterval(() => {
        btnCarrousel3.click();
    }, 10000)
    interval = setInterval(() => {
        btnCarrousel1.click();
    }, 15000)
}

function pauseCarrousel(){
    clearInterval(interval);
    setTimeout(startCarrousel, 10000);
}

buttons.forEach(button =>{
    button.addEventListener("click", pauseCarrousel);
});

pauseCarrousel();
