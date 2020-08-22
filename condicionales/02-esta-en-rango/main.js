const estaEnRango =(valor, minimo, maximo)=>{
    if(valor >= minimo && valor <= maximo){
        return `El valor ${valor} se encuentra entre ${minimo} y ${maximo}`
    }else{
        return `El valor ${valor} NO se encuentra entre ${minimo} y ${maximo}`
    }

}


let valor = Number (prompt("Ingrese el valor"))
let minimo = Number (prompt("Ingrese el valor minimo"))
let maximo = Number (prompt("Ingrese el valor maximo"))

console.log(estaEnRango(valor, minimo, maximo))
