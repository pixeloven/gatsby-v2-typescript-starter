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
const BlogPagination_1 = require('./BlogPagination');
// Configure enzyme with react 16 adapter

enzyme_1.configure({adapter: new Adapter()});
const LinkStub = (function (props) {
  return React.createElement('div', __assign({}, props));
});
describe('BlogPagination component', () => {
  it('should render nothing if only 1 page', () => {
    const pathname = '/blog/page/1/';
    const pageCount = 1;
    const wrapper = enzyme_1.render(React.createElement(BlogPagination_1.default, {pathname, Link: LinkStub, pageCount}));
    expect(wrapper).toMatchSnapshot();
  });
  it('should render correctly 5 pages', () => {
    const pathname = '/blog/page/2/';
    const pageCount = 5;
    const wrapper = enzyme_1.render(React.createElement(BlogPagination_1.default, {pathname, Link: LinkStub, pageCount}));
    expect(wrapper).toMatchSnapshot();
  });
  it('should render correctly 10 pages', () => {
    const pathname = '/blog/page/5/';
    const pageCount = 10;
    const wrapper = enzyme_1.render(React.createElement(BlogPagination_1.default, {pathname, Link: LinkStub, pageCount}));
    expect(wrapper).toMatchSnapshot();
  });
  it('should render correctly 20 pages', () => {
    const pathname = '/blog/page/5/';
    const pageCount = 20;
    const wrapper = enzyme_1.render(React.createElement(BlogPagination_1.default, {pathname, Link: LinkStub, pageCount}));
    expect(wrapper).toMatchSnapshot();
  });
  it('should have first link active if no match', () => {
    const pathname = '/plop';
    const pageCount = 10;
    const wrapper = enzyme_1.render(React.createElement(BlogPagination_1.default, {pathname, Link: LinkStub, pageCount}));
    expect(wrapper).toMatchSnapshot();
  });
});
// # sourceMappingURL=BlogPagination.test.js.map
