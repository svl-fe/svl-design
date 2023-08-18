import * as React from 'react';
import { TreeSelect as ATreeSelect, TreeSelectProps } from 'antd';
import { TreeNode } from 'antd/lib/tree-select';
import Icon from '@ant-design/icons';
import type { BaseSelectRef } from 'rc-select';
import type {
  BaseOptionType,
  DefaultOptionType,
} from 'rc-tree-select/lib/TreeSelect';
import { ReactComponent as pullDownSvg } from '../svg/icon-pulldown.svg'
import './style/index.less'

export type { TreeSelectProps };
export { TreeNode, SHOW_ALL, SHOW_PARENT, SHOW_CHILD };

const { SHOW_ALL, SHOW_CHILD, SHOW_PARENT } = ATreeSelect;
const PlullDownSvg = <Icon component={pullDownSvg} className='svl-tree-select-pull-down-icon' />

const TreeSelectR: React.FC<TreeSelectProps> = (props) => {
  const { suffixIcon = PlullDownSvg, ...rest } = props;

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
