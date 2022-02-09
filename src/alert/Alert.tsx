import * as React from 'react';
import { Alert as AAlert } from 'antd';
import type { AlertProps as AAlertProps } from 'antd';
import classNames from 'classnames';
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';

import './style/index.less';

interface AlertProps extends React.FC<AAlertProps> {
  ErrorBoundary: typeof ErrorBoundary;
}

export const Alert: AlertProps = (props) => {
  const { className, ...rest } = props;

  const AlertCls = classNames('svl-alert', className);

  return <AAlert className={AlertCls} {...rest} />;
};
Alert.ErrorBoundary = AAlert.ErrorBoundary;
export default Alert;

export type { AlertProps };
