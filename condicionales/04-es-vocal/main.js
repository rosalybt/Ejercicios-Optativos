const esVocal = (letra) => {

    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        return true
    }
    else if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U") {
        return true
    }
    else {
        return false
    }

}

console.log(esVocal("B")) 