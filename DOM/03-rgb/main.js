let rojo = prompt("Favor ingrese intensidad del rojo")
let verde = prompt("Favor ingrese intensidad del verde")
let azul = prompt("Favor ingrese intensidad del azul")

const fondoHtml = document.querySelector("html")
fondoHtml.style.backgroundColor = `rgb(${rojo},${verde},${azul})`
