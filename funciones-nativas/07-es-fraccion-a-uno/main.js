const esFraccionMayorAUno = (fraccion)=>{
    let resultadoConversion = fraccion.split('/')
let numerador = resultadoConversion[0]
let denominador = resultadoConversion[1]
   if ((numerador/denominador) >1 ){
       return true
   }else{
       return false
   }
}

console.log( esFraccionMayorAUno("4/2"))