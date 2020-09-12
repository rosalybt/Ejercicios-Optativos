let like = prompt("ingrese el numero de 'me gusta'")
let heart = prompt("ingrese el numero de 'me encanta'")
let awesome = prompt("ingrese el numero de 'me asombra'")


const reaccion = document.getElementsByTagName("span")
console.log(reaccion)
reaccion[0].textContent =" "+ like
reaccion[1].textContent = " "+heart
reaccion[2].textContent = " "+ awesome
