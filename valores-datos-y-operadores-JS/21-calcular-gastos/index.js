
let servicios = 1
let dineroDispoible = Number(prompt("Cuanto dinero disponible tienes?"))

let servicio1 = prompt("Que servicio pagaras? (" + (servicios++) + "/3), Dinero disponible:" + dineroDispoible)
let pagoServicio1 = Number(prompt("cuanto pagaras por el servicio ? "))
console.log(pagoServicio1)
let servicio2 = prompt("Que servicio pagaras? (" + (servicios++) + "/3), Dinero disponible:" + (dineroDispoible - pagoServicio1))
let pagoServicio2 = Number(prompt("cuanto pagaras por el servicio ? "))
console.log(pagoServicio2)
let servicio3 = prompt("Que servicio pagaras? (" + (servicios++) + "/3), Dinero disponible:" + (dineroDispoible -(pagoServicio1+pagoServicio2))) 
let pagoServicio3 = Number(prompt("cuanto pagaras por el servicio ? "))
console.log(pagoServicio3)
let totalDisponible = dineroDispoible - pagoServicio1 - pagoServicio2 - pagoServicio3
alert(`${servicio1} tiene un gasto de ${pagoServicio1} \n ${servicio2} tiene un gasto de ${pagoServicio2} \n ${servicio3} tiene un gasto de ${pagoServicio3} \n Dinero  ${totalDisponible}`)




