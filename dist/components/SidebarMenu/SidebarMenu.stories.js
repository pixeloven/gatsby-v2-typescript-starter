'use strict';
const __assign = (this && this.__assign) || Object.assign || function (t) {
  for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];
    for (const p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p)) {
        t[p] = s[p];
      }
    }
  }
  return t;
};
Object.defineProperty(exports, '__esModule', {value: true});
/* Tslint:disable no-var-requires */
const withReadme = require('storybook-readme/with-readme').default;
const React = require('react');
const react_1 = require('@storybook/react');
const addon_actions_1 = require('@storybook/addon-actions');
const addon_knobs_1 = require('@storybook/addon-knobs');
const SidebarMenuReadme = require('./README.md');
const SidebarMenu_1 = require('./SidebarMenu');

const items = [
  {name: 'Home', path: '/', exact: true, icon: 'home'},
  {name: 'About', path: '/about/', exact: true, icon: 'info circle'},
  {name: 'Blog', path: '/blog/', exact: false, icon: 'newspaper'}
];
const LinkStub = function (props) {
  return React.createElement('div', __assign({}, props, {onClick: addon_actions_1.action(props.to.toString())}), props.children);
};
react_1.storiesOf('SidebarMenu', module)
  .addDecorator(addon_knobs_1.withKnobs)
  .addDecorator(withReadme(SidebarMenuReadme))
  .add('default', () => {
    const pathname = addon_knobs_1.text('pathname', '/');
    return (React.createElement(SidebarMenu_1.SidebarMenu, {Link: LinkStub, items, pathname, visible: true}));
  });
// # sourceMappingURL=SidebarMenu.stories.js.map
