import type { SelectProps } from 'antd';
import { Select as ASelect } from 'antd';
import { BaseOptionType, DefaultOptionType } from 'antd/lib/select';
import { BaseSelectRef } from 'rc-select';
import * as React from 'react';
import { PullDown } from '../const';

const { OptGroup, Option, SECRET_COMBOBOX_MODE_DO_NOT_USE } = ASelect as any;

export type { SelectProps };
export { OptGroup, Option };
const SelectR: React.FC<SelectProps> = (props) => {
  const { suffixIcon = PullDown, ...rest } = props;

  return <ASelect suffixIcon={suffixIcon} {...rest} />;
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
