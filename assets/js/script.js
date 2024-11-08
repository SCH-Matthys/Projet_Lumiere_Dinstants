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

// DEBUT SECTION 2----------------------------
const greetingContainer=document.querySelector(".greeting_container");
const galleryControlContainer=document.querySelector(".gallery_control");
const rightbtnone=document.querySelector("#rightbtnone");
const rightbtntwo=document.querySelector("#rightbtntwo");
const rightbtnthree=document.querySelector("#rightbtnthree");
const leftbtnone=document.querySelector("#leftbtnone");
const leftbtntwo=document.querySelector("#leftbtntwo");
const leftbtnthree=document.querySelector("#leftbtnthree");
const pict1=document.querySelector(".pict_1");
const pict2=document.querySelector(".pict_2");
const pict3=document.querySelector(".pict_3");
const images =[pict1,pict2,pict3];
let index=0;

rightbtnone.addEventListener("click",function(){
    pict2.style.opacity="0.4";
    pict2.style.width="330px";
    pict2.style.height="200px";
    pict2.style.left="85%";
    pict2.style.boxShadow="none";
    pict3.style.left="15%";
    pict1.style.boxShadow=" 0 5px 33px 6px rgba(0,0,0,0.35)"; 
    pict1.style.opacity="1";
    pict1.style.width="430px";
    pict1.style.height="300px";
    pict1.style.left="50%";
    pict1.style.transition="all 0.5s";
    pict1.style.zIndex="2";

});
rightbtntwo.addEventListener("click",function(){
    pict1.style.opacity="0.4";
    pict1.style.width="330px";
    pict1.style.height="200px";
    pict1.style.left="85%";
    pict1.style.boxShadow="none";
    pict2.style.left="15%";
    pict3.style.boxShadow=" 0 5px 33px 6px rgba(0,0,0,0.35)"; 
    pict3.style.opacity="1";
    pict3.style.width="430px";
    pict3.style.height="300px";
    pict3.style.left="50%";
    pict3.style.transition="all 0.5s";
    pict3.style.zIndex="2";

});
rightbtnthree.addEventListener("click",function(){
    pict3.style.opacity="0.4";
    pict3.style.width="330px";
    pict3.style.height="200px";
    pict3.style.left="85%";
    pict3.style.boxShadow="none";
    pict1.style.left="15%";
    pict2.style.boxShadow=" 0 5px 33px 6px rgba(0,0,0,0.35)"; 
    pict2.style.opacity="1";
    pict2.style.width="430px";
    pict2.style.height="300px";
    pict2.style.left="50%";
    pict2.style.transition="all 0.5s";
    pict2.style.zIndex="2";

});
leftbtnone.addEventListener("click",function(){
    pict2.style.opacity="0.4";
    pict2.style.width="330px";
    pict2.style.height="200px";
    pict2.style.left="15%";
    pict2.style.boxShadow="none";
    pict1.style.left="85%";
    pict3.style.boxShadow=" 0 5px 33px 6px rgba(0,0,0,0.35)"; 
    pict3.style.opacity="1";
    pict3.style.width="430px";
    pict3.style.height="300px";
    pict3.style.left="50%";
    pict3.style.transition="all 0.5s";
    pict3.style.zIndex="2";

});
leftbtntwo.addEventListener("click",function(){
    pict3.style.opacity="0.4";
    pict3.style.width="330px";
    pict3.style.height="200px";
    pict3.style.left="15%";
    pict3.style.boxShadow="none";
    pict2.style.left="85%";
    pict1.style.boxShadow=" 0 5px 33px 6px rgba(0,0,0,0.35)"; 
    pict1.style.opacity="1";
    pict1.style.width="430px";
    pict1.style.height="300px";
    pict1.style.left="50%";
    pict1.style.transition="all 0.5s";
    pict1.style.zIndex="2";

});
leftbtnthree.addEventListener("click",function(){
    pict1.style.opacity="0.4";
    pict1.style.width="330px";
    pict1.style.height="200px";
    pict1.style.left="15%";
    pict1.style.boxShadow="none";
    pict3.style.left="85%";
    pict2.style.boxShadow=" 0 5px 33px 6px rgba(0,0,0,0.35)"; 
    pict2.style.opacity="1";
    pict2.style.width="430px";
    pict2.style.height="300px";
    pict2.style.left="50%";
    pict2.style.transition="all 0.5s";
    pict2.style.zIndex="2";

});

// FIN SECTION 2-----------------------------

document.addEventListener("DOMContentLoaded", function () {
    // Sélectionne toutes les images dans les div `.relative`
    const images = document.querySelectorAll('.relative img');

    // Paramètres d'animation
    const duration = 1000; // Durée de remplissage en millisecondes
    const stepTime = 20; // Temps entre chaque incrément
    const step = 100 / (duration / stepTime); // Progression en % à chaque étape

    images.forEach((image) => {
        let interval;
        let width = 0;

        // Fonction pour démarrer le remplissage de la barre
        function startFilling() {
            width = 0; // Réinitialiser la largeur à chaque survol
            const progressBar = image.closest('.relative').querySelector('.progress-bar'); // Sélectionne la barre associée
            progressBar.style.width = '0'; // Réinitialiser visuellement

            interval = setInterval(() => {
                width += step;
                progressBar.style.width = `${width}%`;
                if (width >= 100) {
                    clearInterval(interval);
                }
            }, stepTime);
        }

        // Fonction pour réinitialiser la barre de progression
        function resetFilling() {
            clearInterval(interval);
            const progressBar = image.closest('.relative').querySelector('.progress-bar');
            progressBar.style.width = '0';
        }

        // Ajouter les événements de survol et de sortie de souris
        image.addEventListener('mouseenter', startFilling);
        image.addEventListener('mouseleave', resetFilling);
    });
});
