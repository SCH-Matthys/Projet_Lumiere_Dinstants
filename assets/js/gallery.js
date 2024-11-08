document.addEventListener("DOMContentLoaded", function () {
    // Script pour les barres de progression
    const images = document.querySelectorAll(".relative img");
    const duration = 1000; // Durée de remplissage en millisecondes
    const stepTime = 20; // Temps entre chaque incrément
    const step = 100 / (duration / stepTime); // Progression en % à chaque étape

    images.forEach((image) => {
        let interval;
        let width = 0;

        function startFilling() {
            // Ne pas démarrer la barre si l'image est affichée en plein écran
            if (document.getElementById("modal")?.classList.contains("hidden") === false) return;

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

    // Script pour la modal
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.getElementById("closeModal");

    if (modal && modalImage && closeModal) {
        images.forEach((image) => {
            image.addEventListener("click", () => {
                modal.classList.remove("hidden");
                modalImage.src = image.src;
            });
        });

        closeModal.addEventListener("click", () => {
            modal.classList.add("hidden");
        });

        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.classList.add("hidden");
            }
        });
    }
});
