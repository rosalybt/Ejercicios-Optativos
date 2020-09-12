const esValida=(contrasenia)=>{

    if (contrasenia.length >= 8){
        return true
    }else{
        return false
    }

}

console.log(esValida("Hola"))