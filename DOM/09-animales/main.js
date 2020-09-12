let animalSeleccionado = prompt("Por favor elige uno de los siguientes animales \n -Perro \n -Gato \n -Colibri")
const imgPerro = document.querySelector('.perro')
const imgGato = document.querySelector('.gato')
const imgColibri = document.querySelector('.colibri')

if (animalSeleccionado.toLowerCase() == "perro") {
    imgPerro.classList.remove('hidden')
} else if (animalSeleccionado.toLowerCase() == "gato") {
    imgGato.classList.remove('hidden')
} else if (animalSeleccionado.toLowerCase() == "colibri") {
    imgColibri.classList.remove('hidden')
} else { alert("Debes seleccionar uno de los animales antes meconados") }