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
const HeaderMenu_1 = require('./HeaderMenu');
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
const dispatchStub = function (a) {
  return a;
};
describe('HeaderMenu component', () => {
  it('should nothing active', () => {
    const wrapper = enzyme_1.shallow(React.createElement(HeaderMenu_1.HeaderMenu, {Link: LinkStub, items, pathname: '/plop', dispatch: dispatchStub}));
    expect(wrapper.find({active: true}).length).toBe(0);
  });
  it('should have about as active (match exact)', () => {
    const wrapper = enzyme_1.shallow(React.createElement(HeaderMenu_1.HeaderMenu, {Link: LinkStub, items, pathname: '/about/', dispatch: dispatchStub}));
    expect(wrapper.find({name: 'About'}).prop('active')).toBeTruthy();
  });
  it('should have blog as active (match not exact)', () => {
    const wrapper = enzyme_1.shallow(React.createElement(HeaderMenu_1.HeaderMenu, {Link: LinkStub, items, pathname: '/blog/toto', dispatch: dispatchStub}));
    expect(wrapper.find({name: 'Blog'}).prop('active')).toBeTruthy();
  });
  it('should have inverted style', () => {
    const wrapper = enzyme_1.shallow(React.createElement(HeaderMenu_1.HeaderMenu, {Link: LinkStub, items, pathname: '/blog/toto', dispatch: dispatchStub, inverted: true}));
    expect(wrapper.find({inverted: true}).length).toBe(1);
  });
  it('should dispatch the correct message on burger click', () => {
    const dispatchMock = jest.fn();
    const wrapper = enzyme_1.shallow(React.createElement(HeaderMenu_1.HeaderMenu, {Link: LinkStub, items, pathname: '', dispatch: dispatchMock}));
    wrapper.find('.mobile .only').simulate('click');
    expect(dispatchMock.mock.calls.length).toBe(1);
  });
});
// # sourceMappingURL=HeaderMenu.test.js.map
