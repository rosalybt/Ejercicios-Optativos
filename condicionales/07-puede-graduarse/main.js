const puedeGraduarse = (asistencia, materiasAprobadas, tesisAprobada) => {

    if (asistencia >= 75 && materiasAprobadas>=50 && tesisAprobada) {
        return true
    }
    else {
        return false
    }

}

console.log(puedeGraduarse(33, 55, false))
