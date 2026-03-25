import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import {
  MetadataSectionListingView,
  MetadataSectionTableView,
} from './ViewMetadataSection';
import config from '@plone/volto/registry';
import '@testing-library/jest-dom';
import { IntlProvider } from 'react-intl';

const mockState = {
  content: {
    data: {
      field1: 'Field1 Value',
      field2: 'Field2 Value',
    },
  },
};

const mockStore = {
  getState: () => mockState,
  subscribe: () => () => {},
  dispatch: jest.fn(),
};

const messages = {
  'Title field1': 'Title field1',
  'Title field2': 'Title field2',
};

config.widgets = {
  views: {
    getWidget:
      () =>
      ({ value, className }) => <div className={className}>{value}</div>,
    default: ({ value, className }) => <div className={className}>{value}</div>,
  },
};

describe('MetadataSectionListingView', () => {
  it('renders fields correctly', () => {
    const data = {
      fields: [
        {
          field: {
            id: 'field1',
            title: 'Title field1',
          },
          showLabel: true,
          hideInView: false,
        },
        {
          field: {
            id: 'field2',
            title: 'Title field2',
          },
          showLabel: true,
          hideInView: false,
        },
      ],
    };

    render(
      <Provider store={mockStore}>
        <IntlProvider locale="en" messages={messages}>
          <MetadataSectionListingView data={data} />
        </IntlProvider>
      </Provider>,
    );

    expect(screen.getByText('Title field1')).toBeInTheDocument();
    expect(screen.getByText('Field1 Value')).toBeInTheDocument();

    expect(screen.getByText('Title field2')).toBeInTheDocument();
    expect(screen.getByText('Field2 Value')).toBeInTheDocument();
  });
});

describe('MetadataSectionTableView', () => {
  it('does not render if no visible fields are present', () => {
    const data = {
      fields: [
        {
          field: { id: 'hidden', title: 'Hidden' },
          showLabel: true,
          hideInView: true,
        },
      ],
    };

    const { container } = render(
      <Provider store={mockStore}>
        <IntlProvider locale="en" messages={messages}>
          <MetadataSectionTableView data={data} />
        </IntlProvider>
      </Provider>,
    );

    expect(container.innerHTML).toBe('');
  });
});
