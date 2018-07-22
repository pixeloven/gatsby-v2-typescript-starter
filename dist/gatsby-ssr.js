'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const React = require('react');
const react_redux_1 = require('react-redux');
const server_1 = require('react-dom/server');
const store_1 = require('./src/store');

exports.replaceRenderer = function (replaceRendererProps) {
  const ConnectedBody = function () {
    return (React.createElement(react_redux_1.Provider, {store: store_1.store}, replaceRendererProps.bodyComponent));
  };
  replaceRendererProps.replaceBodyHTMLString(server_1.renderToString(React.createElement(ConnectedBody, null)));
};
// # sourceMappingURL=gatsby-ssr.js.map
