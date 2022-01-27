import { defineConfig } from 'dumi';
import theme from './theme';

export default defineConfig({
  title: 'svl-design',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  publicPath: '/svl-design/',
  base: '/svl-design',
  mode: 'site',
  // styles: ['https://cdn.bootcdn.net/ajax/libs/antd/4.18.3/antd.min.css'],
  theme,
  extraBabelPlugins: [
    ['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd'],
  ],
  // more config: https://d.umijs.org/config
});
