import * as React from 'react';
import { useEffect } from 'react';
import classNames from 'classnames';

import './style/index.less';

interface LabelProps {
  type?: 'line' | 'face' | 'ghost';
  size?: 'small' | 'middle' | 'large';
  status?: 'success' | 'error' | 'warning' | 'default';
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  closable?: boolean;
  closeIcon?: React.ReactNode;
  visible?: boolean;
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
  icon?: React.ReactNode;
}

const prefixCls = 'svl-label';
const sizeClassNameMap = { large: 'lg', small: 'sm', middle: undefined };

export const Label: React.FC<LabelProps> = (props) => {
  const {
    className,
    type = 'line',
    icon,
    size,
    style,
    status,
    closable,
    closeIcon,
    onClose,
    children,
  } = props;

  const sizeCls = size ? sizeClassNameMap[size] || '' : '';
  const [visible, setVisible] = React.useState(true);
  const labelCls = classNames(
    prefixCls,
    {
      [`${prefixCls}-type-${type}`]: type,
      [`${prefixCls}-size-${sizeCls}`]: sizeCls,
      [`${prefixCls}-status-${status}`]: !!status,
      [`${prefixCls}-hidden`]: !visible,
    },
    className,
  );
  useEffect(() => {
    if ('visible' in props) {
      setVisible(props.visible!);
    }
  }, [props.visible]);

  const handleCloseClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onClose?.(e);

    if (e.defaultPrevented) {
      return;
    }
    if (!('visible' in props)) {
      setVisible(false);
    }
  };

  const renderCloseIcon = () => {
    if (closable) {
      return closeIcon ? (
        <span className={`${prefixCls}-close-icon`} onClick={handleCloseClick}>
          {closeIcon}
        </span>
      ) : (
        <span
          data-testid="custom-element"
          className={`${prefixCls}-close-icon ${prefixCls}-close`}
          onClick={handleCloseClick}
        ></span>
      );
    }
    return null;
  };

  return (
    <span className={labelCls} style={style}>
      {icon || null}
      {children}
      {renderCloseIcon()}
    </span>
  );
};
export default Label;

export type { LabelProps };
