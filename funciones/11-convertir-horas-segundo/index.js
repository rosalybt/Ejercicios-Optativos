let convertirHorasASegundo = (horas) => {
    return horas * 3600
}

let horas = Number(prompt("Ingrese la cantidad de hora a convertir en segundos"))

console.log(convertirHorasASegundo(horas))