import messages from './i18n';

export default function MetadataBehaviorSchema({ intl }) {
  return {
    title: 'Metadata section',

    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['behavior'],
      },
    ],

    properties: {
      behavior: {
        title: intl.formatMessage(messages.Behavior),
        choices: [],
      },
    },

    required: ['behavior'],
  };
}
