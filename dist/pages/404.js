'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const React = require('react');
const semantic_ui_react_1 = require('semantic-ui-react');
const layout_1 = require('../components/layout');

exports.default = (function (props) {
  return React.createElement(layout_1.default, {location: props.location},
    React.createElement(semantic_ui_react_1.Grid, {centered: true, verticalAlign: 'middle', style: {
      minHeight: '700px'
    }},
    React.createElement(semantic_ui_react_1.Grid.Column, null,
      React.createElement(semantic_ui_react_1.Grid.Row, {style: {textAlign: 'center'}},
        React.createElement(semantic_ui_react_1.Icon, {name: 'marker', size: 'huge'}),
        React.createElement(semantic_ui_react_1.Header, {as: 'h1'}, 'You are here!'),
        React.createElement(semantic_ui_react_1.Header, {as: 'h2'}, 'But nothing found for you #404')))));
});
// # sourceMappingURL=404.js.map
