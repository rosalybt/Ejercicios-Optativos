
let escala1 = prompt("Ingrese la primera escala del vuelo")
let escala2 = prompt("Ingrese la segunda escala del vuelo")
let escala3 = prompt("Ingrese la tercera escala del vuelo")

let duracion1 = prompt("Ingrese la duracion de la primera escala")
let duracion2 = prompt("Ingrese la duracion de la segunda escala")
let duracion3 = prompt("Ingrese la duracion de la tercera escala")


let duracionTotal = Number(duracion1) + Number(duracion2) + Number(duracion3)


alert(` Escala a : ${escala1}, duracion ${duracion1} \n Escala a : ${escala2}, duracion ${duracion2} \n Escala a : ${escala3}, duracion ${duracion3} \n Duracion total del vuelo: ${duracionTotal}` )