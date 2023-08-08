// @ts-nocheck

export default {
  'alert-demo': {
    component: function DumiDemo() {
      var _interopRequireDefault =
        require('/Users/cyberserval/workspace/svl-design/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js')[
          'default'
        ];
      require('antd/es/space/style');
      var _space = _interopRequireDefault(require('antd/es/space'));
      var _react = _interopRequireDefault(require('react'));
      var _svlDesign = require('svl-design');
      var _default = function _default() {
        return /*#__PURE__*/ _react['default'].createElement(
          _space['default'],
          {
            direction: 'vertical',
            style: {
              width: '100%',
            },
          },
          /*#__PURE__*/ _react['default'].createElement(_svlDesign.Alert, {
            closable: true,
            showIcon: true,
            message: '\u63D0\u793A\u6587\u6848\uFF0C\u5E38\u89C4\u63D0\u793A',
            type: 'info',
          }),
          /*#__PURE__*/ _react['default'].createElement(_svlDesign.Alert, {
            showIcon: true,
            message: '\u63D0\u793A\u6587\u6848\uFF0C\u6210\u529F\u63D0\u793A',
            type: 'success',
          }),
          /*#__PURE__*/ _react['default'].createElement(_svlDesign.Alert, {
            showIcon: true,
            message: '\u63D0\u793A\u6587\u6848\uFF0C\u9884\u8B66\u63D0\u793A',
            type: 'warning',
          }),
          /*#__PURE__*/ _react['default'].createElement(_svlDesign.Alert, {
            showIcon: true,
            message: '\u63D0\u793A\u6587\u6848\uFF0C\u5931\u8D25\u63D0\u793A',
            type: 'error',
          }),
        );
      };
      return _react['default'].createElement(_default);
    },
    previewerProps: {
      sources: {
        _: {
          tsx: 'import React from \'react\';\nimport { Space } from \'antd\';\nimport { Alert } from \'svl-design\';\nimport { ExclamationCircleOutlined } from \'@ant-design/icons\';\n\nexport default () => {\n  return (\n    <Space direction="vertical" style={{ width: \'100%\' }}>\n      <Alert closable showIcon message="提示文案，常规提示" type="info" />\n      <Alert showIcon message="提示文案，成功提示" type="success" />\n      <Alert showIcon message="提示文案，预警提示" type="warning" />\n      <Alert showIcon message="提示文案，失败提示" type="error" />\n    </Space>\n  );\n};',
        },
      },
      dependencies: {
        antd: { version: '>=4.17.3', css: 'antd/dist/antd.css' },
        react: { version: '>=16.9.0' },
        'svl-design': { version: '0.1.2' },
        'react-dom': { version: '>=16.9.0' },
        'rc-select': { version: '>=14.0.0' },
        'rc-tree-select': { version: '>=5.0.0' },
      },
      componentName: 'alert',
      identifier: 'alert-demo',
    },
  },
  'button-demo': {
    component: function DumiDemo() {
      var _interopRequireDefault =
        require('/Users/cyberserval/workspace/svl-design/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js')[
          'default'
        ];
      var _react = _interopRequireDefault(require('react'));
      var _svlDesign = require('svl-design');
      var _default = function _default() {
        return /*#__PURE__*/ _react['default'].createElement(
          'div',
          null,
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              size: 'small',
            },
            '\u5C0F\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              type: 'primary',
              size: 'small',
            },
            '\u5C0F\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            null,
            '\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              type: 'primary',
            },
            '\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              size: 'large',
            },
            '\u5927\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              type: 'primary',
              size: 'large',
            },
            '\u5927\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement('br', null),
          /*#__PURE__*/ _react['default'].createElement('br', null),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              type: 'primary',
            },
            '\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              type: 'dashed',
            },
            '\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            null,
            '\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              type: 'ghost',
            },
            '\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              type: 'link',
            },
            '\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              type: 'text',
            },
            '\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement('br', null),
          /*#__PURE__*/ _react['default'].createElement('br', null),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              disabled: true,
              type: 'primary',
            },
            '\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              disabled: true,
              type: 'dashed',
            },
            '\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              disabled: true,
            },
            '\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              disabled: true,
              type: 'ghost',
            },
            '\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              disabled: true,
              type: 'link',
            },
            '\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              disabled: true,
              type: 'text',
            },
            '\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement('br', null),
          /*#__PURE__*/ _react['default'].createElement('br', null),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              danger: true,
              type: 'primary',
            },
            '\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              danger: true,
              type: 'dashed',
            },
            '\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              danger: true,
            },
            '\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              danger: true,
              type: 'ghost',
            },
            '\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              danger: true,
              type: 'link',
            },
            '\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              danger: true,
              type: 'text',
            },
            '\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement('br', null),
          /*#__PURE__*/ _react['default'].createElement('br', null),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              ghost: true,
              type: 'primary',
            },
            '\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              ghost: true,
              type: 'dashed',
            },
            '\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              ghost: true,
            },
            '\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              ghost: true,
              type: 'ghost',
            },
            '\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              ghost: true,
              type: 'link',
            },
            '\u6309\u94AE',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Button,
            {
              ghost: true,
              type: 'text',
            },
            '\u6309\u94AE',
          ),
        );
      };
      return _react['default'].createElement(_default);
    },
    previewerProps: {
      sources: {
        _: {
          tsx: 'import React from \'react\';\nimport { Button } from \'svl-design\';\n\nexport default () => {\n  return (\n    <div>\n      <Button size="small">小按钮</Button>\n      <Button type="primary" size="small">\n        小按钮\n      </Button>\n      <Button>按钮</Button>\n      <Button type="primary">按钮</Button>\n      <Button size="large">大按钮</Button>\n      <Button type="primary" size="large">\n        大按钮\n      </Button>\n      <br />\n      <br />\n      <Button type="primary">按钮</Button>\n      <Button type="dashed">按钮</Button>\n      <Button>按钮</Button>\n      <Button type="ghost">按钮</Button>\n      <Button type="link">按钮</Button>\n      <Button type="text">按钮</Button>\n      <br />\n      <br />\n      <Button disabled type="primary">\n        按钮\n      </Button>\n      <Button disabled type="dashed">\n        按钮\n      </Button>\n      <Button disabled>按钮</Button>\n      <Button disabled type="ghost">\n        按钮\n      </Button>\n      <Button disabled type="link">\n        按钮\n      </Button>\n      <Button disabled type="text">\n        按钮\n      </Button>\n      <br />\n      <br />\n      <Button danger type="primary">\n        按钮\n      </Button>\n      <Button danger type="dashed">\n        按钮\n      </Button>\n      <Button danger>按钮</Button>\n      <Button danger type="ghost">\n        按钮\n      </Button>\n      <Button danger type="link">\n        按钮\n      </Button>\n      <Button danger type="text">\n        按钮\n      </Button>\n      <br />\n      <br />\n      <Button ghost type="primary">\n        按钮\n      </Button>\n      <Button ghost type="dashed">\n        按钮\n      </Button>\n      <Button ghost>按钮</Button>\n      <Button ghost type="ghost">\n        按钮\n      </Button>\n      <Button ghost type="link">\n        按钮\n      </Button>\n      <Button ghost type="text">\n        按钮\n      </Button>\n    </div>\n  );\n};',
        },
      },
      dependencies: {
        react: { version: '>=16.9.0' },
        'svl-design': { version: '0.1.2' },
        antd: { version: '>=4.17.3', css: 'antd/dist/antd.css' },
        'rc-select': { version: '>=14.0.0' },
        'rc-tree-select': { version: '>=5.0.0' },
        'react-dom': { version: '>=16.9.0' },
      },
      componentName: 'button',
      identifier: 'button-demo',
    },
  },
  'cascader-demo': {
    component: function DumiDemo() {
      var _interopRequireDefault =
        require('/Users/cyberserval/workspace/svl-design/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js')[
          'default'
        ];
      var _react = _interopRequireDefault(require('react'));
      var _svlDesign = require('svl-design');
      var Option = _svlDesign.Cascader.Option,
        OptGroup = _svlDesign.Cascader.OptGroup;
      var _default = function _default() {
        var handleChange = function handleChange(value) {
          console.log('selected '.concat(value));
        };
        var options = [
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                  {
                    value: 'xihu',
                    label: 'West Lake',
                  },
                ],
              },
            ],
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                  },
                ],
              },
            ],
          },
        ];
        return /*#__PURE__*/ _react['default'].createElement(
          _svlDesign.Cascader,
          {
            options: options,
            style: {
              width: 200,
            },
            onChange: handleChange,
            placeholder: 'Please select',
          },
        );
      };
      return _react['default'].createElement(_default);
    },
    previewerProps: {
      sources: {
        _: {
          tsx: "import React, { useState } from 'react';\nimport { Cascader } from 'svl-design';\n\nconst { Option, OptGroup } = Cascader;\n\ninterface Option {\n  value: string | number;\n  label: string;\n  children?: Option[];\n}\n\nexport default () => {\n  const handleChange = (value: string) => {\n    console.log(`selected ${value}`);\n  };\n\n  const options: Option[] = [\n    {\n      value: 'zhejiang',\n      label: 'Zhejiang',\n      children: [\n        {\n          value: 'hangzhou',\n          label: 'Hangzhou',\n          children: [\n            {\n              value: 'xihu',\n              label: 'West Lake',\n            },\n          ],\n        },\n      ],\n    },\n    {\n      value: 'jiangsu',\n      label: 'Jiangsu',\n      children: [\n        {\n          value: 'nanjing',\n          label: 'Nanjing',\n          children: [\n            {\n              value: 'zhonghuamen',\n              label: 'Zhong Hua Men',\n            },\n          ],\n        },\n      ],\n    },\n  ];\n\n  return (\n    <Cascader\n      options={options}\n      style={{ width: 200 }}\n      onChange={handleChange}\n      placeholder=\"Please select\"\n    />\n  );\n};",
        },
      },
      dependencies: {
        react: { version: '>=16.9.0' },
        'svl-design': { version: '0.1.2' },
        antd: { version: '>=4.17.3', css: 'antd/dist/antd.css' },
        'rc-select': { version: '>=14.0.0' },
        'rc-tree-select': { version: '>=5.0.0' },
        'react-dom': { version: '>=16.9.0' },
      },
      componentName: 'cascader',
      identifier: 'cascader-demo',
    },
  },
  'checkbox-demo': {
    component: function DumiDemo() {
      var _interopRequireDefault =
        require('/Users/cyberserval/workspace/svl-design/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js')[
          'default'
        ];
      var _slicedToArray2 = _interopRequireDefault(
        require('/Users/cyberserval/workspace/svl-design/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
      );
      require('antd/es/tabs/style');
      var _tabs = _interopRequireDefault(require('antd/es/tabs'));
      var _react = _interopRequireDefault(require('react'));
      var _svlDesign = require('svl-design');
      var CheckboxGroup = _svlDesign.Checkbox.Group;
      var TabPane = _tabs['default'].TabPane;
      var plainOptions = ['Apple', 'Pear', 'Orange'];
      var defaultCheckedList = ['Apple', 'Orange'];
      var _default = function _default() {
        var _React$useState = _react['default'].useState(defaultCheckedList),
          _React$useState2 = (0, _slicedToArray2['default'])(
            _React$useState,
            2,
          ),
          checkedList = _React$useState2[0],
          setCheckedList = _React$useState2[1];
        var _React$useState3 = _react['default'].useState(true),
          _React$useState4 = (0, _slicedToArray2['default'])(
            _React$useState3,
            2,
          ),
          indeterminate = _React$useState4[0],
          setIndeterminate = _React$useState4[1];
        var _React$useState5 = _react['default'].useState(false),
          _React$useState6 = (0, _slicedToArray2['default'])(
            _React$useState5,
            2,
          ),
          checkAll = _React$useState6[0],
          setCheckAll = _React$useState6[1];
        var onChange = function onChange(list) {
          setCheckedList(list);
          setIndeterminate(!!list.length && list.length < plainOptions.length);
          setCheckAll(list.length === plainOptions.length);
        };
        var onCheckAllChange = function onCheckAllChange(e) {
          setCheckedList(e.target.checked ? plainOptions : []);
          setIndeterminate(false);
          setCheckAll(e.target.checked);
        };
        return /*#__PURE__*/ _react['default'].createElement(
          _react['default'].Fragment,
          null,
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Checkbox,
            {
              indeterminate: indeterminate,
              onChange: onCheckAllChange,
              checked: checkAll,
            },
            'Check all',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Checkbox,
            null,
            'Check all',
          ),
          /*#__PURE__*/ _react['default'].createElement('br', null),
          /*#__PURE__*/ _react['default'].createElement(CheckboxGroup, {
            options: plainOptions,
            value: checkedList,
            onChange: onChange,
          }),
          /*#__PURE__*/ _react['default'].createElement('br', null),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Checkbox,
            {
              disabled: true,
            },
            'disabled',
          ),
          /*#__PURE__*/ _react['default'].createElement('br', null),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Checkbox,
            {
              disabled: true,
              checked: true,
            },
            'checked disabled',
          ),
          /*#__PURE__*/ _react['default'].createElement('br', null),
        );
      };
      return _react['default'].createElement(_default);
    },
    previewerProps: {
      sources: {
        _: {
          tsx: "import React, { useState } from 'react';\nimport { Checkbox } from 'svl-design';\nimport { Radio, Switch, Space, Tabs, Tooltip } from 'antd';\n\nconst CheckboxGroup = Checkbox.Group;\nconst { TabPane } = Tabs;\nconst plainOptions = ['Apple', 'Pear', 'Orange'];\nconst defaultCheckedList = ['Apple', 'Orange'];\n\nexport default () => {\n  const [checkedList, setCheckedList] = React.useState(defaultCheckedList);\n  const [indeterminate, setIndeterminate] = React.useState(true);\n  const [checkAll, setCheckAll] = React.useState(false);\n\n  const onChange = (list) => {\n    setCheckedList(list);\n    setIndeterminate(!!list.length && list.length < plainOptions.length);\n    setCheckAll(list.length === plainOptions.length);\n  };\n\n  const onCheckAllChange = (e) => {\n    setCheckedList(e.target.checked ? plainOptions : []);\n    setIndeterminate(false);\n    setCheckAll(e.target.checked);\n  };\n\n  return (\n    <>\n      <Checkbox\n        indeterminate={indeterminate}\n        onChange={onCheckAllChange}\n        checked={checkAll}\n      >\n        Check all\n      </Checkbox>\n      <Checkbox>Check all</Checkbox>\n      <br />\n      <CheckboxGroup\n        options={plainOptions}\n        value={checkedList}\n        onChange={onChange}\n      />\n      <br />\n      <Checkbox disabled>disabled</Checkbox>\n      <br />\n      <Checkbox disabled checked>\n        checked disabled\n      </Checkbox>\n      <br />\n    </>\n  );\n};",
        },
      },
      dependencies: {
        antd: { version: '>=4.17.3', css: 'antd/dist/antd.css' },
        react: { version: '>=16.9.0' },
        'svl-design': { version: '0.1.2' },
        'react-dom': { version: '>=16.9.0' },
        'rc-select': { version: '>=14.0.0' },
        'rc-tree-select': { version: '>=5.0.0' },
      },
      componentName: 'checkbox',
      identifier: 'checkbox-demo',
    },
  },
  'drawer-demo': {
    component: function DumiDemo() {
      var _interopRequireWildcard =
        require('/Users/cyberserval/workspace/svl-design/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireWildcard.js')[
          'default'
        ];
      var _interopRequireDefault =
        require('/Users/cyberserval/workspace/svl-design/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js')[
          'default'
        ];
      require('antd/es/button/style');
      var _button = _interopRequireDefault(require('antd/es/button'));
      var _slicedToArray2 = _interopRequireDefault(
        require('/Users/cyberserval/workspace/svl-design/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
      );
      var _react = _interopRequireWildcard(require('react'));
      var _svlDesign = require('svl-design');
      var _default = function _default() {
        var _useState = (0, _react.useState)(false),
          _useState2 = (0, _slicedToArray2['default'])(_useState, 2),
          visible = _useState2[0],
          setVisible = _useState2[1];
        var _useState3 = (0, _react.useState)(false),
          _useState4 = (0, _slicedToArray2['default'])(_useState3, 2),
          loading = _useState4[0],
          setLoading = _useState4[1];
        var onOk = function onOk() {
          return new Promise(function (resolve) {
            setLoading(true);
            setTimeout(function () {
              resolve();
              setVisible(false);
              setLoading(false);
            }, 3000);
          });
        };
        return /*#__PURE__*/ _react['default'].createElement(
          'div',
          null,
          /*#__PURE__*/ _react['default'].createElement(
            _button['default'],
            {
              type: 'primary',
              onClick: function onClick() {
                return setVisible(true);
              },
            },
            '\u6253\u5F00',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Drawer,
            {
              loading: loading,
              visible: visible,
              titleName: '\u57FA\u7840\u62BD\u5C49',
              onClose: function onClose() {
                return setVisible(false);
              },
              onOk: onOk,
            },
            /*#__PURE__*/ _react['default'].createElement(
              'p',
              null,
              '\u5185\u5BB9\u533A....',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              'p',
              null,
              '\u5185\u5BB9\u533A...',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              'p',
              null,
              '\u5185\u5BB9\u533A...',
            ),
          ),
        );
      };
      return _react['default'].createElement(_default);
    },
    previewerProps: {
      sources: {
        _: {
          tsx: "import React, { useState } from 'react';\nimport { Button } from 'antd';\nimport { Drawer } from 'svl-design';\n\nexport default () => {\n  const [visible, setVisible] = useState(false);\n  const [loading, setLoading] = useState(false);\n\n  const onOk = () => {\n    return new Promise((resolve) => {\n      setLoading(true);\n      setTimeout(() => {\n        resolve();\n        setVisible(false);\n        setLoading(false);\n      }, 3000);\n    });\n  };\n\n  return (\n    <div>\n      <Button type=\"primary\" onClick={() => setVisible(true)}>\n        打开\n      </Button>\n\n      <Drawer\n        loading={loading}\n        visible={visible}\n        titleName=\"基础抽屉\"\n        onClose={() => setVisible(false)}\n        onOk={onOk}\n      >\n        <p>内容区....</p>\n        <p>内容区...</p>\n        <p>内容区...</p>\n      </Drawer>\n    </div>\n  );\n};",
        },
      },
      dependencies: {
        antd: { version: '>=4.17.3', css: 'antd/dist/antd.css' },
        react: { version: '>=16.9.0' },
        'svl-design': { version: '0.1.2' },
        'react-dom': { version: '>=16.9.0' },
        'rc-select': { version: '>=14.0.0' },
        'rc-tree-select': { version: '>=5.0.0' },
      },
      componentName: 'drawer',
      identifier: 'drawer-demo',
    },
  },
  'dropdown-demo': {
    component: function DumiDemo() {
      var _interopRequireDefault =
        require('/Users/cyberserval/workspace/svl-design/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js')[
          'default'
        ];
      require('antd/es/menu/style');
      var _menu = _interopRequireDefault(require('antd/es/menu'));
      var _react = _interopRequireDefault(require('react'));
      var _svlDesign = require('svl-design');
      var _default = function _default() {
        return /*#__PURE__*/ _react['default'].createElement(
          'div',
          null,
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Dropdown.Button,
            {
              type: 'primary',
              overlay: /*#__PURE__*/ _react['default'].createElement(
                _menu['default'],
                null,
                /*#__PURE__*/ _react['default'].createElement(
                  _menu['default'].Item,
                  {
                    key: '1',
                  },
                  'Submit and continue',
                ),
                /*#__PURE__*/ _react['default'].createElement(
                  _menu['default'].Item,
                  {
                    key: '2',
                  },
                  'Submit and 2',
                ),
              ),
            },
            'Submit',
          ),
        );
      };
      return _react['default'].createElement(_default);
    },
    previewerProps: {
      sources: {
        _: {
          tsx: 'import React from \'react\';\nimport { Menu } from \'antd\';\nimport { Dropdown } from \'svl-design\';\n\nexport default () => {\n  return (\n    <div>\n      <Dropdown.Button\n        type="primary"\n        overlay={\n          <Menu>\n            <Menu.Item key="1">Submit and continue</Menu.Item>\n            <Menu.Item key="2">Submit and 2</Menu.Item>\n          </Menu>\n        }\n      >\n        Submit\n      </Dropdown.Button>\n    </div>\n  );\n};',
        },
      },
      dependencies: {
        antd: { version: '>=4.17.3', css: 'antd/dist/antd.css' },
        react: { version: '>=16.9.0' },
        'svl-design': { version: '0.1.2' },
        'react-dom': { version: '>=16.9.0' },
        'rc-select': { version: '>=14.0.0' },
        'rc-tree-select': { version: '>=5.0.0' },
      },
      componentName: 'dropdown',
      identifier: 'dropdown-demo',
    },
  },
  'label-demo': {
    component: function DumiDemo() {
      var _interopRequireDefault =
        require('/Users/cyberserval/workspace/svl-design/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js')[
          'default'
        ];
      require('antd/es/space/style');
      var _space = _interopRequireDefault(require('antd/es/space'));
      var _react = _interopRequireDefault(require('react'));
      var _svlDesign = require('svl-design');
      var _default = function _default() {
        return /*#__PURE__*/ _react['default'].createElement(
          _space['default'],
          null,
          /*#__PURE__*/ _react['default'].createElement(
            _space['default'],
            {
              direction: 'vertical',
            },
            /*#__PURE__*/ _react['default'].createElement(
              _svlDesign.Label,
              {
                type: 'line',
                status: 'default',
                size: 'small',
              },
              '\u6807\u7B7E\u6587\u672C',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _svlDesign.Label,
              {
                type: 'line',
                status: 'success',
                size: 'small',
              },
              '\u6807\u7B7E\u6587\u672C',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _svlDesign.Label,
              {
                type: 'line',
                status: 'warning',
                size: 'small',
              },
              '\u6807\u7B7E\u6587\u672C',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _svlDesign.Label,
              {
                type: 'line',
                status: 'error',
                size: 'small',
              },
              '\u6807\u7B7E\u6587\u672C',
            ),
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _space['default'],
            {
              direction: 'vertical',
            },
            /*#__PURE__*/ _react['default'].createElement(
              _svlDesign.Label,
              {
                type: 'face',
                status: 'default',
                size: 'middle',
              },
              '\u6807\u7B7E\u6587\u672C',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _svlDesign.Label,
              {
                type: 'face',
                status: 'success',
                size: 'middle',
              },
              '\u6807\u7B7E\u6587\u672C',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _svlDesign.Label,
              {
                type: 'face',
                status: 'warning',
                size: 'middle',
              },
              '\u6807\u7B7E\u6587\u672C',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _svlDesign.Label,
              {
                type: 'face',
                status: 'error',
                size: 'middle',
              },
              '\u6807\u7B7E\u6587\u672C',
            ),
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _space['default'],
            {
              direction: 'vertical',
            },
            /*#__PURE__*/ _react['default'].createElement(
              _svlDesign.Label,
              {
                type: 'line',
                status: 'default',
                size: 'large',
              },
              '\u6807\u7B7E\u6587\u672C',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _svlDesign.Label,
              {
                type: 'ghost',
                status: 'success',
                size: 'large',
              },
              '\u6807\u7B7E\u6587\u672C',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _svlDesign.Label,
              {
                type: 'ghost',
                status: 'warning',
                size: 'large',
              },
              '\u6807\u7B7E\u6587\u672C',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _svlDesign.Label,
              {
                type: 'ghost',
                status: 'error',
                size: 'large',
              },
              '\u6807\u7B7E\u6587\u672C',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _svlDesign.Label,
              {
                visible: false,
                type: 'ghost',
                status: 'error',
                size: 'large',
              },
              '\u6807\u7B7E\u6587\u672C',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _svlDesign.Label,
              {
                closable: true,
                type: 'ghost',
                status: 'error',
                size: 'large',
              },
              '\u6807\u7B7E\u6587\u672C',
            ),
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _space['default'],
            {
              direction: 'vertical',
            },
            /*#__PURE__*/ _react['default'].createElement(
              _svlDesign.Label,
              {
                type: 'ghost',
                color: '#0867FF',
              },
              '\u6807\u7B7E\u6587\u672C',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _svlDesign.Label,
              {
                type: 'ghost',
                color: '#E6505C',
              },
              '\u6807\u7B7E\u6587\u672C',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _svlDesign.Label,
              {
                type: 'ghost',
                color: '#FE893B',
              },
              '\u6807\u7B7E\u6587\u672C',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _svlDesign.Label,
              {
                type: 'ghost',
                color: '#2A9D8F',
              },
              '\u6807\u7B7E\u6587\u672C',
            ),
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _space['default'],
            {
              direction: 'vertical',
            },
            /*#__PURE__*/ _react['default'].createElement(
              _svlDesign.Label,
              {
                dot: true,
                color: '#0867FF',
                size: 'small',
              },
              '\u6807\u7B7E\u6587\u672C',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _svlDesign.Label,
              {
                dot: true,
                color: '#E6505C',
              },
              '\u6807\u7B7E\u6587\u672C',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _svlDesign.Label,
              {
                dot: true,
                color: '#FE893B',
              },
              '\u6807\u7B7E\u6587\u672C',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _svlDesign.Label,
              {
                dot: true,
                color: '#2A9D8F',
              },
              '\u6807\u7B7E\u6587\u672C',
            ),
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _space['default'],
            {
              direction: 'vertical',
            },
            /*#__PURE__*/ _react['default'].createElement(
              _svlDesign.Label,
              {
                dot: {
                  show: true,
                  color: '#2A9D8F',
                },
                color: '#969799',
                size: 'small',
              },
              '\u6807\u7B7E\u6587\u672C',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _svlDesign.Label,
              {
                dot: {
                  show: true,
                  color: '#2A9D8F',
                },
                color: '#E6505C',
              },
              '\u6807\u7B7E\u6587\u672C',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _svlDesign.Label,
              {
                dot: {
                  show: true,
                  color: '#2A9D8F',
                },
                color: '#FE893B',
              },
              '\u6807\u7B7E\u6587\u672C',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _svlDesign.Label,
              {
                dot: {
                  show: true,
                  color: '#2A9D8F',
                },
                color: '#2A9D8F',
              },
              '\u6807\u7B7E\u6587\u672C',
            ),
          ),
        );
      };
      return _react['default'].createElement(_default);
    },
    previewerProps: {
      sources: {
        _: {
          tsx: 'import React from \'react\';\nimport { Space } from \'antd\';\nimport { Label } from \'svl-design\';\n\nexport default () => {\n  return (\n    <Space>\n      <Space direction="vertical">\n        <Label type="line" status="default" size="small">\n          标签文本\n        </Label>\n        <Label type="line" status="success" size="small">\n          标签文本\n        </Label>\n        <Label type="line" status="warning" size="small">\n          标签文本\n        </Label>\n        <Label type="line" status="error" size="small">\n          标签文本\n        </Label>\n      </Space>\n      <Space direction="vertical">\n        <Label type="face" status="default" size="middle">\n          标签文本\n        </Label>\n        <Label type="face" status="success" size="middle">\n          标签文本\n        </Label>\n        <Label type="face" status="warning" size="middle">\n          标签文本\n        </Label>\n        <Label type="face" status="error" size="middle">\n          标签文本\n        </Label>\n      </Space>\n      <Space direction="vertical">\n        <Label type="line" status="default" size="large">\n          标签文本\n        </Label>\n        <Label type="ghost" status="success" size="large">\n          标签文本\n        </Label>\n        <Label type="ghost" status="warning" size="large">\n          标签文本\n        </Label>\n        <Label type="ghost" status="error" size="large">\n          标签文本\n        </Label>\n        <Label visible={false} type="ghost" status="error" size="large">\n          标签文本\n        </Label>\n\n        <Label closable type="ghost" status="error" size="large">\n          标签文本\n        </Label>\n      </Space>\n      <Space direction="vertical">\n        <Label type="ghost" color="#0867FF">\n          标签文本\n        </Label>\n        <Label type="ghost" color="#E6505C">\n          标签文本\n        </Label>\n        <Label type="ghost" color="#FE893B">\n          标签文本\n        </Label>\n        <Label type="ghost" color="#2A9D8F">\n          标签文本\n        </Label>\n      </Space>\n      <Space direction="vertical">\n        <Label dot color="#0867FF" size="small">\n          标签文本\n        </Label>\n        <Label dot color="#E6505C">\n          标签文本\n        </Label>\n        <Label dot color="#FE893B">\n          标签文本\n        </Label>\n        <Label dot color="#2A9D8F">\n          标签文本\n        </Label>\n      </Space>\n      <Space direction="vertical">\n        <Label\n          dot={{ show: true, color: \'#2A9D8F\' }}\n          color="#969799"\n          size="small"\n        >\n          标签文本\n        </Label>\n        <Label dot={{ show: true, color: \'#2A9D8F\' }} color="#E6505C">\n          标签文本\n        </Label>\n        <Label dot={{ show: true, color: \'#2A9D8F\' }} color="#FE893B">\n          标签文本\n        </Label>\n        <Label dot={{ show: true, color: \'#2A9D8F\' }} color="#2A9D8F">\n          标签文本\n        </Label>\n      </Space>\n    </Space>\n  );\n};',
        },
      },
      dependencies: {
        antd: { version: '>=4.17.3', css: 'antd/dist/antd.css' },
        react: { version: '>=16.9.0' },
        'svl-design': { version: '0.1.2' },
        'react-dom': { version: '>=16.9.0' },
        'rc-select': { version: '>=14.0.0' },
        'rc-tree-select': { version: '>=5.0.0' },
      },
      componentName: 'label',
      identifier: 'label-demo',
    },
  },
  'modal-demo': {
    component: function DumiDemo() {
      var _interopRequireWildcard =
        require('/Users/cyberserval/workspace/svl-design/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireWildcard.js')[
          'default'
        ];
      var _interopRequireDefault =
        require('/Users/cyberserval/workspace/svl-design/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js')[
          'default'
        ];
      require('antd/es/button/style');
      var _button = _interopRequireDefault(require('antd/es/button'));
      var _slicedToArray2 = _interopRequireDefault(
        require('/Users/cyberserval/workspace/svl-design/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
      );
      var _react = _interopRequireWildcard(require('react'));
      var _svlDesign = require('svl-design');
      var _default = function _default() {
        var _useState = (0, _react.useState)(false),
          _useState2 = (0, _slicedToArray2['default'])(_useState, 2),
          visible = _useState2[0],
          setVisible = _useState2[1];
        return /*#__PURE__*/ _react['default'].createElement(
          'div',
          null,
          /*#__PURE__*/ _react['default'].createElement(
            _button['default'],
            {
              type: 'primary',
              onClick: function onClick() {
                return setVisible(true);
              },
            },
            '\u6253\u5F00',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Modal,
            {
              visible: visible,
              titleName: '\u6A21\u6001\u6846\u6807\u9898',
              onCancel: function onCancel() {
                return setVisible(false);
              },
              onOk: function onOk() {
                return setVisible(false);
              },
              footer: [
                /*#__PURE__*/ _react['default'].createElement(
                  _button['default'],
                  {
                    size: 'large',
                    type: 'primary',
                    onClick: function onClick() {
                      return setVisible(false);
                    },
                  },
                  '\u786E\u5B9A',
                ),
                /*#__PURE__*/ _react['default'].createElement(
                  _button['default'],
                  {
                    size: 'large',
                    onClick: function onClick() {
                      return setVisible(false);
                    },
                  },
                  '\u53D6\u6D88',
                ),
              ],
            },
            /*#__PURE__*/ _react['default'].createElement(
              'p',
              null,
              '\u5185\u5BB9\u533A....',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              'p',
              null,
              '\u5185\u5BB9\u533A...',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              'p',
              null,
              '\u5185\u5BB9\u533A...',
            ),
          ),
        );
      };
      return _react['default'].createElement(_default);
    },
    previewerProps: {
      sources: {
        _: {
          tsx: 'import React, { useState } from \'react\';\nimport { Button } from \'antd\';\nimport { Modal } from \'svl-design\';\n\nexport default () => {\n  const [visible, setVisible] = useState(false);\n\n  return (\n    <div>\n      <Button type="primary" onClick={() => setVisible(true)}>\n        打开\n      </Button>\n\n      <Modal\n        visible={visible}\n        titleName="模态框标题"\n        onCancel={() => setVisible(false)}\n        onOk={() => setVisible(false)}\n        footer={[\n          <Button size="large" type="primary" onClick={() => setVisible(false)}>\n            确定\n          </Button>,\n          <Button size="large" onClick={() => setVisible(false)}>\n            取消\n          </Button>,\n        ]}\n      >\n        <p>内容区....</p>\n        <p>内容区...</p>\n        <p>内容区...</p>\n      </Modal>\n    </div>\n  );\n};',
        },
      },
      dependencies: {
        antd: { version: '>=4.17.3', css: 'antd/dist/antd.css' },
        react: { version: '>=16.9.0' },
        'svl-design': { version: '0.1.2' },
        'react-dom': { version: '>=16.9.0' },
        'rc-select': { version: '>=14.0.0' },
        'rc-tree-select': { version: '>=5.0.0' },
      },
      componentName: 'modal',
      identifier: 'modal-demo',
    },
  },
  'popconfirm-demo': {
    component: function DumiDemo() {
      var _interopRequireDefault =
        require('/Users/cyberserval/workspace/svl-design/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js')[
          'default'
        ];
      require('antd/es/button/style');
      var _button = _interopRequireDefault(require('antd/es/button'));
      var _react = _interopRequireDefault(require('react'));
      var _svlDesign = require('svl-design');
      var _default = function _default() {
        return /*#__PURE__*/ _react['default'].createElement(
          'div',
          null,
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Popconfirm,
            // icon={null}
            {
              title: 'Are you sure to delete this task?',
              titleName: 'test',
              // onConfirm={confirm}
              // onCancel={cancel}
              okText: '\u5220\u9664',
              cancelText: '\u53D6\u6D88',
            },
            /*#__PURE__*/ _react['default'].createElement(
              _button['default'],
              {
                type: 'primary',
              },
              '\u5220\u9664',
            ),
          ),
        );
      };
      return _react['default'].createElement(_default);
    },
    previewerProps: {
      sources: {
        _: {
          tsx: 'import React from \'react\';\nimport { Button } from \'antd\';\nimport { Popconfirm } from \'svl-design\';\n\nexport default () => {\n  return (\n    <div>\n      <Popconfirm\n        // icon={null}\n        title="Are you sure to delete this task?"\n        titleName="test"\n        // onConfirm={confirm}\n        // onCancel={cancel}\n        okText="删除"\n        cancelText="取消"\n      >\n        <Button type="primary">删除</Button>\n      </Popconfirm>\n    </div>\n  );\n};',
        },
      },
      dependencies: {
        antd: { version: '>=4.17.3', css: 'antd/dist/antd.css' },
        react: { version: '>=16.9.0' },
        'svl-design': { version: '0.1.2' },
        'react-dom': { version: '>=16.9.0' },
        'rc-select': { version: '>=14.0.0' },
        'rc-tree-select': { version: '>=5.0.0' },
      },
      componentName: 'popconfirm',
      identifier: 'popconfirm-demo',
    },
  },
  'select-demo': {
    component: function DumiDemo() {
      var _interopRequireDefault =
        require('/Users/cyberserval/workspace/svl-design/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js')[
          'default'
        ];
      var _react = _interopRequireDefault(require('react'));
      var _svlDesign = require('svl-design');
      var Option = _svlDesign.Select.Option,
        OptGroup = _svlDesign.Select.OptGroup;
      var _default = function _default() {
        var handleChange = function handleChange(value) {
          console.log('selected '.concat(value));
        };
        return /*#__PURE__*/ _react['default'].createElement(
          _react['default'].Fragment,
          null,
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Select,
            {
              defaultValue: 'lucy',
              style: {
                width: 200,
              },
              onChange: handleChange,
            },
            /*#__PURE__*/ _react['default'].createElement(
              OptGroup,
              {
                label: 'Manager',
              },
              /*#__PURE__*/ _react['default'].createElement(
                Option,
                {
                  value: 'jack',
                },
                'Jack',
              ),
              /*#__PURE__*/ _react['default'].createElement(
                Option,
                {
                  value: 'lucy',
                },
                'Lucy',
              ),
            ),
            /*#__PURE__*/ _react['default'].createElement(
              OptGroup,
              {
                label: 'Engineer',
              },
              /*#__PURE__*/ _react['default'].createElement(
                Option,
                {
                  value: 'Yiminghe',
                },
                'yiminghe',
              ),
            ),
          ),
        );
      };
      return _react['default'].createElement(_default);
    },
    previewerProps: {
      sources: {
        _: {
          tsx: 'import React, { useState } from \'react\';\nimport { Select } from \'svl-design\';\n\nconst { Option, OptGroup } = Select;\n\nexport default () => {\n  const handleChange = (value: string) => {\n    console.log(`selected ${value}`);\n  };\n\n  return (\n    <>\n      <Select\n        defaultValue="lucy"\n        style={{ width: 200 }}\n        onChange={handleChange}\n      >\n        <OptGroup label="Manager">\n          <Option value="jack">Jack</Option>\n          <Option value="lucy">Lucy</Option>\n        </OptGroup>\n        <OptGroup label="Engineer">\n          <Option value="Yiminghe">yiminghe</Option>\n        </OptGroup>\n      </Select>\n    </>\n  );\n};',
        },
      },
      dependencies: {
        react: { version: '>=16.9.0' },
        'svl-design': { version: '0.1.2' },
        antd: { version: '>=4.17.3', css: 'antd/dist/antd.css' },
        'rc-select': { version: '>=14.0.0' },
        'rc-tree-select': { version: '>=5.0.0' },
        'react-dom': { version: '>=16.9.0' },
      },
      componentName: 'select',
      identifier: 'select-demo',
    },
  },
  'steps-demo': {
    component: function DumiDemo() {
      var _interopRequireDefault =
        require('/Users/cyberserval/workspace/svl-design/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js')[
          'default'
        ];
      var _react = _interopRequireDefault(require('react'));
      var _svlDesign = require('svl-design');
      var Step = _svlDesign.Steps.Step;
      var _default = function _default() {
        return /*#__PURE__*/ _react['default'].createElement(
          _react['default'].Fragment,
          null,
          /*#__PURE__*/ _react['default'].createElement(
            'h3',
            null,
            'small steps',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Steps,
            {
              current: 1,
              size: 'small',
            },
            /*#__PURE__*/ _react['default'].createElement(Step, {
              title: 'Finished',
              description: 'This is a description.',
            }),
            /*#__PURE__*/ _react['default'].createElement(Step, {
              title: 'In Progress',
              subTitle: 'Left 00:00:08',
              description: 'This is a description.',
            }),
            /*#__PURE__*/ _react['default'].createElement(Step, {
              title: 'In Progress',
              status: 'error',
              subTitle: 'Left 00:00:08',
              description: 'This is a description.',
            }),
            /*#__PURE__*/ _react['default'].createElement(Step, {
              title: 'Waiting',
              description: 'This is a descriptionss.',
            }),
          ),
          /*#__PURE__*/ _react['default'].createElement(
            'h3',
            null,
            'default steps',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Steps,
            {
              current: 1,
              size: 'default',
            },
            /*#__PURE__*/ _react['default'].createElement(Step, {
              title: 'Finished',
              description: 'This is a description.',
            }),
            /*#__PURE__*/ _react['default'].createElement(Step, {
              title: 'In Progress',
              subTitle: 'Left 00:00:08',
              description: 'This is a description.',
            }),
            /*#__PURE__*/ _react['default'].createElement(Step, {
              title: 'In Progress',
              status: 'error',
              subTitle: 'Left 00:00:08',
              description: 'This is a description.',
            }),
            /*#__PURE__*/ _react['default'].createElement(Step, {
              title: 'Waiting',
              description: 'This is a descriptionss.',
            }),
          ),
          /*#__PURE__*/ _react['default'].createElement(
            'h3',
            null,
            'large steps',
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.Steps,
            {
              current: 1,
              size: 'large',
            },
            /*#__PURE__*/ _react['default'].createElement(Step, {
              title: 'Finished',
              description: 'This is a description.',
            }),
            /*#__PURE__*/ _react['default'].createElement(Step, {
              title: 'In Progress',
              subTitle: 'Left 00:00:08',
              description: 'This is a description.',
            }),
            /*#__PURE__*/ _react['default'].createElement(Step, {
              title: 'In Progress',
              status: 'error',
              subTitle: 'Left 00:00:08',
              description: 'This is a description.',
            }),
            /*#__PURE__*/ _react['default'].createElement(Step, {
              title: 'Waiting',
              description: 'This is a descriptionss.',
            }),
          ),
        );
      };
      return _react['default'].createElement(_default);
    },
    previewerProps: {
      sources: {
        _: {
          tsx: 'import React from \'react\';\nimport { Menu } from \'antd\';\nimport { Steps } from \'svl-design\';\nimport { ExclamationCircleOutlined } from \'@ant-design/icons\';\nconst { Step } = Steps;\n\nexport default () => {\n  return (\n    <>\n      <h3>small steps</h3>\n      <Steps current={1} size="small">\n        <Step title="Finished" description="This is a description." />\n        <Step\n          title="In Progress"\n          subTitle="Left 00:00:08"\n          description="This is a description."\n        />\n        <Step\n          title="In Progress"\n          status="error"\n          subTitle="Left 00:00:08"\n          description="This is a description."\n        />\n        <Step title="Waiting" description="This is a descriptionss." />\n      </Steps>\n      <h3>default steps</h3>\n      <Steps current={1} size="default">\n        <Step title="Finished" description="This is a description." />\n        <Step\n          title="In Progress"\n          subTitle="Left 00:00:08"\n          description="This is a description."\n        />\n        <Step\n          title="In Progress"\n          status="error"\n          subTitle="Left 00:00:08"\n          description="This is a description."\n        />\n        <Step title="Waiting" description="This is a descriptionss." />\n      </Steps>\n      <h3>large steps</h3>\n      <Steps current={1} size="large">\n        <Step title="Finished" description="This is a description." />\n        <Step\n          title="In Progress"\n          subTitle="Left 00:00:08"\n          description="This is a description."\n        />\n        <Step\n          title="In Progress"\n          status="error"\n          subTitle="Left 00:00:08"\n          description="This is a description."\n        />\n        <Step title="Waiting" description="This is a descriptionss." />\n      </Steps>\n    </>\n  );\n};',
        },
      },
      dependencies: {
        react: { version: '>=16.9.0' },
        'svl-design': { version: '0.1.2' },
        antd: { version: '>=4.17.3', css: 'antd/dist/antd.css' },
        'rc-select': { version: '>=14.0.0' },
        'rc-tree-select': { version: '>=5.0.0' },
        'react-dom': { version: '>=16.9.0' },
      },
      componentName: 'steps',
      identifier: 'steps-demo',
    },
  },
  'switch-demo': {
    component: function DumiDemo() {
      var _interopRequireDefault =
        require('/Users/cyberserval/workspace/svl-design/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js')[
          'default'
        ];
      var _react = _interopRequireDefault(require('react'));
      var _svlDesign = require('svl-design');
      var _default = function _default() {
        return /*#__PURE__*/ _react['default'].createElement(
          'div',
          null,
          /*#__PURE__*/ _react['default'].createElement(
            'div',
            {
              style: {
                marginBottom: 10,
              },
            },
            /*#__PURE__*/ _react['default'].createElement(_svlDesign.Switch, {
              checkedChildren: '\u542F\u7528',
              unCheckedChildren: '\u7981\u7528',
              size: 'large',
              defaultChecked: true,
            }),
          ),
          /*#__PURE__*/ _react['default'].createElement(
            'div',
            {
              style: {
                marginBottom: 10,
              },
            },
            /*#__PURE__*/ _react['default'].createElement(_svlDesign.Switch, {
              checkedChildren: '\u542F\u7528',
              unCheckedChildren: '\u7981\u7528',
              size: 'large',
              defaultChecked: true,
            }),
          ),
          /*#__PURE__*/ _react['default'].createElement(
            'div',
            {
              style: {
                marginBottom: 10,
              },
            },
            /*#__PURE__*/ _react['default'].createElement(_svlDesign.Switch, {
              checkedChildren: '\u542F\u7528',
              unCheckedChildren: '\u7981\u7528',
              size: 'large',
              disabled: true,
              defaultChecked: true,
            }),
          ),
        );
      };
      return _react['default'].createElement(_default);
    },
    previewerProps: {
      sources: {
        _: {
          tsx: 'import React from \'react\';\nimport { Switch } from \'svl-design\';\n\nexport default () => {\n  return (\n    <div>\n      <div style={{ marginBottom: 10 }}>\n        <Switch\n          checkedChildren="启用"\n          unCheckedChildren="禁用"\n          size="large"\n          defaultChecked\n        />\n      </div>\n      <div style={{ marginBottom: 10 }}>\n        <Switch\n          checkedChildren="启用"\n          unCheckedChildren="禁用"\n          size="large"\n          defaultChecked\n        />\n      </div>\n      <div style={{ marginBottom: 10 }}>\n        <Switch\n          checkedChildren="启用"\n          unCheckedChildren="禁用"\n          size="large"\n          disabled\n          defaultChecked\n        />\n      </div>\n    </div>\n  );\n};',
        },
      },
      dependencies: {
        react: { version: '>=16.9.0' },
        'svl-design': { version: '0.1.2' },
        antd: { version: '>=4.17.3', css: 'antd/dist/antd.css' },
        'rc-select': { version: '>=14.0.0' },
        'rc-tree-select': { version: '>=5.0.0' },
        'react-dom': { version: '>=16.9.0' },
      },
      componentName: 'switch',
      identifier: 'switch-demo',
    },
  },
  'switch-demo-1': {
    component: function DumiDemo() {
      var _interopRequireDefault =
        require('/Users/cyberserval/workspace/svl-design/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js')[
          'default'
        ];
      var _react = _interopRequireDefault(require('react'));
      var _svlDesign = require('svl-design');
      var _default = function _default() {
        return /*#__PURE__*/ _react['default'].createElement(
          'div',
          null,
          /*#__PURE__*/ _react['default'].createElement(_svlDesign.Switch, {
            size: 'small',
            defaultChecked: true,
          }),
          /*#__PURE__*/ _react['default'].createElement('br', null),
          /*#__PURE__*/ _react['default'].createElement(_svlDesign.Switch, {
            defaultChecked: true,
          }),
          /*#__PURE__*/ _react['default'].createElement('br', null),
          /*#__PURE__*/ _react['default'].createElement(_svlDesign.Switch, {
            checkedChildren: '\u5F00\u542F',
            unCheckedChildren: '\u5173\u95ED',
            defaultChecked: true,
          }),
        );
      };
      return _react['default'].createElement(_default);
    },
    previewerProps: {
      sources: {
        _: {
          tsx: 'import React from \'react\';\nimport { Switch } from \'svl-design\';\n\nexport default () => {\n  return (\n    <div>\n      <Switch size="small" defaultChecked />\n      <br />\n      <Switch defaultChecked />\n      <br />\n      <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />\n    </div>\n  );\n};',
        },
      },
      dependencies: {
        react: { version: '>=16.9.0' },
        'svl-design': { version: '0.1.2' },
        antd: { version: '>=4.17.3', css: 'antd/dist/antd.css' },
        'rc-select': { version: '>=14.0.0' },
        'rc-tree-select': { version: '>=5.0.0' },
        'react-dom': { version: '>=16.9.0' },
      },
      componentName: 'switch',
      identifier: 'switch-demo-1',
    },
  },
  'tabs-demo': {
    component: function DumiDemo() {
      var _interopRequireDefault =
        require('/Users/cyberserval/workspace/svl-design/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js')[
          'default'
        ];
      var _react = _interopRequireDefault(require('react'));
      var _svlDesign = require('svl-design');
      var _default = function _default() {
        var items = new Array(3).fill(null).map(function (_, i) {
          var id = String(i + 1);
          return {
            label: 'Tab Title '.concat(id),
            key: id,
            children: /*#__PURE__*/ _react['default'].createElement(
              _react['default'].Fragment,
              null,
              /*#__PURE__*/ _react['default'].createElement(
                'p',
                null,
                'Content of Tab Pane ',
                id,
              ),
              /*#__PURE__*/ _react['default'].createElement(
                'p',
                null,
                'Content of Tab Pane ',
                id,
              ),
              /*#__PURE__*/ _react['default'].createElement(
                'p',
                null,
                'Content of Tab Pane ',
                id,
              ),
            ),
          };
        });
        return /*#__PURE__*/ _react['default'].createElement(
          'div',
          null,
          /*#__PURE__*/ _react['default'].createElement(
            'h3',
            null,
            'radius-card',
          ),
          /*#__PURE__*/ _react['default'].createElement(_svlDesign.Tabs, {
            type: 'radius-card',
            items: items,
          }),
          /*#__PURE__*/ _react['default'].createElement('h3', null, 'card'),
          /*#__PURE__*/ _react['default'].createElement(_svlDesign.Tabs, {
            type: 'card',
            items: items,
          }),
          /*#__PURE__*/ _react['default'].createElement('h3', null, 'line'),
          /*#__PURE__*/ _react['default'].createElement(_svlDesign.Tabs, {
            items: items,
          }),
        );
      };
      return _react['default'].createElement(_default);
    },
    previewerProps: {
      sources: {
        _: {
          tsx: 'import React from \'react\';\nimport { Tabs } from \'svl-design\';\n\nexport default () => {\n  const items = new Array(3).fill(null).map((_, i) => {\n    const id = String(i + 1);\n    return {\n      label: `Tab Title ${id}`,\n      key: id,\n      children: (\n        <>\n          <p>Content of Tab Pane {id}</p>\n          <p>Content of Tab Pane {id}</p>\n          <p>Content of Tab Pane {id}</p>\n        </>\n      ),\n    };\n  });\n  return (\n    <div>\n      <h3>radius-card</h3>\n      <Tabs type="radius-card" items={items}></Tabs>\n      <h3>card</h3>\n      <Tabs type="card" items={items}></Tabs>\n      <h3>line</h3>\n      <Tabs items={items}></Tabs>\n    </div>\n  );\n};',
        },
      },
      dependencies: {
        react: { version: '>=16.9.0' },
        'svl-design': { version: '0.1.2' },
        antd: { version: '>=4.17.3', css: 'antd/dist/antd.css' },
        'rc-select': { version: '>=14.0.0' },
        'rc-tree-select': { version: '>=5.0.0' },
        'react-dom': { version: '>=16.9.0' },
      },
      componentName: 'tabs',
      identifier: 'tabs-demo',
    },
  },
  'tree-select-demo': {
    component: function DumiDemo() {
      var _interopRequireWildcard =
        require('/Users/cyberserval/workspace/svl-design/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireWildcard.js')[
          'default'
        ];
      var _interopRequireDefault =
        require('/Users/cyberserval/workspace/svl-design/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js')[
          'default'
        ];
      var _slicedToArray2 = _interopRequireDefault(
        require('/Users/cyberserval/workspace/svl-design/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
      );
      var _react = _interopRequireWildcard(require('react'));
      var _svlDesign = require('svl-design');
      var TreeNode = _svlDesign.TreeSelect.TreeNode;
      var _default = function _default() {
        var _useState = (0, _react.useState)(undefined),
          _useState2 = (0, _slicedToArray2['default'])(_useState, 2),
          value = _useState2[0],
          setValue = _useState2[1];
        var onChange = function onChange(newValue) {
          setValue(newValue);
        };
        return /*#__PURE__*/ _react['default'].createElement(
          _react['default'].Fragment,
          null,
          /*#__PURE__*/ _react['default'].createElement(
            _svlDesign.TreeSelect,
            {
              showSearch: true,
              style: {
                width: '100%',
              },
              value: value,
              dropdownStyle: {
                maxHeight: 400,
                overflow: 'auto',
              },
              placeholder: 'Please select',
              allowClear: true,
              treeDefaultExpandAll: true,
              onChange: onChange,
            },
            /*#__PURE__*/ _react['default'].createElement(
              TreeNode,
              {
                value: 'parent 1',
                title: 'parent 1',
              },
              /*#__PURE__*/ _react['default'].createElement(
                TreeNode,
                {
                  value: 'parent 1-0',
                  title: 'parent 1-0',
                },
                /*#__PURE__*/ _react['default'].createElement(TreeNode, {
                  value: 'leaf1',
                  title: 'leaf1',
                }),
                /*#__PURE__*/ _react['default'].createElement(TreeNode, {
                  value: 'leaf2',
                  title: 'leaf2',
                }),
              ),
              /*#__PURE__*/ _react['default'].createElement(
                TreeNode,
                {
                  value: 'parent 1-1',
                  title: 'parent 1-1',
                },
                /*#__PURE__*/ _react['default'].createElement(TreeNode, {
                  value: 'leaf3',
                  title: /*#__PURE__*/ _react['default'].createElement(
                    'b',
                    {
                      style: {
                        color: '#08c',
                      },
                    },
                    'leaf3',
                  ),
                }),
              ),
            ),
          ),
        );
      };
      return _react['default'].createElement(_default);
    },
    previewerProps: {
      sources: {
        _: {
          tsx: 'import React, { useState } from \'react\';\nimport { TreeSelect } from \'svl-design\';\n\nconst { TreeNode } = TreeSelect;\n\nexport default () => {\n  const [value, setValue] = useState<string | undefined>(undefined);\n\n  const onChange = (newValue: string) => {\n    setValue(newValue);\n  };\n\n  return (\n    <>\n      <TreeSelect\n        showSearch\n        style={{ width: \'100%\' }}\n        value={value}\n        dropdownStyle={{ maxHeight: 400, overflow: \'auto\' }}\n        placeholder="Please select"\n        allowClear\n        treeDefaultExpandAll\n        onChange={onChange}\n      >\n        <TreeNode value="parent 1" title="parent 1">\n          <TreeNode value="parent 1-0" title="parent 1-0">\n            <TreeNode value="leaf1" title="leaf1" />\n            <TreeNode value="leaf2" title="leaf2" />\n          </TreeNode>\n          <TreeNode value="parent 1-1" title="parent 1-1">\n            <TreeNode\n              value="leaf3"\n              title={<b style={{ color: \'#08c\' }}>leaf3</b>}\n            />\n          </TreeNode>\n        </TreeNode>\n      </TreeSelect>\n    </>\n  );\n};',
        },
      },
      dependencies: {
        react: { version: '>=16.9.0' },
        'svl-design': { version: '0.1.2' },
        antd: { version: '>=4.17.3', css: 'antd/dist/antd.css' },
        'rc-select': { version: '>=14.0.0' },
        'rc-tree-select': { version: '>=5.0.0' },
        'react-dom': { version: '>=16.9.0' },
      },
      componentName: 'tree-select',
      identifier: 'tree-select-demo',
    },
  },
  'buoy-card-demo': {
    component: function DumiDemo() {
      var _interopRequireDefault =
        require('/Users/cyberserval/workspace/svl-design/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js')[
          'default'
        ];
      var _react = _interopRequireDefault(require('react'));
      var _svlDesign = _interopRequireDefault(require('svl-design'));
      var _default = function _default() {
        return /*#__PURE__*/ _react['default'].createElement(
          _svlDesign['default'],
          null,
          '222',
        );
      };
      return _react['default'].createElement(_default);
    },
    previewerProps: {
      sources: {
        _: {
          tsx: "import React from 'react';\nimport BuoyCard from 'svl-design'\n\nexport default ()=>{\n  return (\n   <BuoyCard>\n   222\n   </BuoyCard> \n  )\n}",
        },
      },
      dependencies: {
        react: { version: '>=16.9.0' },
        'svl-design': { version: '0.1.2' },
        antd: { version: '>=4.17.3', css: 'antd/dist/antd.css' },
        'rc-select': { version: '>=14.0.0' },
        'rc-tree-select': { version: '>=5.0.0' },
        'react-dom': { version: '>=16.9.0' },
      },
      componentName: 'buoy-card',
      identifier: 'buoy-card-demo',
    },
  },
};
