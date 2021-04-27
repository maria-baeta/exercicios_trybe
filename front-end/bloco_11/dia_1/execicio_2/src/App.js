
import './App.css';
//Parte 1
// const task = (value) => {
//   return (
//     <li>{value}</li>
//   );
// }
// Parte 2
const tarefas = ["Acordar", "Escovar os dentes", "Caminhada", "Tomar banhor", 'Tomar cafe'];
const Task = (value) => {
  return (
    <ul>{tarefas.map((tarefa) => <li>{tarefa}</li>)}</ul>
  );
}
function App() {
  // const saudação = 'ói'
  return (
    <div className="App">
      {/* {task(saudação)} */}
      {Task()}
    </div>
  );
}

export default App;
