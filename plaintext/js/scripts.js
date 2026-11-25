// pegando os elementos da página
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// cria uma tarefa nova na lista
function adicionarTarefa() {
    const texto = taskInput.value.trim();

    if (texto == '') {
        alert('Digite uma tarefa!');
        return;
    }

    const li = document.createElement('li');

    // texto da tarefa
    const span = document.createElement('span');
    span.textContent = texto;

    // botão de concluir
    const btnFeita = document.createElement('button');
    btnFeita.innerHTML = '<i class="fa-solid fa-check"></i>';
    btnFeita.addEventListener('click', function () {
        li.classList.toggle('feita');
    });

    // botão de editar
    const btnEditar = document.createElement('button');
    btnEditar.innerHTML = '<i class="fa-solid fa-pen"></i>';
    btnEditar.addEventListener('click', function () {
        const novoTexto = prompt('Editar tarefa:', span.textContent);
        if (novoTexto != null && novoTexto.trim() != '') {
            span.textContent = novoTexto.trim();
        }
    });

    // botão de excluir
    const btnExcluir = document.createElement('button');
    btnExcluir.innerHTML = '<i class="fa-solid fa-trash"></i>';
    btnExcluir.addEventListener('click', function () {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(btnFeita);
    li.appendChild(btnEditar);
    li.appendChild(btnExcluir);
    taskList.appendChild(li);

    taskInput.value = '';
}

// clicar no botão +
addBtn.addEventListener('click', adicionarTarefa);

// apertar Enter no campo
taskInput.addEventListener('keyup', function (evento) {
    if (evento.key == 'Enter') {
        adicionarTarefa();
    }
});
