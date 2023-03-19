const chooseNumber = Number(prompt("Digite um número"))
document.body.innerHTML = `Raiz quadrada de ${chooseNumber} é ${Math.sqrt(chooseNumber)} <br>`
document.body.innerHTML += `${chooseNumber} é inteiro? ${Number.isInteger(chooseNumber)} <br>`
document.body.innerHTML += `${chooseNumber} é NaN? ${Number.isNaN(chooseNumber)} <br>`
document.body.innerHTML += `${chooseNumber} arredondado para cima: ${Math.round(chooseNumber)} <br>`
document.body.innerHTML += `${chooseNumber} arredondado para para baixo: ${Math.floor(chooseNumber)} <br>`
document.body.innerHTML += `${chooseNumber} com duas casas decimais: ${chooseNumber.toFixed(2)} <br>`