import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

import NotFoundPage from './404.tsx';
import { store } from '../redux/store';

describe('NotFoundPage', () => {
  it('renders a wrapper', () => {
    render(<Provider store={store}><NotFoundPage /></Provider>);

    const wrapper = screen.getByRole('wrapper');
    expect(wrapper).toBeInTheDocument();
  });
});