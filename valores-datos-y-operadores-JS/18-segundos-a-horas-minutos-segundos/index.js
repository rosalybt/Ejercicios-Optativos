let numeroSegundos = prompt("Ingrese los segundos")

let hora = Math.round( numeroSegundos / 3600)
let minutos = Math.round( numeroSegundos % 60)
let segundos = numeroSegundos % 3600

alert(`${numeroSegundos} segundos = ${hora} hora(s) ${minutos} min. ${segundos} seg.`)