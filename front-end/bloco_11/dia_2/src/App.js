import './App.css';
import Pokedex from './Componets/Pokedex'
import Pokemons from './data'


function App() {

  return (
    <section>
      <h1>Pokedex</h1>
      <div className='App'>
        {Pokemons.map((Pokemon, index) => {
          return (
            <Pokedex key={index} Pokemon={Pokemon} />
          )
        })}
      </div>
    </section>


  )
}

export default App;

