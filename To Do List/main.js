const btnCreateTask = document.querySelector("#createTask");
const listDiv = document.querySelector("#listDiv");
let conteudo = document.querySelector("#conteudo");

let ulTag = document.createElement("ul");

btnCreateTask.addEventListener("click", (event) => {
    let liTag = document.createElement("li");
    liTag.textContent = conteudo.value;
    let btnDeleteTask = document.createElement("button");
    btnDeleteTask.textContent = "Delete"
    liTag.appendChild(btnDeleteTask)
    ulTag.appendChild(liTag)
    listDiv.appendChild(ulTag)

    localStorage.setItem("lista", listDiv)
    
    
    btnDeleteTask.addEventListener("click", () => {
        liTag.style.display = "none"
    });
});

window.addEventListener("load", ()=> {
    const getDataInWebBrowser = localStorage.getItem("lista")


});


