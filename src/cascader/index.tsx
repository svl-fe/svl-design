import * as React from 'react';
import { Cascader as ACascader } from 'antd';
import type { CascaderProps } from 'antd';
import { PullDown, Right } from '../const';

export type { CascaderProps };

const Cascader: React.FC<CascaderProps<any>> = (props) => {
  const { suffixIcon = PullDown, expandIcon = Right, ...rest } = props;

  return <ACascader suffixIcon={suffixIcon} expandIcon={expandIcon} {...rest} />;
};

export default Cascader;
