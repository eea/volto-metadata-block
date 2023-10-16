const Schema = {
  title: 'Metadata section block settings',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: [
        'title',
        'required',
        'fixed',
        'fixedLayout',
        'disableNewBlocks',
        'readOnlySettings',
        'readOnly',
      ],
    },
  ],
  properties: {
    title: {
      title: 'Title',
      description: 'Section friendly name',
      type: 'string',
    },
    required: {
      title: 'Required',
      description: "Don't allow deletion of this block",
      type: 'boolean',
    },
    fixed: {
      title: 'Fixed position',
      description: 'Disable drag & drop on this block',
      type: 'boolean',
    },
    fixedLayout: {
      title: 'Fixed layout',
      description: 'Fixed layout. Auto-update existing content accordingly',
      type: 'boolean',
    },
    disableNewBlocks: {
      title: 'Disable new blocks',
      description: 'Disable creation of new blocks after this block',
      type: 'boolean',
    },
    readOnly: {
      title: 'Read-only',
      description: 'Disable editing on this block',
      type: 'boolean',
    },
    readOnlySettings: {
      title: 'Read-only settings',
      description: 'Disable editing on block settings',
      type: 'boolean',
    },
  },
  required: [],
};

export default Schema;
