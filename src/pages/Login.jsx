import React, { Component } from 'react';
import PropType from 'prop-types';

export default class Login extends Component {
  state = {
    name: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { name } = this.state;
    const { history } = this.props;
    localStorage.setItem('user', name);
    history.push('/home');
  };

  render() {
    const { name } = this.state;
    const min = 3;
    return (
      <div
        className="bg-zinc-800 text-zinc-300
       flex items-center justify-center w-screen h-screen"
      >
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51e53f54-0d9f-40ec-9e05-c030def06ac9/5ce0ee63-07e5-462b-adfc-a10535f54e0f/BR-pt-20230515-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Backgroud Login"
          className="absolute w-screen h-screen brightness-[40%]"
        />
        <form
          className="bg-black/70 rounded-md justify-center
          p-6
         gap-4 w-[35%] flex flex-col h-[30%] z-10"
        >
          <p className="text-3xl font-bold">Entrar</p>
          <input
            className="bg-zinc-500 rounded-md
            ps-5
            placeholder:text-zinc-300 p-2"
            type="text"
            placeholder="Nome"
            name="name"
            value={ name }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            className="bg-red-600 font-bold rounded-md
            ease-in duration-200
             p-2 text-zinc-200 disabled:bg-zinc-700
             disabled:cursor-not-allowed hover:bg-red-500"
            disabled={ name.length < min }
            onClick={ this.handleSubmit }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = PropType.shape({}).isRequired;
