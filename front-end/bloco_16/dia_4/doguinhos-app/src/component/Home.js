import React from 'react';
import { connect } from 'react-redux';
import { fetchDog } from '../actions';
// import { fetchDog } from '../store/index';

class Home extends React.Component {
  componentDidMount() {
    const { fetchDog } = this.props;
    fetchDog()
  }
  render() {
    const { isLoading, url, fetchDog } = this.props
    return (
      isLoading ? <p>Loading</p>
        : (
          <div style={{ width: 500 }}>
            <button
              onClick={fetchDog}
              style={{ display: 'block' }}
              type='button'
            >
              Novo Doguinho
            </button>
            <img alt='dog' src={url} style={{ width: '100%' }} />
          </div>
        )
    )

  }

}

const mapStateToProps = (state) => ({
  url: state.imagePath,
  isLoading: state.isLoading,
});


const mapDispatchToProps = (dispatch) => ({
  fetchDog: () => dispatch(fetchDog())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);