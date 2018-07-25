'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const React = require('react');
const semantic_ui_react_1 = require('semantic-ui-react');
const lodash_1 = require('lodash');

exports.default = (function (props) {
  if (props.pageCount === 1) {
    return null;
  }
  const activeItem = props.pathname.startsWith('/blog/page/') ?
    props.pathname.split('/')[3] :
    '1';
  return (React.createElement(semantic_ui_react_1.Menu, {pagination: true}, lodash_1.times(props.pageCount, index => {
    const pageIndex = (index + 1).toString();
    const rangeStep = props.pageCount < 10 ? 5 : 3;
    const isInRange = (Number(pageIndex) - rangeStep < Number(activeItem) && Number(pageIndex) + rangeStep > Number(activeItem));
    const isLastPage = (Number(pageIndex) === props.pageCount);
    const isFirstPage = (Number(pageIndex) === 1);
    if (isInRange || isFirstPage || isLastPage) {
      return (React.createElement(semantic_ui_react_1.Menu.Item, {key: pageIndex, style: {cursor: 'pointer'}, as: props.Link, to: '/blog/page/' + pageIndex + '/', name: pageIndex, active: activeItem === pageIndex}));
    }

    return (Number(pageIndex) === props.pageCount - 1 || Number(pageIndex) === 2) ?
      React.createElement(semantic_ui_react_1.Menu.Item, {key: pageIndex, disabled: true}, '...') :
      null;
  })));
});
// # sourceMappingURL=BlogPagination.js.map
