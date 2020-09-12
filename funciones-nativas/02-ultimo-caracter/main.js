const esUltimoCaracter = (palabra, caracter) => {

    if (palabra.charAt(palabra.length - 1) == caracter) {
        return true

    } else {
        return false
    }


}

console.log(esUltimoCaracter("Rosa", "s"))