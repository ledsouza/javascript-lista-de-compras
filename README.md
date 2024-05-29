# Lista de Compras
![Static Badge](https://img.shields.io/badge/Status-Finalizado-green)

Este projeto é um CRUD (Criar, Ler, Atualizar, Deletar) completo para uma lista de compras, desenvolvido durante um curso da Alura. A aplicação permite adicionar, remover e editar itens da lista, utilizando JavaScript para manipular o DOM e o Local Storage do navegador para persistir os dados.

<img width="944" alt="image" src="https://github.com/ledsouza/javascript-lista-de-compras/assets/56280624/78a168e0-a8dc-4d31-9aac-618babe2f951">

## Tecnologias Utilizadas

- **HTML:** Estrutura da página e elementos da lista.
- **CSS:** Estilização da lista e elementos visuais.
- **JavaScript:** Lógica de manipulação do DOM, interação com o usuário e persistência dos dados no Local Storage.

## Descrição Detalhada

A aplicação é composta por uma interface simples e intuitiva, onde o usuário pode:

1. **Adicionar Itens:**
   - Um campo de entrada permite ao usuário digitar o nome do item.
   - Um botão "Salvar item" aciona a função que adiciona o item à lista.
   - O item é exibido na lista com um checkbox para marcar como concluído e um botão para remover e editar.

2. **Remover Itens:**
   - Cada item da lista possui um botão "Remover".
   - Ao clicar no botão, o item é removido da lista e do Local Storage.

3. **Editar Itens:**
   - Cada item da lista pode ser editado clicando no botão de remoção.
   - O texto do item se torna editável e um botão "Salvar" aparece.
   - Ao clicar em "Salvar", o novo texto é armazenado no Local Storage e a lista é atualizada.

4. **Marcar Itens como Concluídos:**
   - Cada item possui um checkbox que permite marcá-lo como concluído.
   - A aparência do item muda para indicar que foi concluído.

5. **Persistência de Dados:**
   - Os dados da lista (itens, status de conclusão) são armazenados no Local Storage do navegador.
   - Ao recarregar a página, a lista é restaurada com os dados armazenados.

**Observação:** Este projeto foi desenvolvido com foco no aprendizado das tecnologias básicas do frontend. Ele pode ser expandido e aprimorado para se tornar uma aplicação mais completa e robusta.
