import React from 'react'

class Joke extends React.Component {
    render() {
        const { joke } = this.props;
        return (
            <div className='App'>
        <h3>{ joke }</h3>
      </div>
        )
    }
}

export default Joke;