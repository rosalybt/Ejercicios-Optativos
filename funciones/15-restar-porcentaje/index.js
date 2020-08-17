let calcularPorcentaje = (numero, porcentaje) => {
    return numero * (porcentaje / 100)
}

let restarPorcentaje = (porcentajeCalculado, numero) => {
    return  numero - porcentajeCalculado 
}


let numero = Number(prompt("ingrese el numero a calcularle el porcentaje"))
let porcentaje = Number(prompt("cual es el porcentaje a calcular?"))
console.log(restarPorcentaje(calcularPorcentaje(numero,porcentaje), numero))