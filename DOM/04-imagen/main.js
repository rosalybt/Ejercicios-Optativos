let tamanioImagen = prompt("De que tamaño desea la imagen?")


const imagen = document.querySelector(".imagen")

if (tamanioImagen === "chica"){

    imagen.classList.remove(imagen.classList[0])
    imagen.classList.add(tamanioImagen)

    }else if(tamanioImagen === "mediana"){

        imagen.classList.remove(imagen.classList[0])
        imagen.classList.add(tamanioImagen)
    
    }else if(tamanioImagen==="grande"){

        imagen.classList.remove(imagen.classList[0])
        imagen.classList.add(tamanioImagen)
    
    }else{
        imagen.classList.add("imagen")
    }
    
