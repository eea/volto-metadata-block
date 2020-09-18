import React, { useState } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { SelectMetadataBlock } from './Select';
import { Field } from '@plone/volto/components';

export const EditMetadataBlock = (props) => {
  const {
    selected,
    block,
    onSelectBlock,
    data,
    onChangeBlock,
    onChangeField,
    properties,
  } = props;
  const [metadata, setMetadata] = useState(data?.data?.id);
  const schema = useSelector((state) => state?.schema?.schema || {});

  const onMetadataSelect = React.useCallback(
    (event, select) => {
      const { value } = select;
      onChangeBlock(block, { ...data, data: value });
      setMetadata(value.id);
    },
    [block, data, onChangeBlock],
  );

  const field = schema.properties ? schema.properties[metadata] : {};
  const required = schema?.required?.includes(metadata);

  return (
    <div className={cx('block metadata', { selected: selected })}>
      {field ? (
        <Field
          {...field}
          id={metadata}
          value={properties[metadata]}
          required={required}
          onChange={(id, value) => {
            onChangeField(id, value);
          }}
          key={metadata}
          block={block}
        />
      ) : (
        <SelectMetadataBlock
          onChange={onMetadataSelect}
          onOpen={() => onSelectBlock(block)}
        />
      )}
    </div>
  );
};
