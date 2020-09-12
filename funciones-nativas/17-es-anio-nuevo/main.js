const esAnioNuevo = (fecha) => {
    let fechaSinSlash = fecha.split('/')

    if (parseInt(fechaSinSlash[0]) == 1 && parseInt(fechaSinSlash[1]) == 1) {
        return true
    }
    else {
        return false
    }
}

console.log(esAnioNuevo("01/02/2020"))