import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import NotFoundPage from './notfound-page';
import { store } from '../../../redux/store';
import { Provider } from 'react-redux';

describe('404 page component', () => {
  beforeEach(() => {
    render(<Provider store={store}>
      <NotFoundPage /> </Provider>);
  });
  it('renders correctly', () => {
    expect(screen.getByText('Page not found')).toBeInTheDocument();
    expect(screen.getByText('Back home')).toBeInTheDocument();
  });
  it('has a right link', () => {
    expect(screen.getByText('Back home').closest('a')).toHaveAttribute(
      'href',
      '/',
    );
  });
});
