import React from 'react';
import { Provider } from 'react-intl-redux';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import EditMetadataSectionBlock from './EditMetadataSection';
import MetadataSectionSchema from './schema';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore();

jest.mock('@plone/volto/components', () => ({
  BlockDataForm: ({ title, children }) => (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  ),
  SidebarPortal: ({ children }) => (
    <div data-testid="mock-sidebar-portal">{children}</div>
  ),
  Field: ({ id, title }) => (
    <div className="mock-field">
      <label htmlFor={id}>{title}</label>
      <input id={id} />
    </div>
  ),
}));

const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
});

describe('EditMetadataSection', () => {
  const props = {
    selected: true,
    block: 'some-block',
    data: {},
    onChangeBlock: jest.fn(),
    properties: {},
    onChangeField: jest.fn(),
  };
  it('renders the block correctly', () => {
    render(
      <Provider store={store}>
        <EditMetadataSectionBlock {...props} />
      </Provider>,
    );

    const blockDataForm = screen
      .getByRole('heading', { name: MetadataSectionSchema.title })
      .closest('div');
    expect(blockDataForm).toBeInTheDocument();
  });
});
