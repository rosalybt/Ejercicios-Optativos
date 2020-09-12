const esPuenteSeguro = (texto) => {
    let puenteCortado = texto.indexOf(' ')
    if (parseInt(puenteCortado) >= 0) {
        return false

    } else {
        return true
    }

}

console.log(esPuenteSeguro("### #####"))