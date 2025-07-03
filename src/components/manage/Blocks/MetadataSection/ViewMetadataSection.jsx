import config from '@plone/volto/registry';
import { useSelector } from 'react-redux';
import { Table } from 'semantic-ui-react';
import { ErrorBoundary } from '@eeacms/volto-metadata-block/widgets';
import { isEmpty } from 'lodash';
import { withBlockExtensions } from '@plone/volto/helpers';
import '@eeacms/volto-metadata-block/less/public.less';
import { useIntl } from 'react-intl';

function isEmptyWithNumberCheck(value) {
  // Check if the value is a number and is not NaN
  if (typeof value === 'number' && !isNaN(value)) {
    return false; // Numbers, including 0, are considered non-empty
  }

  // Fallback to Lodash's isEmpty for other types
  return isEmpty(value);
}
const Field = (props) => {
  const { data, properties = {}, metadata = {}, showLabel } = props;
  const { views } = config.widgets;
  const intl = useIntl();

  const initialFormData = useSelector((state) => state?.content?.data || {});
  const dataTitle = data?.title;
  const label = intl.formatMessage({ id: dataTitle, message: dataTitle });

  let metadata_element = {
    ...initialFormData,
    ...(properties || {}),
    ...(metadata || {}),
  };

  if (!data?.id) {
    return '';
  }

  let output = metadata_element[data.id];

  let Widget = views?.getWidget(data);
  if (!output && props.data.placeholder) {
    Widget = views?.default;
    output = props.data.placeholder;
  }

  const hasValue = !isEmptyWithNumberCheck(output);

  if (!Widget || !hasValue) {
    return '';
  }

  let className = 'block metadata ' + data.id;
  return (
    <ErrorBoundary name={data.id}>
      {showLabel ? (
        <label htmlFor={`metadata-${data.id}`} className={className}>
          {label}
        </label>
      ) : (
        ''
      )}
      <Widget
        value={output}
        content={metadata_element}
        className={className}
        id={`metadata-${data.id}`}
      />
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
  const { data = {}, properties = {}, metadata = {} } = props;
  const { table = {}, fields = [] } = data;

  const initialFormData = useSelector((state) => state?.content?.data || {});
  let metadata_element = { ...initialFormData, ...properties, ...metadata };
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
        {showFields.map(({ field }, i) => {
          const hasValue = !isEmptyWithNumberCheck(metadata_element[field?.id]);

          return hasValue ? (
            <Table.Row key={i}>
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
