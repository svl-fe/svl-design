import {
  Modal as AModal,
  ModalProps as AModalProps,
  ModalFuncProps,
} from 'antd';
import classNames from 'classnames';
import * as React from 'react';

import { Close } from '../const';
import './style/index.less';

interface ModalProps extends AModalProps {
  /** 标题名字 */
  titleName?: string;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const {
    title,
    titleName,
    className,
    children,
    closeIcon = Close,
    ...rest
  } = props;

  const modalCls = classNames('svl-modal', className);

  const dftTitle = <div className="svl-modal-title">{titleName}</div>;

  return (
    <AModal
      className={modalCls}
      title={title || dftTitle}
      closeIcon={closeIcon}
      {...rest}
    >
      {children}
    </AModal>
  );
};

export default Modal;

export type { ModalProps, ModalFuncProps };
