import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '../features/components/footer/Footer';

test('renders Footer', () => {
  const { getByText } = render(
    <Footer />
  );
  expect(getByText(/This demo was developed by/i)).toBeInTheDocument();
});
