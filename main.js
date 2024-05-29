let listaDeItens = [];

const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receber-item");
const ulItens = document.getElementById("lista-de-itens");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    salvarItem();
    mostrarItens();
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
        });
    }
}

function mostrarItens() {
    ulItens.innerHTML = "";
    listaDeItens.forEach((item) => {
        ulItens.innerHTML += `
        <li class="item-compra is-flex is-justify-content-space-between" data-value="">
            <div>
                <input type="checkbox" class="is-clickable" />
                <input type="text" class="is-size-5" value="${item.valor}"></input>
            </div>
            <div>
                <i class="fa-solid fa-trash is-clickable deletar"></i>
            </div>
        </li>
        `;
    });
}
