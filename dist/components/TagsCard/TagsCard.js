'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const React = require('react');
const semantic_ui_react_1 = require('semantic-ui-react');

exports.default = (function (props) {
  return (React.createElement(semantic_ui_react_1.Card, null,
    React.createElement(semantic_ui_react_1.Card.Content, null,
      React.createElement(semantic_ui_react_1.Card.Header, null, 'Tags')),
    React.createElement(semantic_ui_react_1.Card.Content, null,
      React.createElement(semantic_ui_react_1.List, null, props.tags.map(tag => {
        const isActive = tag.fieldValue === props.tag;
        const activeStyle = {
          fontWeight: '700'
        };
        const tagLink = isActive ? '/blog' : '/blog/tags/' + tag.fieldValue + '/';
        return (React.createElement(semantic_ui_react_1.List.Item, {as: 'span', key: tag.fieldValue},
          React.createElement(semantic_ui_react_1.List.Icon, {name: 'tag', color: isActive ? 'blue' : null}),
          React.createElement(semantic_ui_react_1.List.Content, {style: isActive ? activeStyle : null},
            React.createElement(props.Link, {to: tagLink},
              tag.fieldValue,
              ' (',
              tag.totalCount,
              ')'))));
      })))));
});
// # sourceMappingURL=TagsCard.js.map
