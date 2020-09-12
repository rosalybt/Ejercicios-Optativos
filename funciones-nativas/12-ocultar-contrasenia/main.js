const ocultarContrasenia = (contrasenia) => {

    if (isNaN(contrasenia) === false) {
        return contrasenia.replace(/[0-9]/g, '*')
    } else {
        return "Debes ingresar solo numeros"
    }

}

console.log(ocultarContrasenia("123"))