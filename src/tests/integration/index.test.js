import { act, render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import MainApp from '../../App';

const { promisify } = require('util');
const sleep = promisify(setTimeout);

describe('integration test', () => {
  test('renders the input and the table components correctly', () => {
    render(<MainApp />);
    const repSearch = screen.getByRole('textbox', {
      name: /search/i
    });
    expect(repSearch).toBeInTheDocument();

    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
  });

  test('When a user enters some text, it should display the data in the table', async () => {
    render(<MainApp />);
    const repSearch = screen.getByRole('textbox', {
      name: /search/i,
    });
    user.type(repSearch, 'bigshow28')
    expect(repSearch).toHaveValue('bigshow28');

    // Click on search button
    const searchButton = screen.getByRole('button', {
      name: /search/i,
    });

    act(() => {
      user.click(searchButton)
        sleep(5000).then(() => {
          const renderedResults = screen.getByRole('link', {
            name: /bigshow28\/bigshow28\.github\.io/i
          });
          expect(renderedResults).not.toBeInTheDocument();
        });
    });
  });
});
