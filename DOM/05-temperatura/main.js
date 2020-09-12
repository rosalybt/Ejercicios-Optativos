let temperatura = prompt("Ingrese la temperatura actual")
const etiquetaTemperatura = document.querySelector(".temperatura")

if (temperatura < 0) {
    etiquetaTemperatura.classList.add("azul")
    etiquetaTemperatura.textContent =`temperatura actual:  ${temperatura}°`

} else if (temperatura >= 0 && temperatura < 15) {
    etiquetaTemperatura.classList.add("celeste")
    etiquetaTemperatura.textContent =`temperatura actual:  ${temperatura}°`

} else if (temperatura >= 15 && temperatura < 25) {
    etiquetaTemperatura.classList.add("verde")
    etiquetaTemperatura.textContent =`temperatura actual:  ${temperatura}°`

} else if (temperatura >= 25 && temperatura < 30) {
    etiquetaTemperatura.classList.add("amarillo")
    etiquetaTemperatura.textContent =`temperatura actual:  ${temperatura}°`

} else if (temperatura >= 30 && temperatura < 35) {
    etiquetaTemperatura.classList.add("naranja")
    etiquetaTemperatura.textContent =`temperatura actual:  ${temperatura}°`

} else {
    etiquetaTemperatura.classList.add("rojo")
    etiquetaTemperatura.textContent =`temperatura actual:  ${temperatura}°`
}