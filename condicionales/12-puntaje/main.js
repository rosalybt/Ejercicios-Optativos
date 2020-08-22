
let puntaje = 40
const ObtenerPuntaje = (puntaje) => {

    if (puntaje >= 0 && puntaje < 6) {
        return "Desaprobado"
    }

    else if (puntaje >= 6 && puntaje < 7) {
        return "Regular"
    }
    else if (puntaje >= 7 && puntaje < 8) {
        return "Bueno"
    }
    else if (puntaje >= 8 && puntaje < 10) {
        return "Muy bueno"
    }
    else if (puntaje === 10) {
        return "Excelente"
    }
    else {
        return "Puntaje invalido"
    }

}

console.log(ObtenerPuntaje(puntaje))