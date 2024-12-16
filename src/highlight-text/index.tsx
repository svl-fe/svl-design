import React, { HTMLAttributes } from 'react';
import './style/index.less';

interface HighlightTextProps extends HTMLAttributes<HTMLSpanElement> {
  text: string; // 原始字符串
  keyword: string; // 需要高亮的关键词
  highlightStyle?: React.CSSProperties; // 高亮部分的样式，可选
}

export type { HighlightTextProps };

const HighlightText: React.FC<HighlightTextProps> = ({
  text = '',
  keyword = '',
  highlightStyle,
  className = '',
  ...rest
}) => {
  if (!keyword) {
    return <span>{text}</span>;
  }

  // 创建正则表达式，忽略大小写
  const regex = new RegExp(`(${keyword})`, 'gi');
  const parts = text.split(regex);

  return (
    <span className={`svl-highlight-text ${className}`} {...rest}>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <span
            className="svl-highlight-text-highlight"
            key={index}
            style={highlightStyle}
          >
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </span>
  );
};

export default HighlightText;
