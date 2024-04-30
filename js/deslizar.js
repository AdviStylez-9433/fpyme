const carousel1 = document.getElementById('carousel1');
        let isDragging1 = false;
        let startX1;
        let scrollLeft1;

        carousel1.addEventListener('touchstart', (e) => {
            isDragging1 = true;
            startX1 = e.touches[0].clientX;
            scrollLeft1 = carousel1.scrollLeft;
        });

        carousel1.addEventListener('touchend', () => {
            isDragging1 = false;
        });

        carousel1.addEventListener('touchmove', (e) => {
            if (!isDragging1) return;
            const x = e.touches[0].clientX;
            const walk = (x - startX1) * 1; // Ajusta este valor para controlar la velocidad del desplazamiento
            carousel1.scrollLeft = scrollLeft1 - walk;
        });