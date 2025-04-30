import React from 'react';
import { Provider } from 'react-intl-redux';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import ViewMetadataBlock from './View';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore();

const store = mockStore({
  content: {
    data: {
      test: 'Test Output',
      nonexistent: 'Placeholder Output',
    },
  },
  intl: {
    locale: 'en',
    messages: {},
  },
});

const mockData = {
  data: {
    id: 'test',
    placeholder: 'Placeholder Output',
  },
  properties: {
    test: 'Property Output',
  },
  metadata: {
    test: 'Metadata Output',
  },
};

jest.mock('@plone/volto/registry', () => ({
  widgets: {
    views: {
      getWidget:
        (data) =>
        ({ value, className }) => <div className={className}>{value}</div>,
      default: ({ value, className }) => (
        <div className={className}>{value}</div>
      ),
    },
  },
}));

describe('ViewMetadataBlock', () => {
  it('renders correctly with widget output', () => {
    render(
      <Provider store={store}>
        <ViewMetadataBlock data={mockData} />
      </Provider>,
    );
    expect(screen.getByText('Test Output')).toBeInTheDocument();
  });

  it('renders placeholder if no output is available', () => {
    const placeholderData = {
      data: {
        id: 'nonexistent',
        placeholder: 'Placeholder Output',
      },
    };

    render(
      <Provider store={store}>
        <ViewMetadataBlock data={placeholderData} />
      </Provider>,
    );

    expect(screen.getByText('Placeholder Output')).toBeInTheDocument();
  });

  it('does not render if data id is not present', () => {
    const emptyData = {
      data: {},
    };

    const { container } = render(
      <Provider store={store}>
        <ViewMetadataBlock data={emptyData} />
      </Provider>,
    );

    expect(container.innerHTML).toBe('');
  });
});
