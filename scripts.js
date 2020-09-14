import Photo from './Photo/index.js'


window.addEventListener('DOMContentLoaded', () =>{
    Photo.load()
})

// Selecionar Image
document.getElementById('select-image')
.onclick = () => {
    document
    .getElementById('photo-file')
    .click()
 }

// Cortar imagem
Photo.cropButton.onclick = () => Photo.crop()

// Exportar Image
Photo.downloadButton.onclick = () => Photo.download()