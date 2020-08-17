let calcularPerimetroRectangulo = (alto, ancho) =>{
    return (alto+ ancho)*2
}


let alto = Number(prompt("Cual es el alto del rectangulo?"))

let ancho = Number(prompt("Cual es el ancho del rectangulo?"))


console.log(calcularPerimetroRectangulo(alto,ancho))