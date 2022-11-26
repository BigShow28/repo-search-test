import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import SearchBar from '../SearchBar';

describe('SearchBar', () => {
  test('renders correctly', () => {
    render(<SearchBar />);
    const repSearch = screen.getByRole('textbox', {
      name: /search/i
    });
    expect(repSearch).toBeInTheDocument();
  });

  test('renders placeholder correctly', () => {
    render(<SearchBar />);
    const repSearch = screen.getByPlaceholderText('Search');
    expect(repSearch).toBeInTheDocument();
  });

  test('renders default searchInput value correctly', () => {
    render(<SearchBar searchInput="bigshow28" />);
    const repSearch = screen.getByDisplayValue(/bigshow28/i);
    expect(repSearch).toBeInTheDocument();
  });

  test('renders user typed searchInput value correctly', () => {
    render(<SearchBar />);
    const repSearch = screen.getByRole('textbox', {
      name: /search/i
    });
    user.type(repSearch, 'joel')
    expect(repSearch).toHaveValue('joel');
  });
});
