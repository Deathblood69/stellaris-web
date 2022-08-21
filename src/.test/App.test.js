import {render, screen} from '@testing-library/react';
import CarteGalaxie from '../pages/partie/CarteGalaxie';

test('renders learn react link', () => {
  render(<CarteGalaxie />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
