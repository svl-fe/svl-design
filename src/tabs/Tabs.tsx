import * as React from 'react';
import { Tabs as ATabs } from 'antd';

import type { TabsProps as ATabsProps } from 'antd';
import classNames from 'classnames';

import './style/index.less';

interface TabsProps extends Omit<ATabsProps, 'type'> {
  /** radius-card */
  type?: ATabsProps['type'] | 'radius-card';
}

export const Tabs: React.FC<TabsProps> = (props) => {
  const { className, type, ...rest } = props;
  let typeProps: ATabsProps['type'];
  const selfType = type === 'radius-card';
  if (!selfType) {
    typeProps = type;
  } else {
    typeProps = 'card';
  }
  const TabsCls = classNames('svl-tabs', className, { 'svl-radius-tabs': selfType });

  return <ATabs className={TabsCls} type={typeProps} {...rest}></ATabs>;
};

export default Tabs;

export type { TabsProps };
