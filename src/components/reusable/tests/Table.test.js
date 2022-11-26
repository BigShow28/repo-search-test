import { render, screen } from '@testing-library/react';
import Table from '../Table';

const columns = [
  {
      field: 'name',
      headerName: 'Name',
      width: 300,
      sortable: false,
  },
  {
      field: 'owner_login',
      headerName: 'Owner',
      width: 200,
      sortable: false,
  },
  {
      field: 'stargazers_count',
      headerName: 'Stars',
      width: 200,
      sortable: false,
  },
  {
      field: 'link',
      headerName: 'Link',
      width: 300,
      sortable: false,
  },
  {
      field: 'details',
      headerName: 'Details',
      width: 150,
      sortable: false,
  }
];

describe('Table', () => {
  test('renders correctly', () => {
    render(<Table />);
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
  });
});

describe('Name Header', () => {
  test('renders correctly', () => {
    render(<Table columns={columns} />);
    const tableElement = screen.getByRole('columnheader', {
      name: "Name",
    });
    expect(tableElement).toBeInTheDocument();
  });

  test('renders correctly', () => {
    render(<Table columns={columns} />);
    const tableElement = screen.getByText("Name");
    expect(tableElement).toBeInTheDocument();
  });
})

describe('Owner Header', () => {
  test('renders correctly', () => {
    render(<Table columns={columns} />);
    const tableElement = screen.getByRole('columnheader', {
      name: "Owner",
    });
    expect(tableElement).toBeInTheDocument();
  });

  test('renders correctly', () => {
    render(<Table columns={columns} />);
    const tableElement = screen.getByText("Owner");
    expect(tableElement).toBeInTheDocument();
  });
})

describe('Stars Header', () => {
  test('renders correctly', () => {
    render(<Table columns={columns} />);
    const tableElement = screen.getByRole('columnheader', {
      name: "Stars",
    });
    expect(tableElement).toBeInTheDocument();
  });

  test('renders correctly', () => {
    render(<Table columns={columns} />);
    const tableElement = screen.getByText("Stars");
    expect(tableElement).toBeInTheDocument();
  });
})

describe('Link Header', () => {
  test('renders correctly', () => {
    render(<Table columns={columns} />);
    const tableElement = screen.getByRole('columnheader', {
      name: "Link",
    });
    expect(tableElement).toBeInTheDocument();
  });

  test('renders correctly', () => {
    render(<Table columns={columns} />);
    const tableElement = screen.getByText("Link");
    expect(tableElement).toBeInTheDocument();
  });
})

describe('Details Header', () => {
  test('renders correctly', () => {
    render(<Table columns={columns} />);
    const tableElement = screen.getByRole('columnheader', {
      name: "Details",
    });
    expect(tableElement).toBeInTheDocument();
  });

  test('renders correctly', () => {
    render(<Table columns={columns} />);
    const tableElement = screen.getByText("Details");
    expect(tableElement).toBeInTheDocument();
  });
})
