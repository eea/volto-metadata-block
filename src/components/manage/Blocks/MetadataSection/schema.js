import messages from './i18n';

const FieldSchema = {
  title: 'Field',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['field', 'showLabel', 'hideInView'],
    },
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
    hideInView: {
      title: 'Hide in view page?',
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

  required: ['fields'],
};

export const TableSchema = ({ intl }) => ({
  title: 'Table style',

  fieldsets: [
    {
      id: 'default',
      title: intl.formatMessage(messages.defaultFieldset),
      fields: ['fixed', 'celled', 'striped', 'compact', 'basic', 'inverted'],
    },
  ],

  properties: {
    fixed: {
      type: 'boolean',
      title: intl.formatMessage(messages.fixed),
    },
    compact: {
      type: 'boolean',
      title: intl.formatMessage(messages.compact),
    },
    basic: {
      type: 'boolean',
      title: intl.formatMessage(messages.basic),
    },
    celled: {
      type: 'boolean',
      title: intl.formatMessage(messages.celled),
    },
    inverted: {
      type: 'boolean',
      title: intl.formatMessage(messages.inverted),
    },
    striped: {
      type: 'boolean',
      title: intl.formatMessage(messages.striped),
    },
  },

  required: [],
});

export default MetadataSectionSchema;
