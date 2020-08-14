const leche = 50
const pan = 10
const vino = 5

let cantidadLeche = Number(prompt("Cuanta leche desea comprar?"))
let cantidadPan = Number(prompt("Cuanto pan desea comprar?"))
let cantidadVino = Number(prompt("Cuanto vino desea comprar?"))

let total = (cantidadLeche * leche) + (cantidadPan * pan) + (cantidadVino * vino)

let cuotas = prompt(`El valor total de la compra es ${total} \n En cuantas cuotas desea pagar?`)
let valorcuota = total / cuotas

alert(` ${cantidadLeche} Leche  ${cantidadLeche * leche} \n ${cantidadPan} Pan  ${cantidadPan * pan} \n ${cantidadVino} vino  ${cantidadLeche * vino} \n TOTAL ${total} \n valor de cada cuota:${valorcuota} `)