import Icon from '@ant-design/icons';
import { Typography } from 'antd';
import classNames from 'classnames';
import React, { FC, useState } from 'react';
import { ReactComponent as EyeInvisibleSvg } from '../svg/icon-eye-invisible.svg';
import { ReactComponent as EyeSvg } from '../svg/icon-eye.svg';
import './index.less';

const EyeIcon = <Icon component={EyeSvg} />;

const EyeInvisibleIcon = <Icon component={EyeInvisibleSvg} />;

interface IVisiblePassword {
  data?: string;
  partialStart?: number; // 部分隐藏开始位置
  partialEnd?: number; // 部分隐藏结束位置
  showIcon?: boolean; // 是否显示图标
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
}

export type { IVisiblePassword };

const { Text } = Typography;

const VisiblePassword: FC<IVisiblePassword> = ({
  data = '',
  showIcon = true,
  partialEnd,
  partialStart,
  className,
  style,
}) => {
  const [real, setReal] = useState(false);
  const len = data.length;
  const start = partialStart || 0;
  const end = partialEnd || len;

  const showText = real
    ? data
    : `${data.slice(0, start)}${'*'.repeat(end - start)}${data.slice(
        end,
        len,
      )}`;

  const cls = classNames('svl-visible-password', className);

  return (
    <div className={cls} style={style}>
      <Text
        className="svl-visible-password-content"
        ellipsis={{ tooltip: showText }}
      >
        {showText}
      </Text>
      {showIcon ? (
        <div
          className="svl-visible-password-icon"
          onClick={() => setReal(!real)}
        >
          {real ? EyeInvisibleIcon : EyeIcon}
        </div>
      ) : null}
    </div>
  );
};

export default VisiblePassword;
