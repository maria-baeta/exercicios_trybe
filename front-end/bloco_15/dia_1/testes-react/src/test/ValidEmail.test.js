import React from 'react';
import { render } from '@testing-library/react';
import ValidEmail from '../component/ValidEmail';


test('Testando um componente, caso o email seja valido.', () => {
  const EMAIL_USER = 'email@email.com';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Valido');
  expect(isValid).toBeInTheDocument();
});

  test('Testando validação de email, email inválido', () => {
    const EMAIL_USER = 'emailerrado';
    const { getByText  } = render (<ValidEmail email={EMAIL_USER} />)
    const isValid = getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  })
