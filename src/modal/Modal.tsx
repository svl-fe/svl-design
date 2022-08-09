import * as React from 'react';
import { Modal as AModal } from 'antd';
import type { ModalProps as AModalProps, ModalFuncProps } from 'antd';
import classNames from 'classnames';

import './style/index.less';
import { Close } from '../const';

interface ModalProps extends AModalProps {
  /** 标题名字 */
  titleName?: string;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { title, titleName, className, children, closeIcon = Close, ...rest } = props;

  const modalCls = classNames('svl-modal', className);

  const dftTitle = <div className="svl-modal-title">{titleName}</div>;

  return (
    <AModal className={modalCls} title={title || dftTitle} closeIcon={closeIcon} {...rest}>
      {children}
    </AModal>
  );
};

export default Modal;

export type { ModalProps, ModalFuncProps };
