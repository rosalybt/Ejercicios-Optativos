let color = "rojo"
const AvanzarSemaforo = (colorActual) => {

    if (colorActual == "verde") {
        return "amarillo"
    }

    else if (colorActual == "amarillo") {
        return "rojo"
    }
    else {
        return "verde"
    }

}

console.log(AvanzarSemaforo(color))