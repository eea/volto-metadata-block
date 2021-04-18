const FieldSchema = {
  title: 'Field',
  fieldsets: [
    { id: 'default', title: 'Default', fields: ['field', 'showLabel'] },
  ],
  properties: {
    field: {
      title: 'Field',
      widget: 'select_metadata_field',
    },
    showLabel: {
      title: 'Show label?',
      type: 'boolean',
    },
  },
  required: ['field'],
};

const MetadataSectionSchema = {
  title: 'Metadata section',

  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['fields'],
    },
  ],

  properties: {
    fields: {
      title: 'Fields',
      schema: FieldSchema,
      widget: 'object_list',
    },
  },

  required: ['url'],
};

export default MetadataSectionSchema;
