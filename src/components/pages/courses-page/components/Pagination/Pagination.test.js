import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';


import { store } from '../../../../../redux/store';
import Pagination from './Pagination';

describe('Pagination component ', () => {
  it('renders with all buttons', () => {
    render(<Provider store={store}><Pagination totalPages={3} currentPage={1} /></Provider>);
    expect(screen.getByText('<')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('>')).toBeInTheDocument();
  });


  it('should call setState after clicking next page button if we have more pages', () => {
    const setPage = jest.fn((x) => x);
    render(<Provider store={store}><Pagination totalPages={3} currentPage={1} setPage={setPage} /></Provider>);

    const next = screen.getByText('>');
    act(() => fireEvent.click(next));
    expect(setPage).toHaveBeenCalledWith(2)
  });

  it('shouldn`t call setState after clicking next page button if we have not more pages', () => {
    const setPage = jest.fn((x) => x);
    render(<Provider store={store}><Pagination totalPages={3} currentPage={3} setPage={setPage} /></Provider>);

    const next = screen.getByText('>');
    act(() => fireEvent.click(next));
    expect(setPage).not.toHaveBeenCalled()
  });

  it('should call setState after clicking prev page button if we have more pages', () => {
    const setPage = jest.fn((x) => x);
    render(<Provider store={store}><Pagination totalPages={3} currentPage={2} setPage={setPage} /></Provider>);

    const prev = screen.getByText('<');
    act(() => fireEvent.click(prev));
    expect(setPage).toHaveBeenCalledWith(1)
  });

  it('shouldn`t call setState after clicking prev page button if we have not more pages', () => {
    const setPage = jest.fn((x) => x);
    render(<Provider store={store}><Pagination totalPages={3} currentPage={1} setPage={setPage} /></Provider>);

    const prev = screen.getByText('<');
    act(() => fireEvent.click(prev));
    expect(setPage).not.toHaveBeenCalled()
  });

  it('should call setState after clicking page button if we are not on it already', () => {
    const setPage = jest.fn((x) => x);
    render(<Provider store={store}><Pagination totalPages={4} currentPage={1} setPage={setPage} /></Provider>);

    const second = screen.getByText('2');
    const third = screen.getByText('3');
    const fourth = screen.getByText('4');

    act(() => fireEvent.click(second));
    expect(setPage).toHaveBeenCalledWith(2)
    act(() => fireEvent.click(third));
    expect(setPage).toHaveBeenCalledWith(3)
    act(() => fireEvent.click(fourth));
    expect(setPage).toHaveBeenCalledWith(4)
  });

  it('shouldn`t call setState after clicking prev page button if we are already on this page', () => {
    const setPage = jest.fn((x) => x);
    render(<Provider store={store}><Pagination totalPages={4} currentPage={1} setPage={setPage} /></Provider>);

    const first = screen.getByText('1');
    act(() => fireEvent.click(first));
    expect(setPage).not.toHaveBeenCalled()
  });
});
