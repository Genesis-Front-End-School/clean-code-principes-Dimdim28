import { render, screen } from '@testing-library/react';
import NotFoundPage from './404.tsx';
import '@testing-library/jest-dom';
 
describe('NotFoundPage', () => {
  it('renders a wrapper', () => {
    render(<NotFoundPage />);
 
    const wrapper = screen.getByRole('wrapper');
    expect(wrapper).toBeInTheDocument();
  });
});