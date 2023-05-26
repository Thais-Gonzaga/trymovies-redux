# Boas-vindas ao repositório do projeto Trymovies!

<details>
  <summary><strong>👨‍💻 O que será desenvolvido</strong></summary><br />

  Neste projeto você irá criar o Trybemovies, uma aplicação capaz de exibir filmes, criar uma lista de filmes favoritos e fazer Login . Essa aplicação será capaz de:

  - Fazer login;
  - Pesquisar por um filme;
  - Visualizar os detalhes de um filme selecionado;
  - Favoritar e desfavoritar os filmes;
  - Ver a lista de filmes favoritas;

</details>

<details>
  <summary><strong> Habilidades</strong></summary><br />

Neste projeto, verificamos se você é capaz de:

- Fazer requisições e consumir dados vindos de uma `API`;

- Utilizar os ciclos de vida de um componente React;

- Utilizar a função `setState` de forma a garantir que um determinado código só é executado após o estado ser atualizado

- Utilizar o componente `BrowserRouter` corretamente;

- Criar rotas, mapeando o caminho da URL com o componente correspondente, via `Route`;

- Utilizar o `Switch` do `React Router`

- Criar links de navegação na aplicação com o componente `Link`;
</details>

# Requisitos

## 1. Crie as rotas necessárias para a aplicação

Para poder fazer uso de React Router, é preciso que se instale em uma aplicação React o pacote react-router-dom:

```bash
    npm install react-router-dom@v5
  ```
Você deve utilizar o `BrowserRouter` pra criar as rotas da sua aplicação e cada rota deverá renderizar um componente específico. Crie cada componente dentro da pasta `src/pages`, conforme o indicado abaixo:

<details><summary>  ⚠️ DICA</summary>
"Route exact path="/about" component={ About } "
</details>

<details><summary> Rota <code>/</code></summary>
- A rota `/` deve renderizar um componente chamado `Login`.
</details>

<details><summary> Rota <code>/home</code></summary>

- A rota `/home` deve renderizar um componente chamado `Home`;
</details>

<details><summary> Rota <code>/movies/:id</code></summary>

- A rota `/movies/:id` deve renderizar um componente chamado ` MovieDetail `.
</details>

<details><summary> Rota <code>/favorites</code></summary>

- A rota `/favorites` deve renderizar um componente chamado `Favorites`.
</details>

## 2. Crie um formulário para identificação
<details><summary>Dentro da page <code>Login</code>, que é renderizado na rota <code>/</code>, crie um formulário para que a pessoa usuária se identifique com um nome:</summary>

- Você deve criar um campo para que a pessoa usuária insira seu nome.

- Crie um botão com o texto `Entrar`.

- O botão para entrar só deve estar habilitado caso o nome digitado tenha 3 ou mais caracteres.

- Ao clicar no botão `Entrar`, deve salvar o nome digitado no localStorage com o nome da chave 'user'.

- Após a informação ter sido salva, faça um redirect para a rota `/home`.
</details>

## 3. Crie um componente de cabeçalho

<details><summary>Crie um componente chamado <code>Header</code>, dentro da pasta <code>src/components</code>:</summary>

- Crie esse componente com a tag `header` envolvendo todo seu conteúdo.

- Recupere o nome da pessoa logada e exiba essa informação na tela.

- Renderize o componente de cabeçalho na página da rota `/home`;
</details>


## ⚠️  Requisição a API dos filmes ⚠️ 
<details><summary>Crie um arquivo<code>MoviesApi</code>, dentro da pasta <code>src/services</code>:</summary>

- No arquivo MoviesApi.js, crie as funções que fazem requisição a API de filmes. A API themoviedb é gratuita e precisa fazer cadastro para conseguir utilizar, desta forma receberá uma key que deve ser utilizada na url. Segue algumas informações sobre a API:

- documentação:
```bash
   https://api.themoviedb.org
  ```

- requisição para filmes mais procurados da semana:
```bash
   `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`
  ```
- requisição para um filme pelo id:
```bash
  `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
  ```
- requisição para um filme buscado pelo nome:
```bash
  `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`
  ```

</details>


## 4. Faça a requisição para pesquisar os filmes
<details><summary>Dentro da page <code>Home</code>, crie uma função para que faça uma requisição dos filmes mais procurados da semana:</summary>

<details><summary>Crie um componente chamado <code>MovieCard</code>, dentro da pasta <code>src/components</code>:</summary>

- Crie esse componente com a tag `p` que deve conter o titulo do filme.

- Crie esse componente com a tag `img` que deve conter o poster do filme.
  <details><summary>  ⚠️ DICA</summary>
  Para exibir a imagem, deve colocar desta forma na src:

  ```bash
    `https://image.tmdb.org/t/p/w500${poster_path}`
    ```
  </details>

</details>

 - Renderize o componente MovieCard na página da rota `/home` passando as informações dos filmes como props;

 - Exiba na tela o titulo do filme e a imagem.

 -* Enquanto aguarda exiba a mensagem `Carregando...` na tela.

</details>

## 5. Crie a página de detalhes do filme selecionado
<details><summary>Dentro da page <code>MovieDetail</code>, exiba o detalhes somente do filme selecionado</summary>

 - Ao clicar em um filme da rota Home, faça um redirect para a rota `/movie/:id` desse filme selecionado.

- Faça uma requisição apenas do filme selecionado

* Enquanto aguarda a resposta da API exiba a mensagem `Carregando...` na tela.

- Deve exibir a imagem de fundo, titulo e a descrição do filme selecionado
  
  <details><summary>  ⚠️ DICA</summary>
  Para exibir a imagem, deve colocar desta forma na src:

  ```bash
    `https://image.tmdb.org/t/p/original/${backdrop_path}`
    ```
  </details>

</details>

## 6. Crie o componente para pesquisar o filme desejado
Este componente deve conter um input e um botão para que seja possível pesquisar os filmes.
<details><summary>Crie um componente chamado <code>Search</code>, dentro da pasta <code>src/components</code>:</summary>

- Crie um campo para pessoa digitar o nome do filme a ser pesquisado.

- Crie um botão com o texto `Procurar`.

- Renderize o componente de pesquisa no componente `Header`.
</details>

## 7. Faça a requisição para pesquisar os filmes
<details><summary>Dentro da page <code>Home</code>, crie uma função para que
faça uma requisição para o filme que deseja pesquisar pelo nome:</summary>

* Após receber a resposta da requisição, deve renderizar no componente MovieCard somente o filme pesquisado.

* Enquanto aguarda a resposta da API, esconda o input e o botão de pesquisa e exiba a mensagem `Carregando...` na tela.
</details>

## 8. Crie o mecanismo para adicionar e remover os filmes na lista de filmes favoritas
<details><summary>Dentro do componente <code>MovieCard</code>, crie um input do tipo checkbox para marcar os filmes favoritos</summary>

- Deve existir um checkbox para cada filme da lista;

- Ao clicar no checkbox, deve salvar no localStorage as informações do filme;

</details>

## 9. Crie a lista de filmes favoritas
<details><summary> Crie a lista dentro do componente <code>Favorites</code></summary>

- Ao entrar na página, recupere a lista de filmes favoritas.

- Enquanto aguarda a resposta, exiba a mensagem Carregando...

- Após receber o retorno da lista de favoritas, utilize o componente MovieCard para renderizar a lista de filmes favoritos.

- Nesta página deve ser possível desfavoritar os filmes

- A lista de filmes favoritos é atualizada ao remover um filme da lista.

</details>
