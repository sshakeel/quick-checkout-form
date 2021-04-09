import {render, screen, queryByAttribute} from '@testing-library/react';

import CreditCardForm from './components/CreditCardForm';

// Basic tests for component render and styles

const getById = queryByAttribute.bind(null, 'id');
const creditCardForm = render(<CreditCardForm />);

test('Renders Credit Card Form', () => {
  const cardComponent = getById(creditCardForm.container, 'CreditCardForm');
  expect(cardComponent).toBeInTheDocument();
})

test('Renders Credit Card Logos', () => {
  render(<CreditCardForm />);
  const creditCardLogosImg = screen.getByAltText('Credit Card Logos');
  expect(creditCardLogosImg).toBeInTheDocument();
})

test('Renders Form Heading', () => {
  render(<CreditCardForm />);
  const formHeading = screen.getByText('Enter your credit card information');
  expect(formHeading).toBeInTheDocument();
})

test('Form Heading is 22px', () => {
  render(<CreditCardForm />);
  const formHeading = screen.getByText('Enter your credit card information');
  expect(formHeading).toHaveStyle(`fontSize: '22px'`);
})

test('Renders Form fields and Submit Button', () => {
  render(<CreditCardForm />);

  const nameField = screen.getByLabelText('Full Name');
  expect(nameField).toBeInTheDocument();

  const cardField = screen.getByLabelText('Card Number');
  expect(cardField).toBeInTheDocument();

  const expField = screen.getByLabelText(/expiry.*/i);
  expect(expField).toBeInTheDocument();

  const cvvField = screen.getByLabelText(/cvv.*/i);
  expect(cvvField).toBeInTheDocument();

  const submitButton = screen.getByText(/submit.*/i);
  expect(submitButton).toBeInTheDocument();
})

test('Submit Button should be blue with rgb(15, 114, 229)', () => {
  render(<CreditCardForm />);
  const submitButton = screen.getByText(/submit.*/i);
  expect(submitButton).toHaveStyle(`backgroundColor: rgb(15, 114, 229)`);
})

// can have more detailed test in the future for complex validations etc