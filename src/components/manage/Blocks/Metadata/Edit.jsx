import React, { useState } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Field } from '@plone/volto/components/manage/Form';
import { SelectMetadataBlock } from '@eeacms/volto-metadata-block/widgets';
import '@eeacms/volto-metadata-block/less/editor.less';

const EMPTY_OBJECT = Object.freeze({});

const EditMetadataBlock = (props) => {
  const {
    selected,
    block,
    onSelectBlock,
    data,
    onChangeBlock,
    onChangeField,
    properties,
    metadata,
    errors,
  } = props;
  const [metadata_id, setMetadata_id] = useState(data?.data?.id);
  const schema = useSelector((state) => state?.schema?.schema ?? EMPTY_OBJECT);
  let metadata_element = {};
  metadata_element = metadata ? { ...metadata } : { ...properties };

  const onMetadataSelect = React.useCallback(
    (event, select) => {
      const { value } = select;
      onChangeBlock(block, { ...data, data: value });
      setMetadata_id(value.id);
    },
    [block, data, onChangeBlock],
  );

  const field = schema.properties ? schema.properties[metadata_id] : null;
  const required = schema?.required?.includes(metadata_id);

  return (
    <div className={cx('block metadata', { selected: selected })}>
      {field ? (
        <Field
          {...field}
          id={metadata_id}
          value={metadata_element[metadata_id]}
          required={required}
          onChange={(id, value) => {
            onChangeField(id, value);
          }}
          key={metadata_id}
          block={block}
          error={errors?.[metadata_id]}
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

export default EditMetadataBlock;
