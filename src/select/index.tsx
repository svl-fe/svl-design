import * as React from 'react';
import { Select as AntSelect, SelectProps } from 'antd';
import { BaseOptionType, DefaultOptionType } from 'antd/lib/select';
import { BaseSelectRef, OptGroup, Option } from 'rc-select';
import { PullDown } from '../const';

const { SECRET_COMBOBOX_MODE_DO_NOT_USE } = AntSelect;
export type { SelectProps };
export { OptGroup, Option };
const SelectR: React.FC<SelectProps> = (props) => {
  const { suffixIcon = PullDown, ...rest } = props;

  return <AntSelect suffixIcon={suffixIcon} {...rest} />;
};

const Select = SelectR as (<
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
>(
  props: React.PropsWithChildren<SelectProps<ValueType, OptionType>> & {
    ref?: React.Ref<BaseSelectRef>;
  },
) => React.ReactElement) & {
  SECRET_COMBOBOX_MODE_DO_NOT_USE: string;
  Option: typeof Option;
  OptGroup: typeof OptGroup;
};

Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = SECRET_COMBOBOX_MODE_DO_NOT_USE;
Select.Option = Option;
Select.OptGroup = OptGroup;

export default Select;
