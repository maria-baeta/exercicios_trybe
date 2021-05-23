import { fireEvent, render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from './App';

describe('Teste dos inputs', () => {
  it('alterando o valor do campo Nome e testando o valor guardado', () => {
    render(<App />)
    const inputName = screen.getByTestId('input-name');
    expect(inputName).toHaveValue('');
    fireEvent.change(inputName, {target: {value: "Olga"}});
    expect(inputName).toHaveValue('Olga');
  })

  it('alterando o valor do campo Email e testando o valor guardado', () => {
    render(<App />)
    const inputEmail = screen.getByTestId('input-email');
    expect(inputEmail).toHaveValue('');
    fireEvent.change(inputEmail, {target: {value: "olga@test.com"}});
    expect(inputEmail).toHaveValue('olga@test.com');
  })
})
