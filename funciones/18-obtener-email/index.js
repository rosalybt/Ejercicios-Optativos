let obtenerEmail =(usuario,dominio)=>{
    return `${usuario}@${dominio}.com`
    }
    
    let usuario =prompt("ingrese el usuario")
    let dominio =prompt("ingrese el dominio")
    
    
    alert(obtenerEmail(usuario,dominio))