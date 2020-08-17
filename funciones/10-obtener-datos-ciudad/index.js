
let obtenerDatosDeCiudad = (nombre, poblacion, pais) => {
    return `La ciudad de ${nombre} tiene una población de ${poblacion} habitantes y está ubicada en ${pais}`

}


let nombreCiudad = prompt("cual es el nombre de la ciudad?")
let poblacion = prompt(`Cual es la poblacion de ${nombreCiudad}?`)
let pais = prompt(`Donde esta ubicada la ciudad de ${nombreCiudad}?`)


alert(obtenerDatosDeCiudad(nombreCiudad, poblacion, pais))