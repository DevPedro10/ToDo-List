let inputTarefa = document.querySelector("#conteudo");
const botaoCriaTarefa = document.querySelector("#createTask");
let retornoDiv = document.querySelector("#listDiv");




function createItemList(value) {
    let li = document.createElement("li");
    li.textContent = value;
    li.appendChild(createDeleteButton());
    return li;
}

function createTask(element) {
let showValue = createItemList(element);    
retornoDiv.appendChild(showValue);
}

function createDeleteButton() {
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "deleteBtn");
    deleteBtn.textContent = "Apagar";
    return deleteBtn;
}

botaoCriaTarefa.addEventListener("click", createTask);
document.addEventListener("keypress", (e) => {
    if(e.key == 'Enter') {
        createTask(inputTarefa.value);
        inputTarefa.value = '';
        guardaTarefas()

    }
})

document.addEventListener("click", (e) => {
    const element = e.target
    if(element.classList.contains("deleteBtn")) {
        element.parentElement.remove();
        guardaTarefas()
    }
})


function guardaTarefas() {
    let itensLista = new Array()
    const tarefas = retornoDiv.querySelectorAll("li");
    for(let tarefa of tarefas) {
        tarefa = tarefa.innerText.replace('Apagar', ' ');
        itensLista.push(tarefa);
    }
    let parseString = JSON.stringify(itensLista);
    localStorage.setItem("tarefa", parseString)
    console.log(parseString)
    return parseString;
}

function adicionaTarefasSalvar() {
    const pegaTarefa = localStorage.getItem("tarefa");
    const parseArray = JSON.parse(pegaTarefa);
    
    for(let tarefa of parseArray) {
        createTask(tarefa)
        // console.log(tarefa)
    }

}

console.log(adicionaTarefasSalvar())