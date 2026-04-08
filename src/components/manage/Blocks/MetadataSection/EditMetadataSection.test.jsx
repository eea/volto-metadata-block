import React from 'react';
import { Provider } from 'react-intl-redux';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import EditMetadataSectionBlock from './EditMetadataSection';
import '@testing-library/jest-dom';

const mockStore = configureStore();

jest.mock('@plone/volto/components/manage/Form/BlockDataForm', () => {
  return ({ title, children }) => (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
});

jest.mock('@plone/volto/components/manage/Form/Field', () => {
  return ({ id, title }) => (
    <div className="mock-field">
      <label htmlFor={id}>{title}</label>
      <input id={id} />
    </div>
  );
});

jest.mock('@plone/volto/components/manage/Sidebar/SidebarPortal', () => ({
  __esModule: true,
  default: ({ children }) => (
    <div data-testid="mock-sidebar-portal">{children}</div>
  ),
}));

const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
  schema: {
    schema: {},
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

    expect(screen.getByTestId('mock-sidebar-portal')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Metadata Section' }),
    ).toBeInTheDocument();
  });
});
