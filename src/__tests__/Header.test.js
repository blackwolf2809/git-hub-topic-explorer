import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '../features/components/header/Header';

test('renders Header', () => {
  const { getByText } = render(
    <Header />
  );
  expect(getByText(/Topic searching/i)).toBeInTheDocument();
});
