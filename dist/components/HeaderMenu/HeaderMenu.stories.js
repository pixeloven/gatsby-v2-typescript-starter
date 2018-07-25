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
const HeaderMenuReadme = require('./README.md');
const HeaderMenu_1 = require('./HeaderMenu');

const items = [
  {name: 'Home', path: '/', exact: true},
  {name: 'About', path: '/about/', exact: true},
  {name: 'Blog', path: '/blog/', exact: false}
];
const LinkStub = function (props) {
  return React.createElement('div', __assign({}, props, {onClick: addon_actions_1.action(props.to.toString())}), props.children);
};
const dispatchStub = function (a) {
  return addon_actions_1.action(a.type)(a) && a;
};
react_1.storiesOf('HeaderMenu', module)
  .addDecorator(addon_knobs_1.withKnobs)
  .addDecorator(withReadme(HeaderMenuReadme))
  .add('default', () => {
    const pathname = addon_knobs_1.text('pathname', '/');
    const inverted = addon_knobs_1.boolean('inverted', false);
    return (React.createElement(HeaderMenu_1.HeaderMenu, {Link: LinkStub, items, pathname, inverted, dispatch: dispatchStub}));
  });
// # sourceMappingURL=HeaderMenu.stories.js.map
