import React from 'react';

class Inputs extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
    }
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    const { name, email } = this.state
    return (
      <div>
        <h1>Teste inputs</h1>
        <p>
          Nome:
          <input
          data-testid='input-name'
            name='name'
            onChange={ (event) => this.handleInput(event) }
            value={ name }
          />
        </p>
        <p>
          E-mail:
          <input
            data-testid='input-email'
            name='email'
            onChange={this.handleInput}
            value={ email }
          />
        </p>
      </div>
    )
  }
}

export default Inputs;