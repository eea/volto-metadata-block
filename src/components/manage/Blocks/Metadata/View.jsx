import React from 'react';
import config from '@plone/volto/registry';
import { useSelector } from 'react-redux';
import './less/public.less';

export const ViewMetadataBlock = (props) => {
  const { data } = props.data;
  const { views } = config.widgets;
  const initialFormData = useSelector((state) => state?.content?.data || {});
  let metadata = { ...initialFormData };

  const { properties } = props;
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
  return <Widget value={output} className={className} />;
};
