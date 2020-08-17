let calcularFps = (fps, minutos)=>{
return fps * (minutos*60)
}

let fps = Number(prompt("cantidad de FPS"))
let minutos = Number(prompt("cantidad de Minutos"))

console.log(calcularFps(fps, minutos))