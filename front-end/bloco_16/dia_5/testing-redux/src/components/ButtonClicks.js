import React from 'react';
import { connect } from 'react-redux';
import addClick from '../actions'


class ButtonClicks extends React.Component {
  render() {
    const { add } = this.props;
    return (
      <div>
        <button onClick={add}>Clique aqui</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  add: () => dispatch(addClick())
});


export default connect(null, mapDispatchToProps)(ButtonClicks);