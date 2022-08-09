import * as React from 'react';
import { TreeSelect as ATreeSelect } from 'antd';
import type { TreeSelectProps as ATreeSelectProps } from 'antd';
import { PullDown } from '../const';

const { TreeNode, SHOW_ALL, SHOW_CHILD, SHOW_PARENT } = ATreeSelect;

export interface TreeSelectProps extends ATreeSelectProps {}

const TreeSelectR: React.FC<TreeSelectProps> = (props) => {
  const { suffixIcon = PullDown, ...rest } = props;

  return <ATreeSelect suffixIcon={suffixIcon} {...rest} />;
};

export { TreeNode, SHOW_ALL, SHOW_PARENT, SHOW_CHILD };

type InternalTreeSelectType = typeof TreeSelectR;
interface TreeSelectInterface extends InternalTreeSelectType {
  TreeNode: typeof TreeNode;
  SHOW_ALL: typeof SHOW_ALL;
  SHOW_PARENT: typeof SHOW_PARENT;
  SHOW_CHILD: typeof SHOW_CHILD;
}

const TreeSelect = TreeSelectR as TreeSelectInterface;

TreeSelect.TreeNode = TreeNode;
TreeSelect.SHOW_ALL = SHOW_ALL;
TreeSelect.SHOW_PARENT = SHOW_PARENT;
TreeSelect.SHOW_CHILD = SHOW_CHILD;

export default TreeSelect;
