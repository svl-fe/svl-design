import { Tabs as ATabs, TabsProps as ATabsProps } from 'antd';
import classNames from 'classnames';
import * as React from 'react';

import TabPane, { TabPaneProps } from 'antd/lib/tabs/TabPane';
import './style/index.less';
export type { TabPaneProps };
export interface TabsProps extends Omit<ATabsProps, 'type'> {
  /** radius-card */
  type?: ATabsProps['type'] | 'radius-card';
}

const Tabs: React.FC<TabsProps> = (props) => {
  const { className, type, ...rest } = props;
  let typeProps: ATabsProps['type'];
  const selfType = type === 'radius-card';
  if (!selfType) {
    typeProps = type;
  } else {
    typeProps = 'card';
  }
  const TabsCls = classNames('svl-tabs', className, {
    'svl-radius-tabs': selfType,
  });

  return <ATabs className={TabsCls} type={typeProps} {...rest}></ATabs>;
};

type ForwardTabsType = typeof Tabs & { TabPane: typeof TabPane };

(Tabs as ForwardTabsType).TabPane = TabPane;

export default Tabs as ForwardTabsType;
