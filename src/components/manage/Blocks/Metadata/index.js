import iconSVG from '@plone/volto/icons/connector.svg';
import MetadataBlockEdit from './Edit';
import MetadataBlockView from './View';

export default function installMetadataBlock(config) {
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

  return config;
}
