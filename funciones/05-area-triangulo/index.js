let areaTriangulo = (base, altura) => {


        return (base * altura)/2
    
}


let primerNumero = Number(prompt("Digite la base del triangulo"))
let segundoNumero = Number(prompt("Digite la altura del triangulo"))

alert(`El area de un triangulo es  ${areaTriangulo(primerNumero, segundoNumero)}`)