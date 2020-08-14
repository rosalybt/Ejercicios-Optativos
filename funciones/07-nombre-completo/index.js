let nombreCompleto = (nombre, apellido) => {
    return nombre + " " + apellido
}


let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")

alert(`Su nombre completo es ${nombreCompleto(nombre, apellido)}`)