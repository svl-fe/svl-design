import { Alert as AAlert, AlertProps as AAlertProps } from 'antd';
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import classNames from 'classnames';
import * as React from 'react';

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
