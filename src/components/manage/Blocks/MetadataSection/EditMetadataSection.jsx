import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { BlockDataForm, Field, SidebarPortal } from '@plone/volto/components';
import { injectIntl, useIntl } from 'react-intl';
import MetadataSectionSchema from './schema';
import '@eeacms/volto-metadata-block/less/editor.less';
import messages from './i18n';

const EditMetadataSectionBlock = (props) => {
  const intl = useIntl();
  const {
    selected,
    block,
    data,
    onChangeBlock,
    properties,
    metadata,
    onChangeField,
    errors,
  } = props;
  const schema = useSelector((state) => state?.schema?.schema || {});
  let metadata_element = {};
  metadata_element = metadata ? { ...metadata } : { ...properties };

  const sectionSchema = MetadataSectionSchema(props.intl);

  return (
    <div className={cx('block metadata-section', { selected: selected })}>
      <SidebarPortal selected={selected}>
        {!data?.readOnlySettings && (
          <BlockDataForm
            schema={sectionSchema}
            title={sectionSchema.title}
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

      <fieldset>
        <legend aria-hidden="true">
          {data.title || intl.formatMessage(messages.metadataSection)}
        </legend>
        {data.fields?.length
          ? data.fields.map((value) => {
              const { id: metadata_id } = value?.field || {};
              if (!metadata_id) return '';
              const field = schema.properties
                ? schema.properties[metadata_id]
                : null;
              const required = schema?.required?.includes(metadata_id);
              return (
                field && (
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
                )
              );
            })
          : intl.formatMessage(messages.noFieldsSelected)}
      </fieldset>
    </div>
  );
};

export default injectIntl(EditMetadataSectionBlock);
