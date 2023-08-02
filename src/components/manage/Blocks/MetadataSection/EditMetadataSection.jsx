import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { BlockDataForm, Field, SidebarPortal } from '@plone/volto/components';
import MetadataSectionSchema from './schema';
import '@eeacms/volto-metadata-block/less/editor.less';

function FieldEditor({
  block,
  onChangeField,
  title,
  schema,
  fieldData,
  fields,
}) {
  return (
    <fieldset>
      <legend aria-hidden="true">{title || 'Metadata section'}</legend>
      {fields?.length
        ? fields.map((value) => {
            const { id: metadata_id } = value?.field || {};
            if (!metadata_id) return '';
            const field = schema.properties
              ? schema.properties[metadata_id]
              : null;
            const required = schema?.required?.includes(metadata_id);
            return (
              <Field
                {...field}
                id={metadata_id}
                value={fieldData[metadata_id]}
                required={required}
                onChange={(id, value) => {
                  onChangeField(id, value);
                }}
                key={metadata_id}
                block={block}
              />
            );
          })
        : 'No fields selected'}
    </fieldset>
  );
}

export default function EditMetadataSectionBlock(props) {
  const {
    selected,
    block,
    data,
    onChangeBlock,
    properties,
    metadata,
    onChangeField,
  } = props;
  const schema = useSelector((state) => state?.schema?.schema || {});
  let fieldData = metadata || properties;

  return (
    <div className={cx('block metadata-section', { selected: selected })}>
      <SidebarPortal selected={selected}>
        {!data?.readOnlySettings && (
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
        )}
      </SidebarPortal>
      <FieldEditor
        block={block}
        onChangeField={onChangeField}
        schema={schema}
        fieldData={fieldData}
        fields={data.fields || []}
        title={data.title}
      />
    </div>
  );
}
