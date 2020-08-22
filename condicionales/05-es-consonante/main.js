const esConsonante = (letra) => {

    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        return false
    }
    else if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U") {
        return false
    }
    else {
        return true
    }

}

console.log(esConsonante("U")) 