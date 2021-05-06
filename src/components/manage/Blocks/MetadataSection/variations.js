import { TableSchema } from './schema';
import { cloneDeep } from 'lodash';

export const addTableField = ({ schema, intl }) => {
  const applied = schema.fieldsets[0].fields.includes('table');

  if (!applied) {
    const resSchema = cloneDeep(schema);

    resSchema.fieldsets[0].fields.push('table');
    resSchema.properties.table = {
      title: 'Table style',
      widget: 'object',
      schema: TableSchema({ intl }),
    };
    return resSchema;
  }

  return schema;
};
