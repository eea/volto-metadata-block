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
      id: 'test',
      placeholder: 'placeholder',
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
    placeholder: 'placeholder',
  },
};

jest.mock('@plone/volto/registry', () => ({
  widgets: {
    views: {
      getWidget: () => () => <div>Mock Widget</div>,
    },
  },
}));

describe('ViewMetadataBlock', () => {
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <ViewMetadataBlock data={mockData} />
      </Provider>,
    );
    expect(screen.getByText('Mock Widget')).toBeInTheDocument();
  });
});
