import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { BlockDataForm, SidebarPortal } from '@plone/volto/components';
import MetadataBehaviorSchema from './schema';
import ViewMetadataBehavior from './ViewMetadataBehavior';

const extractBehaviors = ({ properties = {} }) =>
  Object.entries(properties).reduce(
    (acc, [name, field]) =>
      acc.includes(field.behavior) ? acc : [...acc, field.behavior],
    [],
  );

const EditMetadataBehaviorBlock = (props) => {
  const {
    selected,
    block,
    data,
    onChangeBlock,
    intl,
    // properties,
    // metadata,
    // onChangeField,
  } = props;
  const schema = useSelector((state) => state?.schema?.schema || {});
  const behaviors = extractBehaviors(schema);
  // let metadata_element = {};
  // metadata_element = metadata ? { ...metadata } : { ...properties };

  const blockSchema = MetadataBehaviorSchema({ intl });
  blockSchema.properties.behavior.choices = behaviors.map((id) => [id, id]);

  return (
    <div className={cx('block metadata-section', { selected: selected })}>
      <SidebarPortal selected={selected}>
        {!data?.readOnlySettings && (
          <BlockDataForm
            schema={blockSchema}
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

      <ViewMetadataBehavior {...props} />
    </div>
  );
};

export default EditMetadataBehaviorBlock;
