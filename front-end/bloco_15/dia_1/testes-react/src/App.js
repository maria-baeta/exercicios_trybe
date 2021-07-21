import React, { Component } from 'react';
import ValidEmail from './component/ValidEmail'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      email:'',
      saveEmail: '',
    }
  }

  changeEmail = (event) => {
    const { value } = event.target;
    this.setState({
      email:value,
    })
  }

  changeSaveEmail = (value) => {
    // const { value } = event.target;
    this.setState({
      saveEmail:value,
      email:'',
    })
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
     </label>
        <input
          id="id-email"
          value={email} 
          type="email" 
          onChange={ this.changeEmail }
          />
        <input
          data-testid='id-send' 
          id='btn-send'
          onClick={ () => this.changeSaveEmail(email) } 
          type='button' 
          value='Enviar' />
        <input id='btn-back' type='button' value='Voltar' />
        <ValidEmail email={saveEmail}/>
      </div>
    );
  }
}

export default App;
