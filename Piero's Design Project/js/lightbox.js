const imagenes = document.querySelectorAll('.img__briefcase')
const imagenesLight = document.querySelector('.add-image')
const contenedorLight = document.querySelector('.image-light')
const sandwich1 = document.querySelector('.sandwich');


imagenes.forEach(imagen => {
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click', (e) => {
    if (e.target !== imagenesLight) {
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        sandwich1.style.opacity = '1'
    }
})

const aparecerImagen = (imagen) => {
    imagenesLight.src = imagen
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    sandwich1.style.opacity = '0'
}
