import Icon from '@ant-design/icons';
import { Select as AntSelect, SelectProps } from 'antd';
import { BaseOptionType, DefaultOptionType } from 'antd/lib/select';
import { BaseSelectRef, OptGroup, Option } from 'rc-select';
import * as React from 'react';
import { ReactComponent as pullDownSvg } from '../svg/icon-pulldown.svg';
import './style/index.less';

export type { SelectProps };
export { OptGroup, Option };

const { SECRET_COMBOBOX_MODE_DO_NOT_USE } = AntSelect;
const PlullDownSvg = (
  <Icon component={pullDownSvg} className="svl-select-pull-down-icon" />
);

const SelectR = <
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
>(
  { suffixIcon, ...props }: SelectProps<ValueType, OptionType>,
  ref: React.Ref<BaseSelectRef>,
) => {
  return (
    <AntSelect ref={ref} suffixIcon={suffixIcon || PlullDownSvg} {...props} />
  );
};

const Select = React.forwardRef(SelectR) as unknown as (<
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
