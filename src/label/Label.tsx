import * as React from 'react';
import { useEffect } from 'react';
import classNames from 'classnames';
import { Close } from '../const';

import './style/index.less';
import { hex2rgba } from '../utils';

interface DotConfig {
  show: boolean;
  color: React.CSSProperties['color'];
}

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
  color?: React.CSSProperties['color'];
  dot?: boolean | DotConfig;
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
    color,
    dot,
  } = props;

  const dotVisible = React.useMemo(() => {
    if (!dot) return false;
    if (typeof dot === 'boolean') {
      return dot;
    }
    return dot.show;
  }, [dot]);

  const sizeCls = size ? sizeClassNameMap[size] || '' : '';
  const [visible, setVisible] = React.useState(true);
  const labelCls = classNames(
    prefixCls,
    {
      [`${prefixCls}-type-${type}`]: type,
      [`${prefixCls}-size-${sizeCls}`]: sizeCls,
      [`${prefixCls}-status-${status}`]: !!status,
      [`${prefixCls}-hidden`]: !visible,
      [`${prefixCls}-dot`]: dotVisible,
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
        >
          {Close}
        </span>
      );
    }
    return null;
  };

  return (
    <span
      className={labelCls}
      style={{ color, background: dotVisible ? 'transparent' : hex2rgba(color, 0.1), ...style }}
    >
      {dotVisible && <i style={{ color: typeof dot !== 'boolean' ? dot?.color : '' }}></i>}
      {icon || null}
      {children}
      {renderCloseIcon()}
    </span>
  );
};
export default Label;

export type { LabelProps };
