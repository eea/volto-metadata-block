import { Field } from '@plone/volto/components';

export default function FieldEditor({
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
