'use strict';
const __extends = (this && this.__extends) || (function () {
  const extendStatics = Object.setPrototypeOf ||
        (Array.isArray({__proto__: []}) && function (d, b) {
          d.__proto__ = b;
        }) ||
        function (d, b) {
          for (const p in b) {
            if (b.hasOwnProperty(p)) {
              d[p] = b[p];
            }
          }
        };
  return function (d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
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
const React = require('react');
// TODO remove .json for graphql
// TODO create a publish cmd that can out commit? And perhaps one that can commit to specific branch for github support
// TODO re-generate  graphql types?
// TODO need to document what the expect image size for blog posts is
// TODO can generators be typescript?
// TODO Update README with tools, generators
// TODO create .env for things like supporting comments and other features.
// TODO update home page to look like semantic ui's.
// TODO update blog to look more modern
// TODO https://github.com/gatsbyjs/gatsby-starter-blog model starter after that but also make it more modern with semantic design
// TODO react-helmet was used here but not sure it is needed anymore
// TODO also might not need this file anymore since this is just a copy of gatsby's
// TODO add       "indent": ["error", 4]
// TODO set react version for xo
// TODO get disqus working again or remove it
// TODO if we don't need this below then remove helmet???
const HTML = /** @class */ (function (_super) {
  __extends(HTML, _super);
  function HTML() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  HTML.prototype.render = function () {
    return (React.createElement('html', __assign({}, this.props.htmlAttributes),
      React.createElement('head', null,
        React.createElement('meta', {charSet: 'utf-8'}),
        React.createElement('meta', {httpEquiv: 'x-ua-compatible', content: 'ie=edge'}),
        React.createElement('meta', {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'}),
        this.props.headComponents),
      React.createElement('body', __assign({}, this.props.bodyAttributes),
        this.props.preBodyComponents,
        React.createElement('div', {key: 'body', id: '___gatsby', dangerouslySetInnerHTML: {__html: this.props.body}}),
        this.props.postBodyComponents)));
  };
  return HTML;
})(React.Component);
exports.default = HTML;
// # sourceMappingURL=html.js.map
