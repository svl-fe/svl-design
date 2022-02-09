import * as React from 'react';
import { Button as AButton } from 'antd';
import type { ButtonProps as AButtonProps } from 'antd';
import classNames from 'classnames';

import './style/index.less';

interface ButtonProps extends AButtonProps {}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, ...rest } = props;
  const btnCls = classNames('svl-btn', className, {
    'svl-btn-default': !rest.type || rest.type === 'default',
  });

  return (
    <AButton className={btnCls} {...rest}>
      {children}
    </AButton>
  );
};

export default Button;

export type { ButtonProps };
