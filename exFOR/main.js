const retorno = document.querySelector("#retorno");
const elementos = [
    { "tag": "p", "texto": "Frase 1" },
    { "tag": "div", "texto": "Frase 2" },
    { "tag": "footer", "texto": "Frase 3" },
    { "tag": "section", "texto": "Frase 4" }
];


for(const i in elementos) {
    const {tag, texto} = elementos[i];
    const createDiv = document.createElement(tag);
    const textoObj = document.createTextNode(texto);
    createDiv.appendChild(textoObj);
    retorno.appendChild(createDiv);
};