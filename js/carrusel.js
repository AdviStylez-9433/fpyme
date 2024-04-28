
const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

punto.forEach ((cadaPunto, i) => {
    punto[i].addEventListener('click', () =>{

        let posicion = i
        let operacion = posicion * -25

        if(i == 0){
            grande.style.transform = `translateX(0%)` 
        }else if(i == 1){
            grande.style.transform = `translateX(-25%)` 
        }else if(i == 2){
            grande.style.transform = `translateX(-50%)` 
        }else if(i == 3){
            grande.style.transform = `translateX(-75%)` 
        }

        punto.forEach((cadaPunto, i) => {
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
})
