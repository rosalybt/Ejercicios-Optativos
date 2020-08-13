const aPies = 5.3
const bici = 10
const auto = 30.3

let recorrido = prompt("Ingrese la distancia de su recorrido")

let tiempoAPies = recorrido / (aPies)
let tiempoBici = recorrido / (bici)
let tiempoAuto = recorrido / (auto)

alert(`El tiempo a pies es : ${tiempoAPies} horas, bici: ${bici} horas, auto: ${auto} horas` )