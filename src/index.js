import {
  EditMetadataBlock,
  ViewMetadataBlock,
  EditMetadataSectionBlock,
  ViewMetadataSectionBlock,
} from './components';
import { SelectMetadataField } from './widgets';

import iconSVG from '@plone/volto/icons/connector.svg';

const applyConfig = (config) => {
  config.widgets.widget.select_metadata_field = SelectMetadataField;

  config.blocks.blocksConfig.metadata = {
    id: 'metadata',
    title: 'Metadata',
    icon: iconSVG,
    group: 'common',
    view: ViewMetadataBlock,
    edit: EditMetadataBlock,
    restricted: false,
    mostUsed: false,
    blockHasOwnFocusManagement: false,
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
    view: ViewMetadataSectionBlock,
    edit: EditMetadataSectionBlock,
    restricted: false,
    mostUsed: false,
    blockHasOwnFocusManagement: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  };

  return config;
};

export default applyConfig;
