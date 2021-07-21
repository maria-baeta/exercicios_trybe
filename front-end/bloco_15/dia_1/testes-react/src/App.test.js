import { render, fireEvent } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   // Formas diferentes de fazer: 
//   //--------

//   // render(<App />);
//   // const linkElement = screen.getByText(/algo que não aparece/i);
//   // expect(linkElement).toBeInTheDocument();

//   // --------

//   // const meuApp = render(<App />);
//   // const linkElement = meuApp.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();

//    // --------

//   const { getByText } = render(<App/>)
//   const textApp = getByText(/Learn React/i)
//   expect(textApp).toBeInTheDocument();
// });

describe('Teste: Tela de cadastro de Email', () => {
  it('Verifica se há um input Email', () => {
    const { getByLabelText } = render(<App />);
    const inputEmail = getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  })

  // Teste se há um botão
  // test('Verifica se há um botão', () => {
  //     const { getByRole } = render(<App/>)
  //     const btn = getByRole('button');
  //     expect(btn).toBeInTheDocument()
  // })

  it('Verifica se há dois botôes', () => {
    const { getAllByRole } = render(<App />)
    const btn = getAllByRole('button');
    expect(btn.length).toBe(2);
  })

  it('Verifica se há um botão de enviar', () => {
    const { getByTestId } = render(<App />)
    const btn = getByTestId('id-send');
    expect(btn).toBeInTheDocument();
    expect(btn.type).toBe('button');
    expect(btn).toHaveValue('Enviar');
  })
  
  it('Verifica se o botão Enviar está funcionando', () => {
    const EMAIL_USER = 'email@test.com'
    const { getByLabelText, getByTestId } = render(<App/>);
    // Recupera os elementos a serem testados:
    const inputEmail = getByLabelText('Email');
    const bttSend = getByTestId('id-send');
    const textEmail = getByTestId('id-email-user');
    // Interação com o Evento:
    fireEvent.change(inputEmail, {target: {value: EMAIL_USER } } );
    fireEvent.click(bttSend);
    // Testando as aplicações:
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');
    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
  })

})