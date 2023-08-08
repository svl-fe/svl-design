// @ts-nocheck
import { plugin } from './plugin';
import { ApplyPluginsType } from '/Users/cyberserval/workspace/svl-design/node_modules/umi/node_modules/@umijs/runtime';

export function getRoutes() {
  const routes = [
    {
      path: '/~demos/:uuid',
      layout: false,
      wrappers: [require('../dumi/layout').default],
      component: (props) => {
        const React = require('react');
        const {
          default: getDemoRenderArgs,
        } = require('/Users/cyberserval/workspace/svl-design/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const {
          default: Previewer,
        } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        const { demos } = React.useContext(context);
        const [renderArgs, setRenderArgs] = React.useState([]);

        // update render args when props changed
        React.useLayoutEffect(() => {
          setRenderArgs(getDemoRenderArgs(props, demos));
        }, [
          props.match.params.uuid,
          props.location.query.wrapper,
          props.location.query.capture,
        ]);

        // for listen prefers-color-schema media change in demo single route
        usePrefersColor();

        switch (renderArgs.length) {
          case 1:
            // render demo directly
            return renderArgs[0];

          case 2:
            // render demo with previewer
            return React.createElement(Previewer, renderArgs[0], renderArgs[1]);

          default:
            return `Demo ${props.match.params.uuid} not found :(`;
        }
      },
    },
    {
      path: '/_demos/:uuid',
      redirect: '/~demos/:uuid',
    },
    {
      __dumiRoot: true,
      layout: false,
      path: '/',
      wrappers: [
        require('../dumi/layout').default,
        require('/Users/cyberserval/workspace/svl-design/node_modules/dumi-theme-default/es/layout.js')
          .default,
      ],
      routes: [
        {
          path: '/components/alert',
          component:
            require('/Users/cyberserval/workspace/svl-design/src/alert/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/alert/index.md',
            updatedTime: 1691393423000,
            componentName: 'alert',
            nav: {
              title: 'Alertsdfsdfsf',
              path: '/components',
            },
            group: {
              title: '反馈',
              order: 5,
              __fallback: true,
              path: '/components/alert',
            },
            toc: false,
            slugs: [
              {
                depth: 2,
                value: 'Alert 警告提示',
                heading: 'alert-警告提示',
              },
            ],
            title: 'Alert 警告提示',
            hasPreviewer: true,
          },
          title: 'Alert 警告提示 - svl-design',
        },
        {
          path: '/components/buoy-card',
          component:
            require('/Users/cyberserval/workspace/svl-design/src/buoy-card/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/buoy-card/index.md',
            updatedTime: 1691459880549,
            componentName: 'buoy-card',
            nav: {
              title: '组件',
              path: '/components',
            },
            group: {
              title: '数据展示',
              order: 2,
              __fallback: true,
              path: '/components/buoy-card',
            },
            toc: false,
            slugs: [
              {
                depth: 2,
                value: 'BuoyCard 浮标卡片',
                heading: 'buoycard-浮标卡片',
              },
            ],
            title: 'BuoyCard 浮标卡片',
            hasPreviewer: true,
          },
          title: 'BuoyCard 浮标卡片 - svl-design',
        },
        {
          path: '/components/button',
          component:
            require('/Users/cyberserval/workspace/svl-design/src/button/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/button/index.md',
            updatedTime: 1691393423000,
            componentName: 'button',
            nav: {
              title: '组件',
              path: '/components',
            },
            group: {
              title: '通用',
              order: 0,
              __fallback: true,
              path: '/components/button',
            },
            toc: false,
            slugs: [
              {
                depth: 2,
                value: 'Button 按钮',
                heading: 'button-按钮',
              },
            ],
            title: 'Button 按钮',
            hasPreviewer: true,
          },
          title: 'Button 按钮 - svl-design',
        },
        {
          path: '/components/cascader',
          component:
            require('/Users/cyberserval/workspace/svl-design/src/cascader/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/cascader/index.md',
            updatedTime: 1691393423000,
            componentName: 'cascader',
            nav: {
              title: '组件',
              path: '/components',
            },
            group: {
              title: '数据录入',
              order: 3,
              __fallback: true,
              path: '/components/cascader',
            },
            toc: false,
            slugs: [
              {
                depth: 2,
                value: 'Cascader 级联选择',
                heading: 'cascader-级联选择',
              },
            ],
            title: 'Cascader 级联选择',
            hasPreviewer: true,
          },
          title: 'Cascader 级联选择 - svl-design',
        },
        {
          path: '/components/checkbox',
          component:
            require('/Users/cyberserval/workspace/svl-design/src/checkbox/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/checkbox/index.md',
            updatedTime: 1691393423000,
            componentName: 'checkbox',
            nav: {
              title: '组件',
              path: '/components',
            },
            group: {
              title: '数据录入',
              order: 3,
              __fallback: true,
              path: '/components/checkbox',
            },
            toc: false,
            slugs: [
              {
                depth: 2,
                value: 'Checkbox 多选框',
                heading: 'checkbox-多选框',
              },
            ],
            title: 'Checkbox 多选框',
            hasPreviewer: true,
          },
          title: 'Checkbox 多选框 - svl-design',
        },
        {
          path: '/components/drawer',
          component:
            require('/Users/cyberserval/workspace/svl-design/src/drawer/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/drawer/index.md',
            updatedTime: 1691393423000,
            componentName: 'drawer',
            nav: {
              title: '组件',
              path: '/components',
            },
            group: {
              title: '反馈',
              order: 5,
              __fallback: true,
              path: '/components/drawer',
            },
            toc: false,
            slugs: [
              {
                depth: 2,
                value: 'Drawer 抽屉',
                heading: 'drawer-抽屉',
              },
            ],
            title: 'Drawer 抽屉',
            hasPreviewer: true,
          },
          title: 'Drawer 抽屉 - svl-design',
        },
        {
          path: '/components/dropdown',
          component:
            require('/Users/cyberserval/workspace/svl-design/src/dropdown/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/dropdown/index.md',
            updatedTime: 1691393423000,
            componentName: 'dropdown',
            nav: {
              title: '组件',
              path: '/components',
            },
            group: {
              title: '导航',
              order: 2,
              __fallback: true,
              path: '/components/dropdown',
            },
            toc: false,
            slugs: [
              {
                depth: 2,
                value: 'Dropdown 下拉菜单',
                heading: 'dropdown-下拉菜单',
              },
            ],
            title: 'Dropdown 下拉菜单',
            hasPreviewer: true,
          },
          title: 'Dropdown 下拉菜单 - svl-design',
        },
        {
          path: '/components/label',
          component:
            require('/Users/cyberserval/workspace/svl-design/src/label/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/label/index.md',
            updatedTime: 1691393423000,
            componentName: 'label',
            nav: {
              title: '组件',
              path: '/components',
            },
            group: {
              title: '数据展示',
              order: 4,
              __fallback: true,
              path: '/components/label',
            },
            toc: false,
            slugs: [
              {
                depth: 2,
                value: 'Label 标签',
                heading: 'label-标签',
              },
              {
                depth: 4,
                value: '参数说明',
                heading: '参数说明',
              },
            ],
            title: 'Label 标签',
            hasPreviewer: true,
          },
          title: 'Label 标签 - svl-design',
        },
        {
          path: '/components/modal',
          component:
            require('/Users/cyberserval/workspace/svl-design/src/modal/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/modal/index.md',
            updatedTime: 1691393423000,
            componentName: 'modal',
            nav: {
              title: '组件',
              path: '/components',
            },
            group: {
              title: '反馈',
              order: 5,
              __fallback: true,
              path: '/components/modal',
            },
            toc: false,
            slugs: [
              {
                depth: 2,
                value: 'Modal 对话框',
                heading: 'modal-对话框',
              },
            ],
            title: 'Modal 对话框',
            hasPreviewer: true,
          },
          title: 'Modal 对话框 - svl-design',
        },
        {
          path: '/components/popconfirm',
          component:
            require('/Users/cyberserval/workspace/svl-design/src/popconfirm/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/popconfirm/index.md',
            updatedTime: 1691393423000,
            componentName: 'popconfirm',
            nav: {
              title: '组件',
              path: '/components',
            },
            group: {
              title: '反馈',
              order: 5,
              __fallback: true,
              path: '/components/popconfirm',
            },
            toc: false,
            slugs: [
              {
                depth: 2,
                value: 'Popconfirm 气泡确认框',
                heading: 'popconfirm-气泡确认框',
              },
            ],
            title: 'Popconfirm 气泡确认框',
            hasPreviewer: true,
          },
          title: 'Popconfirm 气泡确认框 - svl-design',
        },
        {
          path: '/components/select',
          component:
            require('/Users/cyberserval/workspace/svl-design/src/select/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/select/index.md',
            updatedTime: 1691393423000,
            componentName: 'select',
            nav: {
              title: '组件',
              path: '/components',
            },
            group: {
              title: '数据录入',
              order: 3,
              __fallback: true,
              path: '/components/select',
            },
            toc: false,
            slugs: [
              {
                depth: 2,
                value: 'Select 选择器',
                heading: 'select-选择器',
              },
            ],
            title: 'Select 选择器',
            hasPreviewer: true,
          },
          title: 'Select 选择器 - svl-design',
        },
        {
          path: '/components/steps',
          component:
            require('/Users/cyberserval/workspace/svl-design/src/steps/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/steps/index.md',
            updatedTime: 1691402746000,
            componentName: 'steps',
            nav: {
              title: '组件',
              path: '/components',
            },
            group: {
              title: '导航',
              order: 2,
              __fallback: true,
              path: '/components/steps',
            },
            toc: false,
            slugs: [
              {
                depth: 2,
                value: 'Steps 步骤条',
                heading: 'steps-步骤条',
              },
            ],
            title: 'Steps 步骤条',
            hasPreviewer: true,
          },
          title: 'Steps 步骤条 - svl-design',
        },
        {
          path: '/components/switch',
          component:
            require('/Users/cyberserval/workspace/svl-design/src/switch/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/switch/index.md',
            updatedTime: 1691393423000,
            componentName: 'switch',
            nav: {
              title: '组件',
              path: '/components',
            },
            group: {
              title: '数据录入',
              order: 4,
              __fallback: true,
              path: '/components/switch',
            },
            toc: false,
            slugs: [
              {
                depth: 2,
                value: 'Switch 开关',
                heading: 'switch-开关',
              },
              {
                depth: 4,
                value: '参数说明',
                heading: '参数说明',
              },
            ],
            title: 'Switch 开关',
            hasPreviewer: true,
          },
          title: 'Switch 开关 - svl-design',
        },
        {
          path: '/components/tabs',
          component:
            require('/Users/cyberserval/workspace/svl-design/src/tabs/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/tabs/index.md',
            updatedTime: 1691393423000,
            componentName: 'tabs',
            nav: {
              title: '组件',
              path: '/components',
            },
            group: {
              title: '数据展示',
              order: 4,
              __fallback: true,
              path: '/components/tabs',
            },
            toc: false,
            slugs: [
              {
                depth: 2,
                value: 'Tabs 标签页',
                heading: 'tabs-标签页',
              },
              {
                depth: 4,
                value: '参数说明',
                heading: '参数说明',
              },
            ],
            title: 'Tabs 标签页',
            hasPreviewer: true,
          },
          title: 'Tabs 标签页 - svl-design',
        },
        {
          path: '/components/tree-select',
          component:
            require('/Users/cyberserval/workspace/svl-design/src/tree-select/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/tree-select/index.md',
            updatedTime: 1691393423000,
            componentName: 'tree-select',
            nav: {
              title: '组件',
              path: '/components',
            },
            group: {
              title: '数据录入',
              order: 3,
              __fallback: true,
              path: '/components/tree-select',
            },
            toc: false,
            slugs: [
              {
                depth: 2,
                value: 'TreeSelect 树选择',
                heading: 'treeselect-树选择',
              },
            ],
            title: 'TreeSelect 树选择',
            hasPreviewer: true,
          },
          title: 'TreeSelect 树选择 - svl-design',
        },
        {
          path: '/',
          component:
            require('/Users/cyberserval/workspace/svl-design/docs/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'docs/index.md',
            updatedTime: 1691393423000,
            hero: {
              title: 'svl-design',
              description: '薮猫科技UI 设计规范',
              actions: [
                {
                  text: '快速启动',
                  link: '/components/button',
                },
              ],
            },
            features: [
              {
                emoji: '💎',
                title: '美观',
                description: '基于 Ant Design 精心设计',
              },
              {
                emoji: '🚀',
                title: '组件',
                description: '使用组件 Demo 快速体验交互细节',
              },
              {
                emoji: '🚥',
                title: '主题',
                description: '可配置的主题满足多样化的品牌诉求',
              },
            ],
            footer:
              '<div class="markdown"><p>Open-source MIT Licensed | Copyright © 2021<br />Powered by <a href="https://www.cyberserval.cn/zy#" target="_blank">杭州薮猫科技<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="__dumi-default-external-link-icon"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a></p></div>',
            slugs: [],
            title: 'Index',
          },
          title: 'Index - svl-design',
        },
        {
          path: '/components',
          meta: {},
          exact: true,
          redirect: '/components/button',
        },
      ],
      title: 'svl-design',
      component: (props) => props.children,
    },
  ];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
