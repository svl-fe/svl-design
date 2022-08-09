import * as React from 'react';
import { Select as ASelect } from 'antd';
import type { SelectProps as ASelectProps } from 'antd';
import { PullDown } from '../const';

export interface SelectProps extends ASelectProps {}

const { OptGroup, Option, SECRET_COMBOBOX_MODE_DO_NOT_USE } = ASelect;

export { OptGroup, Option };
const SelectR: React.FC<SelectProps> = (props) => {
  const { suffixIcon = PullDown, ...rest } = props;

  return <ASelect suffixIcon={suffixIcon} {...rest} />;
};

type InternalSelectType = typeof SelectR;
interface SelectInterface extends InternalSelectType {
  SECRET_COMBOBOX_MODE_DO_NOT_USE: string;
  Option: typeof Option;
  OptGroup: typeof OptGroup;
}

const Select = SelectR as SelectInterface;

Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = SECRET_COMBOBOX_MODE_DO_NOT_USE;
Select.Option = Option;
Select.OptGroup = OptGroup;

export default Select;
