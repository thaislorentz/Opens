# opens

## Iniciar o projeto
```
yarn install
```

### Compilar o projeto
<p align="center">Para iniciar a FakeApi basta rodar o comando</p>
```
json-server db.json
```
<p align="center">Para iniciar o projeto</p>
```
yarn serve
```

## Descrição do Projeto
<h1 align="center">Hamburger</h1>
<p align="center">O projeto desenvolvido para este desafio é um site de uma empresa de fast-food que se chama Hamburger.
A aplicação consiste em uma landing page, um cardápio e um checkout.
Para inicializar o projeto criei uma proposta de tela no figma abordando alguns conceitos de usabilidade deixando a aplicação fácil de se navegar. 
Acesso no link abaixo:</p>
<h1 align="center">
<a href="https://www.figma.com/file/dNc2zpMwgCXwXUaRBTl9mI/Untitled?node-id=0%3A1">🔗 FIGMA</a>
</h1>

### Descrição do projeto
<p>
A aplicação se inicia na landing page que é a página que levará o visitante ao cardápio.
O cardápio tem as funções de filtrar um item especifico, adicionar no pedido o item e fechar o pedido.
(O filtro filtra pelo nome ou descrição)
Para finalizar o pedido basta preenchendo um formulário de checkout
</p>


<p align="center">
Finalizado o processo de criação no figma comecei a desenvolver o front end usando VUE, SASS, AXIOS.
Os componentes que foram criados para serem reutilizados foram os componentes de botão, card, input, rodapé e o pedido.
</p>
<p>
Os métodos usados junto com o axios foram os get, post e delete.
</p>
<p>
O checkout foi usado o VUEX para poder salvar os dados do cliente a cada etapa que ele passa. Na etapa terceira etapa foi utilizado a api externa do viacep para preencher automático o formulário.
</p>