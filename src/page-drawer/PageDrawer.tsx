import Icon from '@ant-design/icons';
import {
  Drawer as ADrawer,
  DrawerProps as ADrawerProps,
  Button,
  Space,
} from 'antd';
import classNames from 'classnames';
import * as React from 'react';
import { Close } from '../const';
import { ReactComponent as downSvg } from '../svg/icon-down.svg';
import { ReactComponent as fullSvg } from '../svg/icon-spread.svg';
import { ReactComponent as upSvg } from '../svg/icon-up.svg';
import './style/index.less';

interface PageDrawerProps extends ADrawerProps {
  /** 标题名字 */
  titleName?: string;
  /** 载入状态 */
  loading?: boolean;
  /** 取消按钮文字 默认值 取消 */
  cancelText?: string;
  /** 确认按钮文字 默认值 完成 */
  okText?: string;
  pagination?: React.ReactNode | null;
  /** 点击确定回调 */
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;
  /** 上一页 */
  handlePrevPage?: () => void;
  /** 下一页 */
  handleNextPage?: () => void;
  /** 全屏 */
  handleFull?: () => void;
  showFull?: () => void;
}

export const PageDrawer: React.FC<PageDrawerProps> = (props) => {
  const storageLang = window.localStorage.getItem('lang');
  const enFlag = storageLang === 'en-US';

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
    showFull = true,
    onClose,
    onOk,
    handleNextPage,
    handlePrevPage,
    handleFull,
    pagination = null,
    children,
    okText = enFlag ? 'Complete' : '完成',
    cancelText = enFlag ? 'Close' : '取消',
    ...rest
  } = props;

  const drawerCls = classNames('svl-page-drawer', className);

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClose?.(event);
  };

  const handleOk = (event: React.MouseEvent<HTMLElement>) => {
    onOk?.(event);
  };

  const dftTitle = (
    <div className="svl-title">
      <span>{titleName}</span>
      <div className="svl-page-drawer-pagination">
        {!pagination ? (
          <>
            <Icon
              component={upSvg}
              className="svl-page-drawer-icon"
              onClick={() => handlePrevPage?.()}
            />
            <Icon
              component={downSvg}
              className="svl-page-drawer-icon"
              onClick={() => handleNextPage?.()}
            />
            {showFull ? (
              <Icon
                component={fullSvg}
                className="svl-page-drawer-icon"
                onClick={() => handleFull?.()}
                style={{ marginTop: '8px' }}
              />
            ) : null}
          </>
        ) : (
          pagination
        )}
      </div>
    </div>
  );

  const dftFooter = (
    <div className={'svl-page-drawer-footer'}>
      <Space>
        <Button size="large" onClick={handleClose}>
          {cancelText}
        </Button>
        <Button
          size="large"
          onClick={handleOk}
          type="primary"
          loading={loading}
        >
          {okText}
        </Button>
      </Space>
    </div>
  );

  const dftExtra = (
    <span onClick={handleClose} className={'svl-page-drawer-close'}>
      {closeIcon}
    </span>
  );

  return (
    <ADrawer
      mask={false}
      className={drawerCls}
      placement={placement}
      closable={closable}
      title={title || dftTitle}
      footer={footer === null ? null : footer || dftFooter}
      extra={extra || dftExtra}
      onClose={onClose}
      {...rest}
    >
      {children}
    </ADrawer>
  );
};

export default PageDrawer;

export type { PageDrawerProps };
