import React from 'react';
import { widgets } from '~/config';
import { useSelector } from 'react-redux';
import { FormStateContext } from '@plone/volto/components/manage/Form/FormContext';
import './less/public.less';

export const ViewMetadataBlock = (props) => {
  const { data } = props.data;
  const { views } = widgets;
  const initialFormData = useSelector((state) => state?.content?.data || {});
  let metadata = { ...initialFormData };

  // Get data from FormContext
  const context = React.useContext(FormStateContext);
  if (context) {
    const { contextData } = context;
    const { formData } = contextData;
    metadata = { ...formData };
  }

  let output = metadata[data.id];
  let Widget = views?.getWidget(data);
  let className = 'block metadata ' + data?.id;

  return Widget ? <Widget value={output} className={className} /> : output;
};
