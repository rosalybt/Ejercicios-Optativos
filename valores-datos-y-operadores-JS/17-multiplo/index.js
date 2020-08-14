let primerNumero = prompt("Ingrese el primer numero")
let segundoNumero = prompt("Ingrese el segundo numero")

let resto = primerNumero % segundoNumero

if ( resto == 0 ){
    alert("el primer valor es multiplo del segundo");
  }else{
    alert("el primer valor NO es multiplo del segundo");
  }