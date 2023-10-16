import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import {
  MetadataSectionListingView,
  MetadataSectionTableView,
} from './ViewMetadataSection';
import config from '@plone/volto/registry';

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

    const component = renderer.create(
      <Provider store={mockStore}>
        <MetadataSectionListingView data={data} />
      </Provider>,
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
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

    const component = renderer.create(
      <Provider store={mockStore}>
        <MetadataSectionTableView data={data} />
      </Provider>,
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
