import React from 'react';
import cx from 'classnames';
import { SelectMetadataBlock } from './Select';

export const EditMetadataBlock = (props) => {
  const { selected, block, onSelectBlock, data, onChangeBlock } = props;

  const onChange = (event, selected) => {
    onChangeBlock(block, { ...data, ...selected.value });
  };

  return (
    <div className={cx('block metadata', { selected: selected })}>
      <SelectMetadataBlock
        onChange={onChange}
        onOpen={() => onSelectBlock(block)}
      />
    </div>
  );
};
