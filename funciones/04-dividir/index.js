let dividir = (num1, num2) => {

    if (num2 == 0) {
        alert("ERROR - No se puede dividor entre cero")
        return "ERROR";
    } else {
        return num1 / num2
    }
}


let primerNumero = Number(prompt("Digite el primer numero"))
let segundoNumero = Number(prompt("Digite el segundo numero"))

alert(`la divicion de ${primerNumero} / ${segundoNumero} = ${dividir(primerNumero, segundoNumero)}`)