import { SelectMetadataField } from './widgets';
import installMetadataBlock from './components/manage/Blocks/Metadata';
import installMetadataBehavior from './components/manage/Blocks/MetadataBehavior';
import installMetadataSection from './components/manage/Blocks/MetadataSection';

const applyConfig = (config) => {
  config.widgets.widget.select_metadata_field = SelectMetadataField;

  return [
    installMetadataBlock,
    installMetadataSection,
    installMetadataBehavior,
  ].reduce((acc, cur) => cur(acc), config);
};

export default applyConfig;
