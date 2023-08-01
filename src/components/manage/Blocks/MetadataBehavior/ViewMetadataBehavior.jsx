import React from 'react';
import config from '@plone/volto/registry';
import { useSelector } from 'react-redux';
import { ErrorBoundary } from '@eeacms/volto-metadata-block/widgets';
// import { isEmpty } from 'lodash';
import { withBlockExtensions } from '@plone/volto/helpers';
import '@eeacms/volto-metadata-block/less/public.less';

const ViewMetadataBehaviorBlock = withBlockExtensions((props) => {
  const { variation } = props;
  const ViewComponent = variation.view;

  return <ViewComponent {...props} />;
});

export const MetadataBehaviorDefaultView = (props) => {
  const { data } = props;
  const { fields = [] } = data;
  return 'View view';
};

const Field = (props) => {
  const { data, properties = {}, metadata = {}, showLabel } = props;
  const { views } = config.widgets;
  const initialFormData = useSelector((state) => state?.content?.data || {});
  let metadata_element = { ...initialFormData, ...properties, ...metadata };

  if (!data?.id) {
    return '';
  }

  let output = metadata_element[data.id];
  let Widget = views?.getWidget(data);
  if (!output && props.data.placeholder) {
    Widget = views?.default;
    output = props.data.placeholder;
  }

  if (!Widget) {
    return '';
  }

  let className = 'block metadata ' + data.id;
  return (
    <ErrorBoundary name={data.id}>
      {showLabel ? (
        <label htmlFor={`metadata-${data.id}`} className={className}>
          {data?.title}
        </label>
      ) : (
        ''
      )}
      <Widget value={output} className={className} id={`metadata-${data.id}`} />
    </ErrorBoundary>
  );
};

export default ViewMetadataBehaviorBlock;
