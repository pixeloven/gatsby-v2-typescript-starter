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
const BlogPaginationReadme = require('./README.md');
const BlogPagination_1 = require('./BlogPagination');

const LinkStub = (function (props) {
  return React.createElement('div', __assign({}, props, {onClick: addon_actions_1.action(props.to.toString())}), props.children);
});
react_1.storiesOf('BlogPagination', module)
  .addDecorator(withReadme(BlogPaginationReadme))
  .addDecorator(addon_knobs_1.withKnobs)
  .add('default', () => {
    const activePage = addon_knobs_1.number('activePage', 1);
    const pathname = '/blog/page/' + activePage + '/';
    const pageCount = addon_knobs_1.number('pageCount', 10);
    return (React.createElement(BlogPagination_1.default, {pathname, Link: LinkStub, pageCount}));
  });
// # sourceMappingURL=BlogPagination.stories.js.map
