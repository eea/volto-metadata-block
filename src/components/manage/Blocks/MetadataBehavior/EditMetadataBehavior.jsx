import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { BlockDataForm, SidebarPortal } from '@plone/volto/components';
import MetadataBehaviorSchema from './schema';
import FieldEditor from '../MetadataSection/FieldEditor';

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
    properties,
    metadata,
    onChangeField,
  } = props;
  const schema = useSelector((state) => state?.schema?.schema || {});
  // const fieldsInOrder = schema.
  const behaviors = React.useMemo(() => extractBehaviors(schema), [schema]);
  const blockSchema = React.useMemo(() => {
    const _schema = MetadataBehaviorSchema({ intl });
    _schema.properties.behavior.choices = behaviors.map((id) => [id, id]);
    return _schema;
  }, [intl, behaviors]);
  const schemataFields = schema.fieldsets?.reduce((result, fieldset) => {
    console.log(result, fieldset);
    return [...result, ...fieldset.fields];
  }, []);
  console.log(schemataFields);

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
      <FieldEditor
        block={block}
        schema={schema}
        fields={[]}
        onChangeField={onChangeField}
        fieldData={metadata || properties}
      />
    </div>
  );
};

export default EditMetadataBehaviorBlock;
