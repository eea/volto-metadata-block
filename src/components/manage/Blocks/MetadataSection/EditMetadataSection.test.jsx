import React from 'react';
import { Provider } from 'react-intl-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import EditMetadataSectionBlock from './EditMetadataSection';

const mockStore = configureStore();

jest.mock('@plone/volto/components', () => ({
  BlockDataForm: () => <div>BlockDataForm</div>,
  SidebarPortal: () => <div>SidebarPortal</div>,
  Field: () => <div>Field</div>,
}));

const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
});

describe('EditMetadataSection', () => {
  it('renders the block correctly', () => {
    const props = {
      selected: true,
      block: 'some-block',
      data: {},
      onChangeBlock: jest.fn(),
      properties: {},
      onChangeField: jest.fn(),
    };

    const component = renderer.create(
      <Provider store={store}>
        <EditMetadataSectionBlock {...props} />
      </Provider>,
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
