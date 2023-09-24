import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

import LessonCard from './LessonCard';
import { act } from 'react-dom/test-utils';
import { store } from '../../../../../redux/store';

describe('VideoCard component ', () => {
  it('renders correctly if this is current lesson', () => {
    render(
      <Provider store={store}> <LessonCard
        id=""
        title="first lesson"
        duration={564}
        order={1}
        type=""
        link="duyeryuier"
        status="unlocked"
        previewImageLink="vbnghgh"
        setCurrentVideo={() => { }}
        currentVideo={0}
      /></Provider>,
    );

    const element = document.querySelector('.active');
    expect(element).toBeInTheDocument();
  });
  it('renders correctly if lesson is locked', () => {
    render(
      <Provider store={store}> <LessonCard
        id=""
        title="first lesson"
        duration={564}
        order={1}
        type=""
        link="duyeryuier"
        status="locked"
        previewImageLink="vbnghgh"
        setCurrentVideo={() => { }}
        currentVideo={1}
      /></Provider>,
    );

    const element = document.querySelector('.locked');
    expect(element).toBeInTheDocument();
  });

  it('renders correctly for other unlocked lessons', () => {
    render(
      <Provider store={store}><LessonCard
        id=""
        title="first lesson"
        duration={564}
        order={1}
        type=""
        link="duyeryuier"
        status="unlocked"
        previewImageLink="vbnghgh"
        setCurrentVideo={() => { }}
        currentVideo={4}
      /></Provider>,
    );

    const element = document.querySelector('.wrapper');
    expect(element).toBeInTheDocument();
  });

  it('can set current wideo after click', () => {
    const setCurrentVideo = jest.fn((x) => x);
    render(
      <Provider store={store}> <LessonCard
        id=""
        title="first lesson"
        duration={564}
        order={5}
        type=""
        link="duyeryuier"
        status="unlocked"
        previewImageLink="vbnghgh"
        currentVideo={4}
        setCurrentVideo={setCurrentVideo}
      /></Provider>,
    );
    const card = screen.getByRole('card');
    act(() => fireEvent.click(card));
    expect(setCurrentVideo).toHaveBeenCalledWith(4)
  });

  it('should test what goes into the state', () => {
    const setCurrentVideo = jest.fn((x) => x);
    render(<Provider store={store}><LessonCard
      id=""
      title="first lesson"
      duration={564}
      order={5}
      type=""
      link="duyeryuier"
      status="unlocked"
      previewImageLink="vbnghgh"
      currentVideo={4}
      setCurrentVideo={setCurrentVideo}
      hasError={true}
    /></Provider>);
    const card = screen.getByAltText('errorLessonImage');
    expect(card).toBeInTheDocument()
  });

  it('should test what goes into the state', () => {
    const setCurrentVideo = jest.fn((x) => x);
    render(<Provider store={store}> <LessonCard
      id="vccbvjgf"
      title="uniquetitle"
      duration={564}
      order={5}
      type=""
      link="duyeryuier"
      status="unlocked"
      previewImageLink=""
      currentVideo={4}
      setCurrentVideo={setCurrentVideo}
    /></Provider>);
    const card = screen.getByAltText('uniquetitle');
    expect(card).toBeInTheDocument()
  });
});
