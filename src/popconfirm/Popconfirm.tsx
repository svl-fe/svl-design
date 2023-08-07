import {
  Popconfirm as APopconfirm,
  PopconfirmProps as APopconfirmProps,
} from 'antd';
import * as React from 'react';

import './style/index.less';

interface PopconfirmProps extends APopconfirmProps {
  /** 标题名字 */
  titleName?: string;
}

export const Popconfirm: React.FC<PopconfirmProps> = (props) => {
  const { titleName, icon = null, title, children, ...rest } = props;
  let titleR = title;
  if (titleName) {
    titleR = (
      <>
        <div className="svl-popconfirm-title">{titleName}</div>
        {title}
      </>
    );
  }
  return (
    <APopconfirm icon={icon} title={titleR} {...rest}>
      {children}
    </APopconfirm>
  );
};

export default Popconfirm;

export type { PopconfirmProps };
