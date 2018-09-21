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
const enzyme_1 = require('enzyme');
require('jest');
const React = require('react');
const Adapter = require('enzyme-adapter-react-16');
const SidebarMenu_1 = require('./SidebarMenu');
// Configure enzyme with react 16 adapter

enzyme_1.configure({adapter: new Adapter()});
const items = [
  {name: 'Home', path: '/', exact: true},
  {name: 'About', path: '/about/', exact: true},
  {name: 'Blog', path: '/blog/', exact: false}
];
const LinkStub = function (props) {
  return React.createElement('div', __assign({}, props));
};
describe('SidebarMenu component', () => {
  it('should render correctly', () => {
    const wrapper = enzyme_1.render(React.createElement(SidebarMenu_1.SidebarMenu, {Link: LinkStub, pathname: '/', items, visible: true}));
    expect(wrapper).toMatchSnapshot();
  });
});
// # sourceMappingURL=SidebarMenu.test.js.map
