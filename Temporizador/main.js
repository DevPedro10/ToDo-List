function getTimeFromSeconds(s) {
    let data = new Date(s * 1000);
    return data.toLocaleTimeString('pt-BR', {
    timeZone: 'UTC'
    });
};

let relogio = document.querySelector("#relogio");
let iniciar = document.querySelector("#iniciar");
let pausar = document.querySelector("#pausar");
let zerar = document.querySelector("#zerar");
let segundos = 0;
let timer;

function startTime() {
    timer = setInterval(() => {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos)
    }, 1000)
}


iniciar.addEventListener("click", (event) => {
    relogio.style.color = "white"
    clearInterval(timer)
    startTime()
})

pausar.addEventListener("click", (event) => {
    relogio.style.color = "red"
    clearInterval(timer);
})


zerar.addEventListener("click", (event) => {
    relogio.style.color = "white"
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    segundos = 0;
})


console.log(getTimeFromSeconds(segundos))