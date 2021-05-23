import React from 'react'
import './App.css';
import Joke from './component/Joke'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      joke: '',
      
    }
  }

 async componentDidMount() {
    await this.fetchApi()
  }

  fetchApi = async () => {
    const API_URL = 'https://icanhazdadjoke.com/';
    const response = await fetch(API_URL, { headers: { Accept: 'application/json' } });
    const data = await response.json();
    this.setState({ joke: data.joke });
  }

  render() {
    const { joke } = this.state;
    return (
      <Joke joke={joke} />
    )
  }
}


export default App;
