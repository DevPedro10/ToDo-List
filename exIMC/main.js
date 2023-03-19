const form = document.getElementsByTagName("form")[0].addEventListener("submit", (event) => {
    event.preventDefault();
});
const calcBtn = document.querySelector("#calcular");

calcBtn.addEventListener("click", () => {
    let peso = document.querySelector("#peso").value
    peso = Number(parseFloat(peso))
    let altura = document.querySelector("#altura").value;
    altura = Number(parseFloat(altura))
    let retornoCalculo = document.querySelector("#retornoCalculo");
    
    let calculoImc = peso / (altura*altura);

    if(calculoImc <= 18.5) {
        retornoCalculo.innerHTML = `IMC: ${calculoImc.toFixed(2)} - Abaixo do peso`
        retornoCalculo.style.background = "red"
    } else if(calculoImc >= 18.5 && calculoImc <= 24.9) {
        retornoCalculo.innerHTML = `IMC: ${calculoImc.toFixed(2)} - Peso Normal`
        retornoCalculo.style.background = "green"
    } else if(calculoImc >= 25 && calculoImc <= 29.9) {
        retornoCalculo.innerHTML = `IMC: ${calculoImc.toFixed(2)} - Acima do Peso`
        retornoCalculo.style.background = "yellow"
    } else if(calculoImc >= 30 && calculoImc <= 34.9) {
        retornoCalculo.innerHTML = `IMC: ${calculoImc.toFixed(2)} - Obesidade grau 1`
        retornoCalculo.style.background = "red"
    } else if(calculoImc >= 35 && calculoImc <= 39.9) {
        retornoCalculo.innerHTML = `IMC: ${calculoImc.toFixed(2)} - Obesidade grau 2`
        retornoCalculo.style.background = "red"
    } else if(calculoImc > 40) {
        retornoCalculo.innerHTML = `IMC: ${calculoImc.toFixed(2)} - Obesidade grau 3`
        retornoCalculo.style.background = "red"
    }
})

