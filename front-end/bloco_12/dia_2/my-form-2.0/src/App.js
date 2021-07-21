
import React from 'react';
import './App.css';
import People from './components/People'
import Curriculum from './components/Curriculum'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header>
          <h1>Formulário</h1>
        </header>
        <main>
          <form>
          <People />
          <Curriculum />
          </form>
        </main>
      </div>
    );
  }
}

export default App;
