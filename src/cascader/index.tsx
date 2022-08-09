import * as React from 'react';
import { Cascader as ACascader } from 'antd';
import type { CascaderProps as ACascaderProps } from 'antd';
import { PullDown, Right } from '../const';

export interface CascaderProps<T> extends ACascaderProps<T> {
  multiple?: boolean;
}

const Cascader: React.FC<CascaderProps<any>> = (props) => {
  const { suffixIcon = PullDown, expandIcon = Right, ...rest } = props;

  return <ACascader suffixIcon={suffixIcon} expandIcon={expandIcon} {...rest} />;
};

export default Cascader;
