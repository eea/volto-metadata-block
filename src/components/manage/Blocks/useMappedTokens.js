// src/hooks/useMappedTokens.js
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVocabularyTokenTitle } from '@plone/volto/actions';
import { mapTokensToLabels } from './utils';

const vocabulary = 'plone.app.vocabularies.Users';

export const useMappedTokens = (metadata_element, enabled = false) => {
  const dispatch = useDispatch();

  const users = useSelector(
    (state) => state?.vocabularies[vocabulary]?.subrequests?.user?.items || [],
  );

  const tokens = useMemo(
    () => [
      ...(metadata_element.creators || []),
      ...(metadata_element.contributors || []),
    ],
    [metadata_element.creators, metadata_element.contributors],
  );

  useEffect(() => {
    if (tokens.length > 0 && users.length === 0 && enabled) {
      dispatch(
        getVocabularyTokenTitle({
          vocabNameOrURL: vocabulary,
          tokens: tokens,
          subrequest: 'user',
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, tokens, users.length]);

  if (metadata_element.contributors?.length > 0) {
    metadata_element.contributors = mapTokensToLabels(
      metadata_element.contributors,
      users,
    );
  }

  if (metadata_element.creators?.length > 0) {
    metadata_element.creators = mapTokensToLabels(
      metadata_element.creators,
      users,
    );
  }

  return metadata_element;
};
