import Icon from '@ant-design/icons';
import { Input as AInput } from 'antd';
import { SearchProps as ASearchProps } from 'antd/lib/input';
import classNames from 'classnames';
import * as React from 'react';
import { ReactComponent as searchSvg } from '../svg/icon-search.svg';
import './style/index.less';

const { Search: ASearch } = AInput;
const SearchSvg = (
  <Icon component={searchSvg} className="svl-input-search-icon" />
);

type SearchProps = ASearchProps;

// @ts-ignore
const Search = React.forwardRef<AInput, SearchProps>((props, ref) => {
  const { className, children, onChange, ...rest } = props;
  const cls = classNames('svl-search', className);
  const timeRef = React.useRef<NodeJS.Timeout>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    if (e?.target?.value === '') {
      timeRef.current = setTimeout(() => {
        rest.onSearch?.('');
      }, 100);
    }
  };

  React.useEffect(() => {
    return () => {
      if (timeRef.current) {
        clearTimeout(timeRef.current);
      }
    };
  }, []);

  return (
    <ASearch
      className={cls}
      enterButton={SearchSvg}
      onChange={handleChange}
      {...rest}
      ref={ref}
    >
      {children}
    </ASearch>
  );
});

export default Search;

export type { SearchProps };
