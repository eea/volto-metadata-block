import { defineMessages } from 'react-intl';

const messages = defineMessages({
  fixed: {
    id: 'Fixed width table cells',
    defaultMessage: 'Fixed width table cells',
  },
  compact: {
    id: 'Make the table compact',
    defaultMessage: 'Make the table compact',
  },
  basic: {
    id: 'Reduce complexity',
    defaultMessage: 'Reduce complexity',
  },
  celled: {
    id: 'Divide each row into separate cells',
    defaultMessage: 'Divide each row into separate cells',
  },
  inverted: {
    id: 'Table color inverted',
    defaultMessage: 'Table color inverted',
  },
  striped: {
    id: 'Stripe alternate rows with color',
    defaultMessage: 'Stripe alternate rows with color',
  },
  styling: {
    id: 'Styling',
    defaultMessage: 'Styling',
  },
  defaultFieldset: {
    id: 'Default',
    defaultMessage: 'Default',
  },
  dataFile: {
    id: 'Data file',
    defaultMessage: 'Data file',
  },
});

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
