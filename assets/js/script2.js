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
let buttonIndex = 0;

function startCarrousel(){
    interval = setInterval(() =>{
        buttonIndex = ( buttonIndex +1 ) % buttons.length;
        buttons[buttonIndex].click();
    }, 1000);
}

function pauseCarrousel(){
    clearInterval(interval);
    setTimeout(startCarrousel, 10000);
}

buttons.forEach(button =>{
    button.addEventListener("click", pauseCarrousel);
});

startCarrousel();

const mBurger = document.getElementById("menuBurger");
const ulMenuBurger = document.getElementById("ulMenuBurger");

mBurger.addEventListener("click", () =>{
    
    if (mBurger.classList.contains("open")) {
        mBurger.classList.remove("open");
        mBurger.classList.add("hidden");
        ulMenuBurger.style.paddingTop = "25px";
        ulMenuBurger.style.marginBottom = "35px";
        ulMenuBurger.style.display = "flex";
        ulMenuBurger.style.alignItems = "start";
        ulMenuBurger.style.flexDirection = "column";
    } else {
        mBurger.classList.remove("hidden");
        mBurger.classList.add("open");
        ulMenuBurger.style.display = "none";
        ulMenuBurger.style.flexDirection = "row";
    }
});
const menuLinks = ulMenuBurger.querySelectorAll("a");
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (mBurger.classList.contains("open")) {
            mBurger.classList.remove("open");
            mBurger.classList.add("hidden");
            ulMenuBurger.style.paddingTop = "25px";
            ulMenuBurger.style.marginBottom = "35px";
            ulMenuBurger.style.display = "flex";
            ulMenuBurger.style.alignItems = "start";
            ulMenuBurger.style.flexDirection = "column";
        } else {
            mBurger.classList.remove("hidden");
            mBurger.classList.add("open");
            ulMenuBurger.style.display = "none";
            ulMenuBurger.style.flexDirection = "row";
        }
    });
});