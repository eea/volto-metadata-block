import iconSVG from '@plone/volto/icons/page.svg';
import ViewMetadataBehavior, {
  MetadataBehaviorDefaultView,
} from './ViewMetadataBehavior';
import EditMetadataBehavior from './EditMetadataBehavior';
import MetadataBehaviorSchema from './schema';

export default function installMetadataBehavior(config) {
  config.blocks.blocksConfig.metadataBehavior = {
    id: 'metadataBehavior',
    title: 'Metadata Behavior',
    icon: iconSVG,
    group: 'common',
    view: ViewMetadataBehavior,
    edit: EditMetadataBehavior,
    // schema: MetadataBehaviorLayoutSchema,
    blockSchema: MetadataBehaviorSchema,
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
        title: 'Default view',
        view: MetadataBehaviorDefaultView,
      },
    ],
  };

  return config;
}
