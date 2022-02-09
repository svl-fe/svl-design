import * as React from 'react';
import { Steps as ASteps } from 'antd';
import RcSteps from 'rc-steps';
import type { StepsProps as AStepsProps } from 'antd';
import classNames from 'classnames';

import './style/index.less';

interface StepsProps extends React.FC<AStepsProps> {
  Step: typeof RcSteps.Step;
}

export const Steps: StepsProps = (props) => {
  const { className, labelPlacement = 'vertical', size = 'small', children, ...rest } = props;

  const StepsCls = classNames('svl-steps', className);

  return (
    <ASteps className={StepsCls} size={size} labelPlacement={labelPlacement} {...rest}>
      {children}
    </ASteps>
  );
};
Steps.Step = ASteps.Step;
export default Steps;

export type { StepsProps };
