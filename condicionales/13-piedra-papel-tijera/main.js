const jugarPiedraPapelTijera = (a, b) => {

    if ((a == "piedra" && b == "papel") || (b == "piedra" && a == "papel")) {
        return `ganó papel`
    } else if ((a == "piedra" && b == "tijera") || (b == "piedra" && a == "tijera")) {
        return `ganó piedra`
    }
    else if ((a == "papel" && b == "piedra") || (b == "piedra" && a == "papel")) {

        return `ganó papel`
    } else if ((a == "papel" && b == "tijera") || (b == "papel" && a == "tijera")) {
        return `ganó tijera`

    }
    else if ((a == "tijera" && b == "piedra") || (b == "piedra" && a == "tijera")) {

        return `ganó piedra`
    } else if ((a == "tijera" && b == "papel") || (b == "papel" && a == "tijera")) {
        return `ganó tijera`

    } else {
        return "empate"
    }



}


console.log(jugarPiedraPapelTijera("papel", "tijera"))