import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import '@testing-library/jest-dom';
import { store } from '../../../../../redux/store';
import VideoCard from './VideoCard';

describe('VideoCard component ', () => {
  it('renders on the page', () => {
    render(<Provider store={store}><VideoCard src={'link to the video'} title={'this is a title'} /></Provider>);
    const video = document.querySelector('.video');
    expect(video).toBeInTheDocument();
    expect(screen.getByText('this is a title')).toBeInTheDocument();
  });
});
