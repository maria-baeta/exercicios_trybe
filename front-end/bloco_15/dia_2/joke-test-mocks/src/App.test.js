import React from 'react';
import { render, screen } from '@testing-library/react'
import App from './App';

afterEach(() => jest.clearAllMocks());
const joke = {
  id: '7h3oGtrOfxc',
  joke: 'Whiteboards ... are remarkable.',
  status: 200,
};

// test('Fetch piada, forma 1', async () => {

//   jest.spyOn(global, 'fetch')
//   global.fetch.mockResolvedValue({
// json: jest.fn().mockResolvedValue(joke)
//   })

//   const { findByText } = render(<App />)
//   await findByText('Whiteboards ... are remarkable.');
//   expect(global.fetch).toBeCalledTimes(1);
//   expect(global.fetch).toBeCalledWith(
//     'https://icanhazdadjoke.com/',
//     {"headers": {"Accept": "application/json"}}
//   )
// })

test('Testa se o Fetch da piada é feito utilizando moks', async () => {
  // Muda a logica do fetch global:
  global.fetch = jest.fn( async () => ({
    json: async () => joke
  })  );
  render(<App />)
  await screen.findByText('Whiteboards ... are remarkable.');
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', {"headers": {"Accept": "application/json"}})
})