import { DropDownProps as ADropDownProps, Dropdown as ADropdown } from 'antd';
import DropdownButton, {
  DropdownButtonProps,
} from 'antd/lib/dropdown/dropdown-button';
import * as React from 'react';

import './style/index.less';

interface DropDownProps extends React.FC<ADropDownProps> {
  Button: typeof DropdownButton;
}
interface DropdownButtonInterface extends React.FC<DropdownButtonProps> {
  __ANT_BUTTON: boolean;
}

export const Dropdown: DropDownProps = (props) => {
  const { children, ...rest } = props;

  return <ADropdown {...rest}>{children}</ADropdown>;
};

const DropButton: DropdownButtonInterface = (props) => {
  const {
    icon = <div className="svl-dropdown-icon"></div>,
    children,
    ...rest
  } = props;

  return (
    <ADropdown.Button icon={icon} {...rest}>
      {children}
    </ADropdown.Button>
  );
};
DropButton.__ANT_BUTTON = true;
Dropdown.Button = DropButton;
export default Dropdown;

export type { DropDownProps };
