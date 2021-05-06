import React from 'react'
import './App.css';

class App extends React.Component {
  state = {
    characters: []
  }

  fetchCharacters() {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => { this.setState({ characters: data.results }) })
  }

  componentDidMount() {
    this.fetchCharacters()
    // pode ser feito o fetch dentro componentDidMount
    // fetch('https://rickandmortyapi.com/api/character')
    //   .then(response => response.json())
    //   .then(data => { this.setState({ characters: data.results }) })
  }

  render() {
    const { characters } = this.state
    return (
      <div className="App">
        <h1>Personagens Ricky and Morty</h1>
        <div className='body'>
        {characters.map(({name, image, id}) => {
          return(
            <div className='container' key={ id }>
              <h3>{ name }</h3>
              <img src={ image } alt={ name }/>
            </div>
          )
        })}
        </div>
      </div>
    );
  }
}

export default App;
