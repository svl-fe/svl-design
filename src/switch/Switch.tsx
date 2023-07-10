import React, { useMemo } from 'react';
import { Switch as ASwitch, SwitchProps as ASwitchProps } from 'antd';
import classNames from 'classnames';
import './style.less';

export interface SwitchProps extends ASwitchProps {
  size: ASwitchProps['size'] & 'large';
}

const Switch: React.FC<SwitchProps> = (props) => {
  const { size, className, ...rest } = props;

  const SwitchClass = useMemo(
    () => classNames('svl-switch', className, { 'svl-switch-large': size === 'large' }),
    [size, className],
  );

  return <ASwitch size={size} className={SwitchClass} {...rest} />;
};

export default Switch;
