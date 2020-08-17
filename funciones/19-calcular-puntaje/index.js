const puntajeFacil = 3
const puntajeNormal = 5
const puntajeDificil = 10


let calcularPuntaje = (facil, normal, dificil) => {
    return (facil * puntajeFacil) + (normal * puntajeNormal) + (dificil * puntajeDificil)
}

let facil = Number( prompt("cantidad de ejercicios resueltos Nivel 1"))
let normal = Number( prompt("cantidad de ejercicios resueltos Nivel 2"))
let dificil = Number( prompt("cantidad de ejercicios resueltos Nivel 3"))


console.log(calcularPuntaje(facil, normal, dificil))