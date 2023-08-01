import MetadataSectionLayoutSchema from './LayoutSchema';
import MetadataSectionBlockView, {
  MetadataSectionListingView,
  MetadataSectionTableView,
} from './ViewMetadataSection';
import MetadataSectionBlockEdit from './EditMetadataSection';
import MetadataSectionSchema from './schema';
import { addTableField } from './variations';

import iconSVG from '@plone/volto/icons/connector.svg';

export default function installMetadataSectionBlock(config) {
  config.blocks.blocksConfig.metadataSection = {
    id: 'metadataSection',
    title: 'Metadata Section',
    icon: iconSVG,
    group: 'common',
    view: MetadataSectionBlockView,
    edit: MetadataSectionBlockEdit,
    schema: MetadataSectionLayoutSchema,
    blockSchema: MetadataSectionSchema,
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
}
