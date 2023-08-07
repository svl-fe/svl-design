import { Button as AButton, ButtonProps as AButtonProps } from 'antd';
import classNames from 'classnames';
import * as React from 'react';

import './style/index.less';

type ButtonProps = AButtonProps;

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
