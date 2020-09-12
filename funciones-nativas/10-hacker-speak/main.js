const hackerSpeak = (texto)=>{
texto = texto.replace(/i/gi,"1")
texto = texto.replace(/e/gi,"3")
texto = texto.replace(/a/gi,"4")
texto = texto.replace(/s/gi,"5")
texto = texto.replace(/0/gi,"0")

return texto
}

console.log(hackerSpeak("javascript"))