import './Pokedex.css'

function Pokedex(props) {
  console.log(props)
  return (
    <div className='pokedex'>
      <div>
        <img src={props.Pokemon.image} alt='Imagem do Pokemon' />
      </div>
      <p>Nome: {props.Pokemon.name} </p>
      <p>Tipo: {props.Pokemon.type}</p>
      <p>Peso: {props.Pokemon.averageWeight.value} {props.Pokemon.averageWeight.measurementUnit}</p>
      <div className='button'>
        <a href={props.Pokemon.moreInfo} target='blank'>
          <button type='button'> Saiba mais</button>
        </a>
      </div>
    </div>
  )
}
export default Pokedex

