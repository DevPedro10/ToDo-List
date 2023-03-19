
document.getElementsByTagName("form")[0].addEventListener('submit', (evento) => {
    evento.preventDefault()
}); //Retira o refresh ao enviar os dados

const btn = document.getElementsByTagName("button")[0];

const array = new Array ();


btn.addEventListener("click", () => {
    const nome = document.querySelector("#nome").value;
    const sobrenome = document.querySelector("#sobrenome").value;
    const peso = document.querySelector("#peso").value;
    const altura = document.querySelector("#altura").value;

    const objeto = {
        nome,
        sobrenome,
        peso,
        altura
    }
    
    array.push(objeto)
    alert("Dados enviados e salvos.")
    console.log(array)    

})







