import React from 'react';
import { Select } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { getWidget } from '@eeacms/volto-metadata-block/utils';
import { FormFieldWrapper } from '@plone/volto/components';

export const SelectMetadata = (props) => {
  // Get Object metadata from global state
  const properties = useSelector(
    (state) => state?.schema?.schema?.properties || {},
  );
  const vocabulary = Object.keys(properties)
    .map((key) => {
      const field = properties[key];
      const widget = getWidget(key, field);
      if (field?.type === 'dict') {
        return false;
      }
      return {
        key: key,
        value: { id: key, widget: widget },
        text: field?.title || key,
      };
    })
    .filter((val) => !!val);

  return (
    <Select
      {...props}
      search
      placeholder="Select metadata"
      options={vocabulary}
    />
  );
};

export const SelectMetadataBlock = SelectMetadata;

export const SelectMetadataField = (props) => {
  const { id, value = null, onChange } = props;
  console.log('value', value);

  return (
    <FormFieldWrapper {...props}>
      <SelectMetadata
        value={value?.id}
        onChange={(event, { value, options }) => {
          onChange(id, {
            ...value,
            title: options.find(({ key }) => key === value.id).text,
          });
        }}
      />
    </FormFieldWrapper>
  );
};
