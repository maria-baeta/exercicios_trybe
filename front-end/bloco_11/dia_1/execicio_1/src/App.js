import './App.css';
import Components from './Component'
function Hello () {
  return (
    <h1> Hello, word!</h1>
  )
}

function App() {
  return (
    <div className="App">
      <header>
      <Hello/>
      </header>
      <section>
        <Components/>
        <p> Agora são: {new Date().toLocaleTimeString()}</p>
      </section>
    </div>
  );
}

export default App;
