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
let contentEventMar=document.querySelector(".content_event");
let titleEventMar=document.querySelector(".title_event");
let textEventMar=document.querySelector(".text_event");
let items=[]


titleEventMar.addEventListener("mouseover",()=>{
      contentEventMar.style.visibility ="visible";
})
contentEventMar.addEventListener("mouseout", () => {
      contentEventMar.style.visibility = "hidden";
      titleEventMar.style.visibility="visible";

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
