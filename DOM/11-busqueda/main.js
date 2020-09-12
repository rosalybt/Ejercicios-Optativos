const listaFrases = document.getElementsByTagName("li")

let palabra = prompt("ingrese una palabra")


for (let frase of listaFrases) {
    let busqueda = frase.textContent
    if (busqueda.indexOf(palabra) >= 0) {
        frase.style.backgroundColor = "red";
    
    }
}