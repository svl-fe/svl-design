import Icon from '@ant-design/icons';
import type { StepsProps as AStepsProps } from 'antd';
import { Steps as ASteps } from 'antd';
import classNames from 'classnames';
import * as React from 'react';
import { ReactComponent as HintSvg } from '../svg/icon-hint.svg';
import { ReactComponent as RightSvg } from '../svg/icon-right.svg';

import './style/index.less';

interface StepsProps extends React.FC<AStepsProps> {
  Step: typeof ASteps.Step;
}

const icons = {
  finish: <Icon component={RightSvg} className={`ant-steps-finish-icon`} />,
  error: <Icon component={HintSvg} className={`ant-steps-error-icon`} />,
};

export const Steps: StepsProps = (props) => {
  const {
    className,
    labelPlacement = 'vertical',
    size = 'small',
    children,
    ...rest
  } = props;

  const StepsCls = classNames('svl-steps', className);

  return (
    <ASteps
      // @ts-ignore
      icons={icons}
      className={StepsCls}
      size={size}
      labelPlacement={labelPlacement}
      {...rest}
    >
      {children}
    </ASteps>
  );
};
Steps.Step = ASteps.Step;
export default Steps;

export type { StepsProps };
