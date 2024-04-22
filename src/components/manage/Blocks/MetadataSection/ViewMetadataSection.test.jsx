import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import {
  MetadataSectionListingView,
  MetadataSectionTableView,
} from './ViewMetadataSection';
import config from '@plone/volto/registry';
import '@testing-library/jest-dom/extend-expect';

const mockStore = {
  getState: () => ({
    content: {
      data: {
        title: 'Test Title',
      },
    },
  }),
  subscribe: () => {},
  dispatch: jest.fn(),
};

config.widgets = {
  views: {
    getWidget: () => () => <div>Widget Component</div>,
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
        {
          field: {
            id: 'hidden',
            title: 'Hidden',
          },
          showLabel: true,
          hideInView: true,
        },
      ],
    };

    const { container } = render(
      <Provider store={mockStore}>
        <MetadataSectionListingView data={data} />
      </Provider>,
    );

    const field1Label = container.querySelector('label.block.metadata.field1');
    expect(field1Label).toHaveTextContent('Title field1');
    const field2Label = container.querySelector('label.block.metadata.field2');
    expect(field2Label).toHaveTextContent('Title field2');

    const field1Widget = container.querySelector('div');
    expect(field1Widget).toHaveTextContent('Widget Component');
    const field2Widget = container.querySelector('div');
    expect(field2Widget).toHaveTextContent('Widget Component');
  });
});

describe('MetadataSectionTableView', () => {
  it('renders table with fields correctly', () => {
    const data = {
      table: {
        fixed: false,
        compact: true,
        basic: false,
        celled: true,
        inverted: false,
        striped: true,
      },
      fields: [
        {
          field: { id: 'field1', title: 'Title field1' },
          showLabel: true,
          hideInView: false,
        },
        {
          field: { id: 'field2', title: 'Title field2' },
          showLabel: true,
          hideInView: false,
        },
        {
          field: { id: 'hidden', title: 'Hidden' },
          showLabel: true,
          hideInView: true,
        },
      ],
    };

    render(
      <Provider store={mockStore}>
        <MetadataSectionTableView data={data} />
      </Provider>,
    );

    const table = screen.getByRole('table');
    expect(table).toHaveClass('ui celled striped compact table');
  });
});
