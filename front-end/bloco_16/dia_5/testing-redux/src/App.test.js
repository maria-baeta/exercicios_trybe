import { cleanup } from '@testing-library/react';
import renderWithRedux from './tests/index'
import App from './App';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and text 0', () => {
    const { queryByText } = renderWithRedux(<App />)
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  })
})
