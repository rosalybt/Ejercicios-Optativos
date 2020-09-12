let continente = prompt("Escribe un contienente");
let  listaPaises = "";

const agregarClase = (paises) => {

    for (pais of paises) {
        pais.classList.add('destacar')
    }

}

if (continente.toLowerCase() == "america") {
    listaPaises = document.getElementsByClassName(continente.toLowerCase())
   
    agregarClase(listaPaises)
    
console.log(listaPaises)
}else if(continente.toLowerCase() == "europa"){
    listaPaises = document.getElementsByClassName(continente.toLowerCase())
    agregarClase(listaPaises)
}else if(continente.toLowerCase() == "asia"){
    listaPaises = document.getElementsByClassName(continente.toLowerCase())
    agregarClase(listaPaises)
}else if(continente.toLowerCase() == "africa"){
    listaPaises = document.getElementsByClassName(continente.toLowerCase())
    agregarClase(listaPaises)
}else if(continente.toLowerCase() == "oceania"){
    listaPaises = document.getElementsByClassName(continente.toLowerCase())
    agregarClase(listaPaises)
}else{
    alert("Debes mencionar un continente, debes repasar geografia.")
}



