import React from 'react';
import config from '@plone/volto/registry';
import { useSelector } from 'react-redux';
import '@eeacms/volto-metadata-block/less/public.less';

const Field = (props) => {
  const { data, properties, showLabel } = props;
  const { views } = config.widgets;
  const initialFormData = useSelector((state) => state?.content?.data || {});
  let metadata = { ...initialFormData };

  if (properties) {
    metadata = { ...properties };
  }
  if (!data?.id) {
    return '';
  }

  let output = metadata[data.id];
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
    <>
      {showLabel ? data?.title : ''}
      <Widget value={output} className={className} />
    </>
  );
};

const ViewMetadataSectionBlock = (props) => {
  const { data } = props;
  const { fields } = data;

  return fields?.length
    ? fields.map(({ field, showLabel }, i) => (
        <Field key={i} {...props} showLabel={showLabel} data={field} />
      ))
    : '';
};

export default ViewMetadataSectionBlock;
