import { Tabs as ATabs, TabsProps as ATabsProps } from 'antd';
import classNames from 'classnames';
import * as React from 'react';

import TabPane, { TabPaneProps } from 'antd/lib/tabs/TabPane';
import './style/index.less';
export type { TabPaneProps };
export interface TabsProps extends Omit<ATabsProps, 'type'> {
  /** radius-card */
  type?: ATabsProps['type'] | 'radius-card' | 'out-radius';
}

const Tabs: React.FC<TabsProps> = (props) => {
  const { className, type, ...rest } = props;
  let typeProps: ATabsProps['type'];
  const radiusType = type === 'radius-card';
  const outRadiusType = type === 'out-radius';
  if (!(radiusType || outRadiusType)) {
    typeProps = type;
  } else {
    typeProps = 'card';
  }
  const TabsCls = classNames('svl-tabs', className, {
    'svl-radius-tabs': radiusType,
    'svl-out-radius-tabs': outRadiusType,
  });

  return <ATabs className={TabsCls} type={typeProps} {...rest}></ATabs>;
};

type ForwardTabsType = typeof Tabs & { TabPane: typeof TabPane };

(Tabs as ForwardTabsType).TabPane = TabPane;

export default Tabs as ForwardTabsType;
