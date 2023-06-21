# Boas-vindas ao repositório do projeto Trymovies Redux!

<details>
  <summary><strong>👨‍💻 O que será desenvolvido</strong></summary><br />

  Neste projeto você será capaz de refatorar o Trybemovies usando Redux, uma aplicação capaz de exibir filmes, criar uma lista de filmes favoritos e fazer Login.

</details>

<details>
  <summary><strong>Habilidades</strong></summary><br />

Neste projeto, verificamos se você é capaz de:

- Criar um _store_ Redux em aplicações React

- Criar _reducers_ no Redux em aplicações React

- Criar _actions_ no Redux em aplicações React

- Criar _dispatchers_ no Redux em aplicações React

- Conectar Redux aos componentes React

- Criar _actions_ assíncronas na sua aplicação React que faz uso de Redux.
</details>

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:Josieljcc/movies-react-tailwindcss.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd movies-react-tailwindcss`

  2. Instale as dependências

  - `npm install`.
  
</details>

<details>
  <summary><strong>Checklist do Redux</strong></summary><br />

  Neste projeto, vamos usar o [O melhor checklist de Redux de todos os tempos!](https://gist.github.com/ANDREHORMAN1994/dbcd4e60b0737a70f819c7dfab4c02b5). Como já temos uma aplicação em react, segue com algumas alterações:

  <details>
    <summary><strong>Checklist</strong></summary><br />
  # Checklist do Redux

  *Instalação*
  - [ ] `npm install redux-thunk --save`;
  - [ ] `npm install --save redux react-redux`;
  - [ ] `npm install --save @redux-devtools/extension`;

  *Criar dentro do diretório `src`:*
  - [ ] diretório `redux`

  *Criar dentro do diretório `redux`*
  - [ ] arquivo `store.js`
  - [ ] diretório `actions`
  - [ ] diretório `reducers`

  *Criar dentro do diretório `actions`:*
  - [ ] arquivo `index.js`.

  *Criar dentro do diretório `reducers`:*
  - [ ] arquivo `index.js`.
  - [ ] arquivo `user.js`.
  - [ ] arquivo `favorites.js`.

  *Criar dentro do arquivo `redux/store.js`:*
  - [ ] importar o createStore
  - [ ] configurar o [Redux DevTools](https://github.com/reduxjs/redux-devtools)
  - [ ] importar o rootReducer
  - [ ] criar e exportar a store

  Exemplo:

   ```js
  // COM O THUNK
  import { legacy_createStore as createStore, applyMiddleware } from 'redux';
  import { composeWithDevTools } from '@redux-devtools/extension';
  import thunk from 'redux-thunk';
  import rootReducer from '../reducers';

  const middleware = applyMiddleware(thunk);
  const store = createStore(rootReducer, composeWithDevTools(middleware));

  export default store;
  ```

  *Criar dentro do arquivo `redux/reducers/index.js`:*

  - [ ] criar `rootReducer` usando o `combineReducers`
  - [ ] exportar `rootReducer`

  // ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "favorites" no seu estado global

  Exemplo:

  ```js
  import { combineReducers } from 'redux';
  import exampleReducer from './exampleReducer';

  const rootReducer = combineReducers({ exampleReducer })

  export default rootReducer;
  ```
*Criar dentro do arquivo `redux/reducers/exampleReducer`:*

  - [ ] estado inicial
  - [ ] criar função reducer com `switch` retornando apenas a opção `default`

 Exemplo:

  ```js

const INITIAL_STATE = {};

const exampleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
   default: return state;
  }
};

export default exampleReducer;
  ```

*No arquivo `index.js`:*
  - [ ] importar a `store`
  - [ ] importar o `Provider`, para fornecer os estados a todos os componentes encapsulados pelo `<App />`

  Exemplo:

  ```js
  // Na importação
  import { Provider } from 'react-redux';
  import store from './redux/store'
  ```

  ```js
  // No render
   <Provider store={ store } >
     <App />
   </Provider>
  ```

  *Na pasta `actions/index.js`:*
  - [ ] criar e exportar os actionTypes

  Exemplo:

  ```js
  // ACTIONS TYPES
  export const ADD_NAME = 'ADD_NAME';
  ```

  - [ ] criar e export os actions creators necessários

  Exemplo:

  ```js
  // ACTIONS CREATORS
  export const addName = (userName) => ({
    type: ADD_NAME,
    userName,
  })
  ```

  *Nos reducers:*
  - [ ] criar os casos para cada action criada, retornando o devido estado atualizado

  *Nos componentes que irão ler o estado:*
  - [ ] criar a função `mapStateToProps`
  - [ ] exportar usando o `connect`

  ```js
  // No import
  import { connect } from 'react-redux';

  // Acesso ao estado global
  const mapStateToProps = (state) => ({
    userName: state.user.userName,
  });

  // No export
  export default connect(mapStateToProps)(Component)
  ```

  *Nos componentes que irão modificar o estado:*
  - [ ] Importar a action creator a ser utilizada
  - [ ] Desconstruir o dispatch via props
  - [ ] Utilizar a função dispatch para enviar a action ao reducer

  ```js
  // No import
  import { addName } from '../redux/actions';

  // Disparando a action
  const handleClick = () => {
    const { dispatch } = this.props;
    dispatch(addName('teste'));
  }
  ```
  </details>

</details>

# Requisitos


---

## Página de Login

No Trymovies, salvamos no localStorage o nome da pessoa usuária, certo? Agora, precisamos salvar no estado global.

## 1. Salve o nome e o email no estado global da aplicação

  - Crie um input para pessoa usuária digitar o email;
  - O email precisa estar em um formato válido, como 'alguem@alguem.com';
  - Salve o nome da pessoa usuária no estado global da aplicação, com a chave **_userName_**, assim que a pessoa usuária _logar_;
  - Salve o email da pessoa usuária no estado global da aplicação, com a chave **_userEmail_**, assim que a pessoa usuária _logar_;

---

## Componente Header

No Trymovies, pegavamos do localStore a informação da pessoa logada e renderizava na tela. Agora, vamos pegar do estado global a informação.

## 2. Exibir o nome e o email da pessoa usuária que fez login:

  - você deve pegar o nome e o email do estado global da aplicação (no Redux) e renderizar na tela.

---
## Favoritos

## DESAFIO.Refatore os favoritos para o estado global: 

 - No Trymovies, salvamos o array com as informações dos filmes favoritos no localStorage, certo? 
  Agora, nosso desafio é refatorar com estado global

