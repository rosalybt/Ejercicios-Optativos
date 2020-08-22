
let edad = 12
const puedeVerPelicula = (edad, autorizacion) => {

    if (edad >= 15 || autorizacion) {
        return true
    }
    else {
        return false
    }

}


console.log(puedeVerPelicula(edad, true))