import React, { useMemo } from 'react';
import { Switch as ASwitch, SwitchProps as ASwitchProps } from 'antd';
import classNames from 'classnames';
import { SwitchSize } from 'antd/lib/switch';
import './style.less';

export interface SwitchProps extends Omit<ASwitchProps, 'size'> {
  size?: SwitchSize | 'large';
}

const Switch: React.FC<SwitchProps> = (props) => {
  const { size = 'default', className, ...rest } = props;

  const SwitchClass = useMemo(
    () =>
      classNames('svl-switch', className, {
        'svl-switch-large': size === 'large',
      }),
    [size, className],
  );

  return (
    <ASwitch
      size={size === 'large' ? 'default' : size}
      className={SwitchClass}
      {...rest}
    />
  );
};

export default Switch;
