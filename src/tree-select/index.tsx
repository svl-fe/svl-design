import * as React from 'react';
import { TreeSelect as ATreeSelect } from 'antd';
import type { TreeSelectProps } from 'antd';
import { BaseOptionType, DefaultOptionType } from 'antd/lib/select';
import type { BaseSelectRef } from 'rc-select';
import { PullDown } from '../const';

const { TreeNode, SHOW_ALL, SHOW_CHILD, SHOW_PARENT } = ATreeSelect;

export type { TreeSelectProps };

const TreeSelectR: React.FC<TreeSelectProps> = (props) => {
  const { suffixIcon = PullDown, ...rest } = props;

  return <ATreeSelect suffixIcon={suffixIcon} {...rest} />;
};

export { TreeNode, SHOW_ALL, SHOW_PARENT, SHOW_CHILD };

const TreeSelect = TreeSelectR as (<
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
>(
  props: React.PropsWithChildren<TreeSelectProps<ValueType, OptionType>> & {
    ref?: React.Ref<BaseSelectRef>;
  },
) => React.ReactElement) & {
  TreeNode: typeof TreeNode;
  SHOW_ALL: typeof SHOW_ALL;
  SHOW_PARENT: typeof SHOW_PARENT;
  SHOW_CHILD: typeof SHOW_CHILD;
};

TreeSelect.TreeNode = TreeNode;
TreeSelect.SHOW_ALL = SHOW_ALL;
TreeSelect.SHOW_PARENT = SHOW_PARENT;
TreeSelect.SHOW_CHILD = SHOW_CHILD;

export default TreeSelect;
