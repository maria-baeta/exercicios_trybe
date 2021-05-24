import React from 'react';
import renderWithRouter from './renderWithRouter';
//Talvez você esteja se perguntando porque o App não foi importado com {} e o About foi. Isso aconteceu porque só pode haver um export default por arquivo (que faz o componente ser importável sem as chaves {} ) e o App tomou esse espaço, então os outros componentes exportados ficam em "segundo plano". Por isso, para serem importados corretamente, necessitam do {} .
import App, { About } from './App';
import { fireEvent } from '@testing-library/dom';

describe('Testa toda a aplicação', () => {
  it('deve renderizar o component App', () => {
    const { getByText } = renderWithRouter(<App/>)
    const home = getByText(/Você está na página Início/)
    expect(home).toBeInTheDocument();
  
  })

  it('deve renderizar o component Sobre', () => {
    const { getByText, history } = renderWithRouter(<App/>)
    // Com o fireEvent (que deve ser importado da @testing-library/react ), podemos interagir com os elementos da tela (nesse caso, vamos clicar no link Sobre ).
    fireEvent.click(getByText(/Sobre/i))
    //  Depois disso, utilizaremos o history.location.pathname para verificar se estamos na página correta e, por último, verificamos se o texto que aparece quando clicamos nesse link no navegador foi encontrado
    const pathName = history.location.pathname;
    expect(pathName).toBe('/about');
    const home = getByText(/Você está na página Sobre/)
    expect(home).toBeInTheDocument();
  })
  it('deve testar o caminho não existente e a renderização do Not Found', () => {
    const { getByText, history } = renderWithRouter(<App/>)
    //A diferença nesse caso é que utilizamos a função history.push() e passamos como argumento algum link que não existe dentro de nossa aplicação. Depois disso, testamos se o texto que aparece no navegador, ao digitar um caminho para uma página que não existe, é encontrado.
    history.push('/pagina/que-nao-existe/');
    const notMatch = getByText(/Página não encontrada/i)
    expect(notMatch).toBeInTheDocument();

  })
  
  it('deve renderizar o component About(apenas componente)', () => {
    const { getByText } = renderWithRouter(<About/>);
    const aboutOnly = getByText(/Você está na página Sobre/i);
    expect(aboutOnly).toBeInTheDocument();
  })


})