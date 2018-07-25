'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const React = require('react');
const react_router_dom_1 = require('react-router-dom');
const react_redux_1 = require('react-redux');
const store_1 = require('./src/store');

exports.replaceRouterComponent = function (replaceRouterComponentProps) {
  return function (routerWrapperProps) {
    return React.createElement(react_redux_1.Provider, {store: store_1.store},
      React.createElement(react_router_dom_1.Router, {history: replaceRouterComponentProps.history}, routerWrapperProps.children));
  };
};
// # sourceMappingURL=gatsby-browser.js.map
