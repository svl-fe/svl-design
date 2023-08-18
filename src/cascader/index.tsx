import * as React from 'react';
import { Cascader as ACascader, CascaderProps } from 'antd';
import Icon from '@ant-design/icons';
import { Right } from '../const';
import { ReactComponent as pullDownSvg } from '../svg/icon-pulldown.svg'
import './style/index.less'

export type { CascaderProps };

const PlullDownSvg = <Icon component={pullDownSvg} className='svl-cascader-pull-down-icon' />

const Cascader: React.FC<CascaderProps<any>> = (props) => {
  const { suffixIcon = PlullDownSvg, expandIcon = Right, ...rest } = props;

  return (
    <ACascader suffixIcon={suffixIcon} expandIcon={expandIcon} {...rest} />
  );
};

export default Cascader;
