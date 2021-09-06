import React from 'react';
import config from '@plone/volto/registry';
import { useSelector } from 'react-redux';
import { Table } from 'semantic-ui-react';
import { ErrorBoundary } from '@eeacms/volto-metadata-block/widgets';
import { isEmpty } from 'lodash';
import { withBlockExtensions } from '@plone/volto/helpers';
import '@eeacms/volto-metadata-block/less/public.less';

const Field = (props) => {
  const { data, properties = {}, showLabel } = props;
  const { views } = config.widgets;
  const initialFormData = useSelector((state) => state?.content?.data || {});
  let metadata = { ...initialFormData, ...properties };

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
    <ErrorBoundary name={data.id}>
      {showLabel ? <label for={data.id} className={className}>{data?.title}</label> : ''}
      <Widget value={output} className={className} id={data.id} />
    </ErrorBoundary>
  );
};

const ViewMetadataSectionBlock = withBlockExtensions((props) => {
  const { variation } = props;
  const ViewComponent = variation.view;

  return <ViewComponent {...props} />;
});

export const MetadataSectionListingView = (props) => {
  const { data } = props;
  const { fields = [] } = data;
  const showFields = fields.filter(({ hideInView }) => !hideInView);

  return showFields?.length
    ? showFields.map(({ field, showLabel }, i) => (
        <Field key={i} {...props} showLabel={showLabel} data={field} />
      ))
    : '';
};

export const MetadataSectionTableView = (props) => {
  const { data = {}, properties = {} } = props;
  const { table = {}, fields = [] } = data;

  const initialFormData = useSelector((state) => state?.content?.data || {});
  let metadata = { ...initialFormData, ...properties };
  const showFields = fields.filter(({ hideInView }) => !hideInView);

  return showFields.length ? (
    <Table
      fixed={table.fixed}
      compact={table.compact}
      basic={table.basic ? 'very' : false}
      celled={table.celled}
      inverted={table.inverted}
      striped={table.striped}
    >
      <Table.Body>
        {showFields.map(({ field, showLabel }, i) => {
          const hasValue = !isEmpty(metadata[field?.id]);

          return hasValue ? (
            <Table.Row>
              <Table.HeaderCell width={1}>{field.title}</Table.HeaderCell>
              <Table.Cell>
                <Field key={i} {...props} showLabel={false} data={field} />
              </Table.Cell>
            </Table.Row>
          ) : (
            ''
          );
        })}
      </Table.Body>
    </Table>
  ) : (
    ''
  );
};

export default ViewMetadataSectionBlock;
