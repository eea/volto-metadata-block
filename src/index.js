import {
  MetadataBlockEdit,
  MetadataBlockView,
  MetadataSectionBlockEdit,
  MetadataSectionBlockView,
  MetadataSectionLayoutSchema,
  MetadataSectionListingView,
  MetadataSectionTableView,
} from './components';
import { SelectMetadataField } from './widgets';
import { addTableField } from './components/manage/Blocks/MetadataSection/variations';

import iconSVG from '@plone/volto/icons/connector.svg';

const applyConfig = (config) => {
  config.widgets.widget.select_metadata_field = SelectMetadataField;

  config.blocks.blocksConfig.metadata = {
    id: 'metadata',
    title: 'Metadata',
    icon: iconSVG,
    group: 'common',
    view: MetadataBlockView,
    edit: MetadataBlockEdit,
    restricted: false,
    mostUsed: false,
    blockHasOwnFocusManagement: true,
    sidebarTab: 0,
    security: {
      addPermission: [],
      view: [],
    },
  };

  config.blocks.blocksConfig.metadataSection = {
    id: 'metadataSection',
    title: 'Metadata Section',
    icon: iconSVG,
    group: 'common',
    view: MetadataSectionBlockView,
    edit: MetadataSectionBlockEdit,
    schema: MetadataSectionLayoutSchema,
    restricted: false,
    mostUsed: false,
    blockHasOwnFocusManagement: true,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
    variations: [
      {
        id: 'default',
        isDefault: true,
        title: 'Simple list',
        view: MetadataSectionListingView,
      },
      {
        id: 'table',
        title: 'Table',
        view: MetadataSectionTableView,
        schemaEnhancer: addTableField,
      },
    ],
  };

  return config;
};

export default applyConfig;
