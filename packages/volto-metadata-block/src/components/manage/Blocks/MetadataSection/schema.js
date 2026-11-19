import messages from './i18n';

const FieldSchema = (intl) => ({
  title: intl.formatMessage(messages.field),
  fieldsets: [
    {
      id: 'default',
      title: intl.formatMessage(messages.defaultFieldset),
      fields: ['field', 'showLabel', 'hideInView'],
    },
  ],
  properties: {
    field: {
      title: intl.formatMessage(messages.field),
      widget: 'select_metadata_field',
    },
    showLabel: {
      title: intl.formatMessage(messages.showLabel),
      type: 'boolean',
    },
    hideInView: {
      title: intl.formatMessage(messages.hideInView),
      type: 'boolean',
    },
  },
  required: ['field'],
});

const MetadataSectionSchema = (intl) => ({
  title: intl.formatMessage(messages.metadataSection),

  fieldsets: [
    {
      id: 'default',
      title: intl.formatMessage(messages.defaultFieldset),
      fields: ['fields'],
    },
  ],

  properties: {
    fields: {
      title: intl.formatMessage(messages.fields),
      schema: FieldSchema(intl),
      widget: 'object_list',
    },
  },

  required: ['fields'],
});

export const TableSchema = ({ intl }) => ({
  title: intl.formatMessage(messages.tableStyle),

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
