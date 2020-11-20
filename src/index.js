import { EditMetadataBlock } from './components';
import { ViewMetadataBlock } from './components';
import iconSVG from '@plone/volto/icons/connector.svg';
import installWidgetsView from '@eeacms/volto-widgets-view';

const applyConfig = (config) => {
  if (!config.widgets.view) {
    config = installWidgetsView(config);
  }

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

  return config;
};

export default applyConfig;
