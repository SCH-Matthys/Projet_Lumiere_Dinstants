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
