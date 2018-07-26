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
Object.defineProperty(exports, '__esModule', {value: true});
const React = require('react');
const semantic_ui_react_1 = require('semantic-ui-react');
const PostCard_1 = require('../PostCard/PostCard');

const PostList = /** @class */ (function (_super) {
  __extends(PostList, _super);
  function PostList() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  PostList.prototype.render = function () {
    const posts = this.props.posts;
    return (React.createElement(semantic_ui_react_1.Container, null, posts.map((post, index) => {
      return (React.createElement(PostCard_1.default, {key: index, post}));
    })));
  };
  return PostList;
})(React.PureComponent);
exports.default = PostList;
// # sourceMappingURL=PostList.js.map
