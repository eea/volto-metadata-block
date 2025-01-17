import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { getWidget } from '@eeacms/volto-metadata-block/utils';
import { Field } from '@plone/volto/components';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  selectMetadata: {
    id: 'selectMetadata',
    defaultMessage: 'Select metadata',
  },
});

export const SelectMetadata = (props) => {
  const intl = useIntl();
  // Get Object metadata from global state
  const properties = useSelector(
    (state) => state?.schema?.schema?.properties || {},
  );
  const vocabulary = Object.keys(properties)
    .map((key) => {
      const field = properties[key];
      const widget = getWidget(key, field);
      return {
        key: key,
        value: { id: key, widget: widget },
        text: field?.title || key,
      };
    })
    .filter((val) => !!val);

  return (
    <Dropdown
      {...props}
      value={props.value}
      selection
      search
      placeholder={intl.formatMessage(messages.selectMetadata)}
      options={vocabulary}
    />
  );
};

export const SelectMetadataBlock = SelectMetadata;

export const SelectMetadataField = (props) => {
  const { id, value = null, onChange, title, block } = props;
  const properties = useSelector(
    (state) => state?.schema?.schema?.properties || {},
  );

  const fields = Object.assign(
    {},
    ...Object.keys(properties)
      .map((key) => {
        const field = properties[key];
        const widget = getWidget(key, field);
        return { [key]: { id: key, widget, title: field?.title || key } };
      })
      .filter((val) => !!val),
  );

  const choices = Object.keys(fields).map((k) => [k, fields[k].title]);

  return (
    <Field
      id={id}
      block={block}
      title={title}
      choices={choices}
      value={value?.id}
      onChange={(id, value) => {
        onChange(id, fields[value]);
      }}
    />
  );
};
