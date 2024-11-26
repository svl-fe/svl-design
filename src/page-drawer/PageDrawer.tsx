import Icon from '@ant-design/icons';
import {
  Drawer as ADrawer,
  DrawerProps as ADrawerProps,
  Button,
  Space,
} from 'antd';
import classNames from 'classnames';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import { Close } from '../const';
import { ReactComponent as downSvg } from '../svg/icon-down.svg';
import { ReactComponent as closeSvg } from '../svg/icon-guanbi.svg';
import { ReactComponent as spreadSvg } from '../svg/icon-spread.svg';
import { ReactComponent as upSvg } from '../svg/icon-up.svg';
import './style/index.less';

interface PageDrawerProps extends ADrawerProps {
  /** 标题名字 */
  titleName?: React.ReactNode;
  /** 载入状态 */
  loading?: boolean;
  /** 取消按钮文字 默认值 取消 */
  cancelText?: string;
  /** 确认按钮文字 默认值 完成 */
  okText?: string;
  /** 前一页使能状态 */
  prevDisabled?: boolean;
  /** 下一个使能状态 */
  nextDisabled?: boolean;
  /** 操作项 */
  pagination?: React.ReactNode | null;
  /** 点击确定回调 */
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;
  /** 上一页 */
  handlePrevPage?: () => void;
  /** 下一页 */
  handleNextPage?: () => void;
  /** 跳转详情 */
  gotoDetail?: () => void;
  /** 是否显示关闭按钮 */
  showClose?: boolean;
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
    prevDisabled = false,
    nextDisabled = false,
    showClose = true,
    open,
    onClose,
    onOk,
    handleNextPage,
    handlePrevPage,
    gotoDetail,
    pagination = null,
    children,
    okText = enFlag ? 'Complete' : '完成',
    cancelText = enFlag ? 'Close' : '取消',
    ...rest
  } = props;

  const drawerCls = classNames('svl-page-drawer', className);
  const drawerContentRef = useRef<HTMLDivElement>(null);

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClose?.(event);
  };

  const handleOk = (event: React.MouseEvent<HTMLElement>) => {
    onOk?.(event);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modalMask = (event.target as Element).closest('.ant-modal-wrap');
      const drawerMask = (event.target as Element).closest('.ant-drawer-mask');
      const previewImgMask =
        (event.target as Element).closest('.ant-image-preview-wrap') ||
        (event.target as Element).closest(
          '.ant-image-preview-operations-wrapper',
        );

      if (modalMask || drawerMask || previewImgMask) {
        // 如果点击的是模态框或抽屉的蒙层，阻止事件冒泡
        event.stopPropagation();
        return;
      }

      if (
        open &&
        drawerContentRef.current &&
        !drawerContentRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest('.ant-drawer-content-wrapper') &&
        !(event.target as Element).closest('[data-drawer-element]') && // 新增：检查是否点击了带有 data-drawer-element 属性的元素
        !(event.target as Element).closest('.ant-modal') &&
        !(event.target as Element).closest('.ant-tooltip') &&
        !(event.target as Element).closest('.ant-image-preview-body')
      ) {
        onClose?.(event as any);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, onClose]);

  const dftTitle = (
    <div className="svl-title" data-drawer-element="title">
      <span>{titleName}</span>
      <div
        className="svl-page-drawer-pagination"
        data-drawer-element="pagination"
      >
        {!pagination ? (
          <>
            <Icon
              component={upSvg}
              className="svl-page-drawer-icon"
              onClick={() => handlePrevPage?.()}
              style={
                prevDisabled ? { cursor: 'not-allowed' } : { cursor: 'pointer' }
              }
            />
            <Icon
              component={downSvg}
              className="svl-page-drawer-icon"
              onClick={() => handleNextPage?.()}
              style={
                nextDisabled ? { cursor: 'not-allowed' } : { cursor: 'pointer' }
              }
            />
            <Icon
              component={spreadSvg}
              className="svl-page-drawer-icon"
              onClick={() => gotoDetail?.()}
            />
            {showClose ? (
              <Icon
                component={closeSvg}
                className="svl-page-drawer-icon"
                onClick={handleClose}
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
    <div className="svl-page-drawer-footer" data-drawer-element="footer">
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
    <span
      onClick={handleClose}
      className="svl-page-drawer-close"
      data-drawer-element="close"
    >
      {closeIcon}
    </span>
  );

  return (
    <ADrawer
      mask={false}
      className={drawerCls}
      placement={placement}
      closable={closable}
      open={open}
      title={title || dftTitle}
      footer={footer === null ? null : footer || dftFooter}
      extra={extra || dftExtra}
      onClose={onClose}
      {...rest}
    >
      <div ref={drawerContentRef} data-drawer-element="content">
        {children}
      </div>
    </ADrawer>
  );
};

export default PageDrawer;

export type { PageDrawerProps };
