import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { BlockDataForm, SidebarPortal } from '@plone/volto/components';
import MetadataSectionSchema from './schema';
import FieldEditor from './FieldEditor';

import '@eeacms/volto-metadata-block/less/editor.less';

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
        fieldData={metadata || properties}
        fields={data.fields || []}
        title={data.title}
      />
    </div>
  );
}
