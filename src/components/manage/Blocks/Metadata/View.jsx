import React, { useEffect, useMemo } from 'react';
import { getVocabularyTokenTitle } from '@plone/volto/actions';
import config from '@plone/volto/registry';
import { useSelector, useDispatch } from 'react-redux';
import { ErrorBoundary } from '@eeacms/volto-metadata-block/widgets';
import '@eeacms/volto-metadata-block/less/public.less';

const vocabulary = 'plone.app.vocabularies.Users';

const ViewMetadataBlock = (props) => {
  const { data } = props.data;
  const { views } = config.widgets;
  const dispatch = useDispatch();

  const initialFormData = useSelector((state) => state?.content?.data || {});
  const users = useSelector(
    (state) => state?.vocabularies[vocabulary]?.subrequests?.user?.items || [],
  );

  const { properties, metadata } = props;

  const metadata_element = {
    ...initialFormData,
    ...(metadata || {}),
    ...(properties || {}),
  };

  const tokens = useMemo(
    () => [
      ...(metadata_element.creators || []),
      ...(metadata_element.contributors || []),
    ],
    [metadata_element.creators, metadata_element.contributors],
  );

  useEffect(() => {
    if (tokens.length > 0 && users.length === 0) {
      dispatch(
        getVocabularyTokenTitle({
          vocabNameOrURL: vocabulary,
          tokens: tokens,
          subrequest: 'user',
        }),
      );
    }
  }, [dispatch, tokens, users.length]);

  if (!data?.id) return '';

  const mapTokensToLabels = (tokensArray = []) =>
    tokensArray.map((token) => {
      const user = users.find((user) => user.value === token);
      return user ? user.label : token;
    });

  // Overwrite 'contributors' and 'creators' if they are not empty
  metadata_element.contributors = mapTokensToLabels(
    metadata_element.contributors,
  );
  metadata_element.creators = mapTokensToLabels(metadata_element.creators);

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
