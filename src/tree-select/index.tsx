import { TreeSelect as ATreeSelect, TreeSelectProps } from 'antd';
import { BaseOptionType, DefaultOptionType } from 'antd/lib/select';
import { BaseSelectRef } from 'rc-select';
import * as React from 'react';
import { PullDown } from '../const';

const { TreeNode, SHOW_ALL, SHOW_CHILD, SHOW_PARENT } = ATreeSelect as any;

export type { TreeSelectProps };
export { TreeNode, SHOW_ALL, SHOW_PARENT, SHOW_CHILD };

const TreeSelectR: React.FC<TreeSelectProps> = (props) => {
  const { suffixIcon = PullDown, ...rest } = props;

  return <ATreeSelect suffixIcon={suffixIcon} {...rest} />;
};

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
