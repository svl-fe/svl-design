import React, { HTMLAttributes, useMemo } from 'react';
// import MyIcon from '../Icon';
import Icon from '@ant-design/icons';
import classNames from 'classnames';
import { hex2rgba } from 'svl-design/utils';
import { ReactComponent as IconSeal } from '../svg/icon-seal.svg';
import './style.less';

export interface BuoyCardProps extends HTMLAttributes<HTMLDivElement> {
  color?: React.CSSProperties['color'];
  text?: string;
  children?: React.ReactNode;
  buoyClassName?: string;
}

export const BuoyCard: React.FC<BuoyCardProps> = (props) => {
  const { color, text, children, className, buoyClassName, ...rest } = props;

  const textLength = useMemo(() => text?.length || 0, [text]);

  return (
    <div className={classNames(className, 'buoy-card')} {...rest}>
      {color && (
        <div className={classNames(buoyClassName, 'buoy-card-img')}>
          <Icon
            component={IconSeal}
            className="buoy-card-img__icon"
            style={{ color }}
          />
          <span
            className="buoy-card-img__text"
            style={{
              color: hex2rgba(color, 0.3),
              fontSize: textLength > 3 ? 22 : 24,
              padding: 20,
              whiteSpace: textLength < 5 ? 'nowrap' : 'initial',
            }}
          >
            {text}
          </span>
        </div>
      )}
      <div className="buoy-card-content">{children}</div>
    </div>
  );
};

export default BuoyCard;
