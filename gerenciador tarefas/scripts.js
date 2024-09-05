const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const listaCompleta = document.querySelector('.list-task');

let minhaListaItens = [];


function adicionarNovaTarefa() {
    if (input.value.trim() === '') {
        return;
    }
    minhaListaItens.push({ tarefa: input.value, concluida: false });
    input.value = '';
    mostrarTarefas();
}


function mostrarTarefas() {
    let novaLi = '';
    minhaListaItens.forEach((tarefa, index) => {
        novaLi += `<li class="task ${tarefa.concluida && "done"}" >
                <img src="./img/checked.png" alt="Check-na-tarefa" onclick="concluirTarefa(${index})">
                <p>${tarefa.tarefa}</p>
                <img src="./img/trash.png" alt="Deletar-tarefa" onclick="DeletarItem(${index})">
            </li>`;
    });

    listaCompleta.innerHTML = novaLi;
    localStorage.setItem('lista', JSON.stringify(minhaListaItens))
}

function concluirTarefa(index) {
    minhaListaItens[index].concluida = !minhaListaItens[index].concluida;
    mostrarTarefas()
}



function DeletarItem(index) {
    minhaListaItens.splice(index, 1)
    mostrarTarefas()
}

function recarregarTela() {
    const tarefasLocalStorage = localStorage.getItem('lista')
    if(localStorage){

    minhaListaItens = JSON.parse(tarefasLocalStorage)
    console.log(localStorage) }
    mostrarTarefas() 
}
recarregarTela()

button.addEventListener('click', adicionarNovaTarefa);
