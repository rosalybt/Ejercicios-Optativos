const obtenerSubReddit = (url)=>{


    return url.slice(25, url.length-1)

}

console.log(obtenerSubReddit("https://www.reddit.com/r/javascript/"))