import { defineConfig } from 'dumi';
import theme from './theme';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'svl-design',
  },
  publicPath: '/svl-design/',
  base: '/svl-design',
  // mode: 'site',
  // styles: ['https://cdn.bootcdn.net/ajax/libs/antd/4.18.3/antd.min.css'],
  theme,
  svgr: {},
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      { libraryName: 'antd', libraryDirectory: 'es', style: true },
      'antd',
    ],
  ],
});
