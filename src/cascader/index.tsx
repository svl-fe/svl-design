import { Cascader as ACascader, CascaderProps } from 'antd';
import * as React from 'react';
import { PullDown, Right } from '../const';

export type { CascaderProps };

const Cascader: React.FC<CascaderProps<any>> = (props) => {
  const { suffixIcon = PullDown, expandIcon = Right, ...rest } = props;

  return (
    <ACascader suffixIcon={suffixIcon} expandIcon={expandIcon} {...rest} />
  );
};

export default Cascader;
