import config from '@plone/volto/registry';
import { useSelector } from 'react-redux';
import { ErrorBoundary } from '@eeacms/volto-metadata-block/widgets';
import { useMappedTokens } from '../useMappedTokens';
import '@eeacms/volto-metadata-block/less/public.less';

const ViewMetadataBlock = (props) => {
  const { data } = props.data;
  const { views } = config.widgets;

  const initialFormData = useSelector((state) => state?.content?.data || {});

  const { properties, metadata } = props;

  let metadata_element = {
    ...initialFormData,
    ...(properties || {}),
    ...(metadata || {}),
  };

  metadata_element = useMappedTokens(metadata_element);

  if (!data?.id) return '';

  let output = metadata_element[data.id];
  let Widget = views?.getWidget(data);

  if (!output && props.data.placeholder) {
    Widget = views?.default;
    output = props.data.placeholder;
  }

  if (!Widget) return '';

  const className = 'block metadata ' + data.id;
  return (
    <ErrorBoundary name={data.id}>
      <Widget value={output} className={className} />
    </ErrorBoundary>
  );
};

export default ViewMetadataBlock;
