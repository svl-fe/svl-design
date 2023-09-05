import { Input } from 'antd';
import {
  GroupProps,
  InputProps,
  PasswordProps,
  TextAreaProps,
} from 'antd/lib/input';
import Search, { SearchProps } from './Search';

Input.Search = Search;

export default Input;

export type {
  InputProps,
  GroupProps,
  SearchProps,
  TextAreaProps,
  PasswordProps,
};
