import React from 'react';
import { Provider } from 'react-intl-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import ViewMetadataBlock from './View';

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
    const component = renderer.create(
      <Provider store={store}>
        <ViewMetadataBlock data={mockData} />
      </Provider>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
