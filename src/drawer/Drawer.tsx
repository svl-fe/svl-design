import {
  Drawer as ADrawer,
  DrawerProps as ADrawerProps,
  Button,
  Space,
} from 'antd';
import classNames from 'classnames';
import * as React from 'react';

import { Close } from '../const';
import './style/index.less';

interface DrawerProps extends ADrawerProps {
  /** 标题名字 */
  titleName?: string;
  /** 载入状态 */
  loading?: boolean;
  /** 点击确定回调 */
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Drawer: React.FC<DrawerProps> = (props) => {
  const {
    title,
    loading,
    titleName,
    className,
    closable = false,
    placement = 'right',
    extra,
    footer,
    closeIcon = Close,
    onClose,
    onOk,
    children,
    ...rest
  } = props;

  const drawerCls = classNames('svl-drawer', className);

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClose?.(event);
  };

  const handleOk = (event: React.MouseEvent<HTMLElement>) => {
    onOk?.(event);
  };

  const dftTitle = <div className={'svl-title'}>{titleName}</div>;

  const dftFooter = (
    <div className={'svl-drawer-footer'}>
      <Space>
        <Button size="large" onClick={handleClose}>
          取消
        </Button>
        <Button
          size="large"
          onClick={handleOk}
          type="primary"
          loading={loading}
        >
          完成
        </Button>
      </Space>
    </div>
  );

  const dftExtra = (
    <span onClick={handleClose} className={'svl-drawer-close'}>
      {closeIcon}
    </span>
  );

  return (
    <ADrawer
      className={drawerCls}
      placement={placement}
      closable={closable}
      title={title || dftTitle}
      footer={footer || dftFooter}
      extra={extra || dftExtra}
      onClose={onClose}
      {...rest}
    >
      {children}
    </ADrawer>
  );
};

export default Drawer;

export type { DrawerProps };
