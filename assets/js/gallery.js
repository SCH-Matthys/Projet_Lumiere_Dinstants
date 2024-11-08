document.addEventListener("DOMContentLoaded", () => {
    // Sélectionne toutes les images de la galerie
    const images = document.querySelectorAll(".group img");

    // Sélectionne les éléments de la modal
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.getElementById("closeModal");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    // Variables pour stocker les images du thème actif
    let themeImages = [];
    let currentIndex = 0;

    // Fonction pour ouvrir la modal et afficher une image
    function openModal(index, theme) {
        // Filtrer les images selon le thème
        themeImages = Array.from(images).filter((img) => img.dataset.theme === theme);
        currentIndex = index;

        // Mettre à jour la source de l'image
        modalImage.src = themeImages[currentIndex].src;
        modal.classList.remove("hidden");
    }

    // Fonction pour fermer la modal
    function closeModalFunction() {
        modal.classList.add("hidden");
    }

    // Fonction pour aller à l'image précédente
    function showPreviousImage() {
        currentIndex = (currentIndex - 1 + themeImages.length) % themeImages.length;
        modalImage.src = themeImages[currentIndex].src;
    }

    // Fonction pour aller à l'image suivante
    function showNextImage() {
        currentIndex = (currentIndex + 1) % themeImages.length;
        modalImage.src = themeImages[currentIndex].src;
    }

    // Ajouter un événement de clic à chaque image
    images.forEach((image, index) => {
        image.addEventListener("click", () => {
            const theme = image.dataset.theme;
            const themeIndex = Array.from(images)
                .filter((img) => img.dataset.theme === theme)
                .indexOf(image);
            openModal(themeIndex, theme);
        });
    });

    // Ajouter les événements pour les boutons
    closeModal.addEventListener("click", closeModalFunction);
    prevButton.addEventListener("click", showPreviousImage);
    nextButton.addEventListener("click", showNextImage);

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModalFunction();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (!modal.classList.contains("hidden")) {
            if (event.key === "ArrowLeft") {
                showPreviousImage();
            } else if (event.key === "ArrowRight") {
                showNextImage();
            } else if (event.key === "Escape") {
                closeModalFunction();
            }
        }
    });

    // --- Barres de progression ---
    const duration = 1000; // Durée de remplissage en millisecondes
    const stepTime = 20; // Temps entre chaque incrément
    const step = 100 / (duration / stepTime); // Progression en % à chaque étape

    images.forEach((image) => {
        let interval;
        let width = 0;

        // Fonction pour démarrer le remplissage de la barre
        function startFilling() {
            // Vérifie que la modal est fermée avant de démarrer
            if (!modal.classList.contains("hidden")) return;

            width = 0;
            const progressBar = image.closest(".relative").querySelector(".progress-bar");
            if (!progressBar) return;

            progressBar.style.width = "0";

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
            const progressBar = image.closest(".relative").querySelector(".progress-bar");
            if (progressBar) {
                progressBar.style.width = "0";
            }
        }

        image.addEventListener("mouseenter", startFilling);
        image.addEventListener("mouseleave", resetFilling);
    });
});
