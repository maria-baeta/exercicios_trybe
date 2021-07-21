import React from 'react'
import './InputsText.css'
import States from './data'


class People extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      housing: '',
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
  }

  handleInput(event) {
    console.log(event.target)
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })

  }

  handleSelect(event) {
    this.setState({ state: event.target.value })
  }

  handleRadio(event) {
    // console.log(event.target.value)
    this.setState({ housing: event.target.value })
  }
  render() {
    return (
      <fieldset>
        <legend>Dados pessoais</legend>
        <label>Nome</label>
        <input maxLength="40" equired name='name' value={this.state.name} onChange={(event) => this.handleInput(event)} />
        <label>Email</label>
        <input maxLength="50" required name='email' value={this.state.email} onChange={(event) => this.handleInput(event)} />
        <label>Cpf</label>
        <input maxLength="11" required name='cpf' value={this.state.cpf} onChange={(event) => this.handleInput(event)} />
        <label>Endereço</label>
        <input maxLength="28" required name='address' value={this.state.address} onChange={(event) => this.handleInput(event)} />
        <label>Cidade</label>
        <input required name='city' value={this.state.city} onChange={(event) => this.handleInput(event)} />
        <label>Estado</label>
        <select value={this.state.state} onChange={this.handleSelect} required>
          <option >Selecione:</option>
          {States.map((estado) => (<option value={estado}>{estado}</option>))}
        </select>
        <div onChange={(event) => this.handleRadio(event)}>
          <input type='radio' value='casa' name='housing' /> Casa
          <input type='radio' value='apartamento' name='housing' /> Apartamento
        </div>
      </fieldset>
    )
  }
}

export default People;
