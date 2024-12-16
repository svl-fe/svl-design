import Icon from '@ant-design/icons';
import { Typography } from 'antd';
import React, { FC, useState } from 'react';
import { ReactComponent as EyeInvisibleSvg } from '../svg/icon-eye-invisible.svg';
import { ReactComponent as EyeSvg } from '../svg/icon-eye.svg';
import './index.less';

const EyeIcon = <Icon component={EyeSvg} />;

const EyeInvisibleIcon = <Icon component={EyeInvisibleSvg} />;

interface IVisiblePassword {
  data?: string;
}

export type { IVisiblePassword };

const { Text } = Typography;

const VisiblePassword: FC<IVisiblePassword> = ({ data = '' }) => {
  const [real, setReal] = useState(false);
  const maskedStr = '*'.repeat(data.length);
  const showText = real ? data : maskedStr;

  return (
    <div className="svl-visible-password">
      <Text
        className="svl-visible-password-content"
        ellipsis={{ tooltip: showText }}
      >
        {showText}
      </Text>
      <div className="svl-visible-password-icon" onClick={() => setReal(!real)}>
        {real ? EyeInvisibleIcon : EyeIcon}
      </div>
    </div>
  );
};

export default VisiblePassword;
