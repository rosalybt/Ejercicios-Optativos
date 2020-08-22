const puedeRenovarCarnet = (pagoTest, tieneMultasImpagas, pagoImpuestos) => {

    if (pagoTest && tieneMultasImpagas === false && pagoImpuestos) {
        return true
    }
    else {
        return false
    }

}

console.log(puedeRenovarCarnet(true, false, true))
