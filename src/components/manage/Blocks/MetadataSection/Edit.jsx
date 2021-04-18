import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { SelectMetadataBlock } from '@eeacms/volto-metadata-block/widgets';
import {
  BlockDataForm,
  // Icon,
  Field,
  SidebarPortal,
} from '@plone/volto/components';
import MetadataSectionSchema from './schema';

const ViewField = (props) => {
  const {
    block,
    onSelectBlock,
    data,
    onChangeBlock,
    onChangeField,
    properties,
  } = props;
  const schema = useSelector((state) => state?.schema?.schema || {});
  const [metadata, setMetadata] = React.useState(data?.data?.id);

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
  return field ? (
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
  );
};

const EditMetadataSectionBlock = (props) => {
  const {
    selected,
    block,
    data,
    onChangeBlock,
    // onSelectBlock,
    // onChangeField,
    // properties,
  } = props;

  return (
    <div className={cx('block metadata-section', { selected: selected })}>
      <SidebarPortal selected={selected}>
        <BlockDataForm
          schema={MetadataSectionSchema}
          title={MetadataSectionSchema.title}
          onChangeField={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          formData={data}
        />
      </SidebarPortal>

      <ViewField {...props} />
    </div>
  );
};

export default EditMetadataSectionBlock;
