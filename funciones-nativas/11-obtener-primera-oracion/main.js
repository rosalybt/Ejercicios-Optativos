const obtenerPrimeraORacion=(texto)=>{

    let posicioTerminoOracion = texto.split('.')

    let oracion = posicioTerminoOracion[0]
    return oracion

}
console.log(obtenerPrimeraORacion("Tengo varias oraciones. Esta es la segunda. Y esta es la tercera."))