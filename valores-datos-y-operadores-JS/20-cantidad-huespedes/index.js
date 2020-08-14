let habitacionesParaDos = Number(prompt("Habitaciones para dos personas"))
let habitacionesParaTres = Number(prompt("Habitaciones para tres personas"))
let habitacionesParaCuatro = Number(prompt("Habitaciones para cuatro personas"))

resultado = (habitacionesParaDos * 2) + (habitacionesParaTres * 3) + (habitacionesParaCuatro * 4)

alert(`El hotel tiene capacidad para alojar ${resultado} personas`)