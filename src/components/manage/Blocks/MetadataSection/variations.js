import { TableSchema } from './schema';
import { cloneDeep } from 'lodash';

export const addTableField = ({ schema, intl }) => {
  const applied = schema.fieldsets[0].fields.includes('table');

  if (!applied) {
    const resSchema = cloneDeep(schema);

    resSchema.fieldsets.push({
      id: 'tableStyle',
      fields: ['table'],
      title: 'Table style',
    });
    resSchema.properties.table = {
      title: 'Table style',
      widget: 'object',
      schema: TableSchema({ intl }),
    };
    return resSchema;
  }

  return schema;
};
