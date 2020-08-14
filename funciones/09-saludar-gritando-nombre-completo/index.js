let obtenerNombreCompleto = (nombre, apellido) => {
    return nombre + " " + apellido
}

let saludar =(nombre)=>{
    return `Hola ${nombre}, un gusto conocerte`
}

let gritar = (texto) => {
    return "¡" + texto + "!"
}
let nombre = prompt("Cual es tu nombre?")
let apellido = prompt("Cual es tu apellido?")

const nombreCompleto = obtenerNombreCompleto(nombre, apellido)
const saludo = saludar(nombreCompleto)
const grito = gritar(saludo)

console.log(grito)