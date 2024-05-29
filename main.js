let listaDeItens = getLocalStorage();
let itemAEditar;

const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receber-item");
const ulItens = document.getElementById("lista-de-itens");
const ulItensComprados = document.getElementById("itens-comprados");

mostrarItens();

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    salvarItem();
    mostrarItens();
    itensInput.focus();
});

function salvarItem() {
    const comprasItem = itensInput.value;
    const checarDuplicado = listaDeItens.some(
        (item) => item.valor.toUpperCase() === comprasItem.toUpperCase()
    );

    if (checarDuplicado) {
        alert("O item já existe!");
    } else {
        listaDeItens.push({
            valor: comprasItem,
            checar: false,
        });
    }

    itensInput.value = "";
}

function mostrarItens() {
    ulItens.innerHTML = "";
    ulItensComprados.innerHTML = "";

    listaDeItens.forEach((item, index) => {
        if (item.checar) {
            ulItensComprados.innerHTML += `
            <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
                <div>
                    <input type="checkbox" checked class="is-clickable" />  
                    <span class="itens-comprados is-size-5">${item.valor}</span>
                </div>
                <div>
                    <i class="fa-solid fa-trash is-clickable deletar"></i>
                </div>
            </li>
            `;
        } else {
            ulItens.innerHTML += `
            <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
                <div>
                    <input type="checkbox" class="is-clickable" />
                    <input type="text" class="is-size-5" value="${item.valor}" ${
                index !== Number(itemAEditar) ? "disabled" : ""
            }></input>
                </div>
                <div>
                    ${
                        index === Number(itemAEditar)
                            ? '<i class="fa-regular fa-floppy-disk is-clickable salvar"></i>'
                            : '<i class="fa-regular is-clickable fa-pen-to-square editar"></i>'
                    }
                    <i class="fa-solid fa-trash is-clickable deletar"></i>
                </div>
            </li>
            `;
        }
    });

    const inputsCheck = document.querySelectorAll("input[type='checkbox']");
    inputsCheck.forEach((input) => {
        input.addEventListener("click", (evento) => {
            const valorElemento =
                evento.target.parentElement.parentElement.getAttribute("data-value");
            listaDeItens[valorElemento].checar = evento.target.checked;
            mostrarItens();
        });
    });

    const deletarItens = document.querySelectorAll(".deletar");
    deletarItens.forEach((item) => {
        item.addEventListener("click", (evento) => {
            const valorElemento =
                evento.target.parentElement.parentElement.getAttribute("data-value");
            listaDeItens.splice(valorElemento, 1);
            mostrarItens();
        });
    });

    const salvarItem = document.querySelectorAll(".salvar");
    salvarItem.forEach((item) => {
        item.addEventListener("click", () => {
            try {
                const itemEditado = document.querySelector(
                    `[data-value="${itemAEditar}"] input[type="text"]`
                );
                listaDeItens[itemAEditar].valor = itemEditado.value;
                itemAEditar = -1;
                mostrarItens();
            } catch (error) {
                if (error instanceof TypeError) {
                    console.log("É necessário clicar primeiro no botão de edição.");
                }
            }
        });
    });

    const editarItens = document.querySelectorAll(".editar");
    editarItens.forEach((item) => {
        item.addEventListener("click", (evento) => {
            itemAEditar = evento.target.parentElement.parentElement.getAttribute("data-value");
            mostrarItens();
            document.querySelector(`[data-value="${itemAEditar}"] input[type="text"]`).focus();
        });
    });

    atualizarLocalStorage();
}

function atualizarLocalStorage() {
    localStorage.setItem("listaDeItens", JSON.stringify(listaDeItens));
}

function getLocalStorage() {
    const itens = JSON.parse(localStorage.getItem("listaDeItens"));
    return itens ? itens : [];
}
