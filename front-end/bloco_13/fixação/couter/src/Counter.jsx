import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    console.log('constructor');
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.setState({
      counter: 10
    })

  }

  shouldComponentUpdate(_, nextState) {
    console.log('shouldComponentUpdate', this.state, nextState)
    //pula o numero 14
    if (nextState.counter > 13 && nextState.counter < 15) return false
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', this.state, prevState);
  }


  render() {
    console.log('render')
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Soma
      </button>
        <p>{this.state.counter}</p>
      </div>
    )
  }
}

export default Counter;