function mostraHora() {
    const data = new Date;
    return data.toLocaleTimeString()
}


setInterval(() => {
    console.log(mostraHora())
}, 1000)
