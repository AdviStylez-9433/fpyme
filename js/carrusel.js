
const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

punto.forEach ((cadaPunto, i) => {
    punto[i].addEventListener('click', () =>{

        let posicion = i
        let operacion = posicion * -52.5

        grande.style.transform = `translateX(${operacion}%)` 

        punto.forEach((cadaPunto, i) => {
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
})


        let isDragging1 = false;
        let startX1;
        let scrollLeft1;
        grande.addEventListener('touchstart', (e) => {
            isDragging1 = true;
            startX1 = e.touches[0].clientX;
            scrollLeft1 = grande.scrollLeft;
        });

        grande.addEventListener('touchend', () => {
            isDragging1 = false;
        });

        grande.addEventListener('touchmove', (e) => {
            if (!isDragging1) return;
            const x = e.touches[0].clientX;
            const walk = (x - startX1) * 1; // Ajusta este valor para controlar la velocidad del desplazamiento
            carousel1.scrollLeft = scrollLeft1 - walk;
        });