const obtenerExtension = (texto)=>{
let extension = texto.indexOf('.')
return texto.slice(extension,texto.length)

}

console.log(obtenerExtension("index.html"))