const titulo = document.querySelector('.titulo') 
const imagen = document.getElementById('imagen')
const url = document.getElementById('url')


let tituloUser = prompt("Ingrese el titulo del articulo");
let imgUser = prompt("Ingrese la URL de la imagen para el  articulo");
let linkUser = prompt("Ingrese la URL para acceder al articulo");
console.log('funciona')


titulo.textContent = tituloUser
imagen.src = imgUser
url.href = linkUser