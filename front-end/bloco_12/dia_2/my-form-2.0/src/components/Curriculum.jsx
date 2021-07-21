import React from 'react';

class Curriculum extends React.Component {
  constructor() {
    super()
    this.state = {
      review: 'Por favor, escreva um resumo do seu Curriculum!',
      office: 'Por favor, informe seu ultimo ',
      description: 'Por favor, descreva seu último cargo',
      mouse: false,
    }

    this.handleReview = this.handleReview.bind(this);
    this.handleonMouseEnter = this.handleonMouseEnter.bind(this);
  }

  handleReview(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleonMouseEnter() {
      if (this.state.mouse === false) {
      alert('Preencha com cuidado esta informação.')
      this.setState({ mouse: true })
    }
  }


  render() {
    return (
      <fieldset>
        <legend>Curriculum</legend>
        <label>Resumo do Curriculum</label>
        <textarea maxLength='1000' required value={this.state.review} name='review' onChange={(event) => this.handleReview(event)} />
        <label>Último cargo:</label>
        <textarea maxLength='40' required value={this.state.office} name='office' onChange={(event) => this.handleReview(event)} onMouseEnter={this.handleonMouseEnter} />
        <label>Descrição do último cargo:</label>
        <input type="text" maxLength='500' required value={this.state.description} name='description' onChange={(event) => this.handleReview(event)}/>
      </fieldset>
    )
  }
}

export default Curriculum;
