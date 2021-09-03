import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { BlockDataForm, Field, SidebarPortal } from '@plone/volto/components';
import MetadataSectionSchema from './schema';
// import { Segment } from 'semantic-ui-react';

const EditMetadataSectionBlock = (props) => {
  const {
    selected,
    block,
    data,
    onChangeBlock,
    properties,
    onChangeField,
  } = props;
  const schema = useSelector((state) => state?.schema?.schema || {});

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

      <fieldset>
        <legend>Metadata section</legend>
        {data.fields?.length
          ? data.fields.map((value) => {
              const { id: metadata } = value?.field || {};
              if (!metadata) return '';
              const field = schema.properties
                ? schema.properties[metadata]
                : {};
              const required = schema?.required?.includes(metadata);
              return (
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
              );
            })
          : 'No fields selected'}
      </fieldset>
    </div>
  );
};

export default EditMetadataSectionBlock;
