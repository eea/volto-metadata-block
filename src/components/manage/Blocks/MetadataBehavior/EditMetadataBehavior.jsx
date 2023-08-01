import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { BlockDataForm, Field, SidebarPortal } from '@plone/volto/components';
import MetadataBehaviorSchema from './schema';
import '@eeacms/volto-metadata-block/less/editor.less';

const EditMetadataBehaviorBlock = (props) => {
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
  let metadata_element = {};
  metadata_element = metadata ? { ...metadata } : { ...properties };

  return (
    <div className={cx('block metadata-section', { selected: selected })}>
      <SidebarPortal selected={selected}>
        {!data?.readOnlySettings && (
          <BlockDataForm
            schema={MetadataBehaviorSchema}
            title={MetadataBehaviorSchema.title}
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

      <div>muu</div>
    </div>
  );
};

export default EditMetadataBehaviorBlock;
