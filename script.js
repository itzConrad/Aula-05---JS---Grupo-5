const tarefas = document.querySelector("div#tarefas");

const registrar = document.forms.registro;
registrar.addEventListener("submit", function (e) {
    e.preventDefault();

    // valida para não adicionar campos vazios
    if (registrar.tarefa.value.trim().length === 0) {
        return;
    }

    const p = document.createElement("p");
    p.innerText = registrar.tarefa.value.trim();

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    const dados = document.createElement("div");
    dados.classList.add("dados");
    dados.append(checkbox, p);
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            div.style.backgroundColor = "green";
        } else {
            div.style.backgroundColor = "";
        }
    });

    const remover = document.createElement("button");
    remover.innerText = "Remover";
    remover.onclick = function () {
        if (checkbox.checked) {
            tarefas.removeChild(div);
        }

    }


    const div = document.createElement("div");
    div.classList.add("item");
    div.append(dados, remover);

    tarefas.appendChild(div);
    registrar.tarefa.value = "";
});