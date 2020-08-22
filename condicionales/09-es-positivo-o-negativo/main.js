

const esPositiONegativo = (numero) => {

    if (numero > 0) {
        return "Positivo"
    }

    else if (numero === 0) {
        return "Neutro"
    }
    else {
        return "Negativo"
    }

}
const numero = 3
console.log(esPositiONegativo(numero))