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
const gatsby_1 = require('gatsby');
const semantic_ui_react_1 = require('semantic-ui-react');

const PostCard = /** @class */ (function (_super) {
  __extends(PostCard, _super);
  function PostCard() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  PostCard.prototype.render = function () {
    const extra = (React.createElement(semantic_ui_react_1.Comment.Group, null,
      React.createElement(semantic_ui_react_1.Comment, null,
        Boolean(this.props.post.avatar) &&
                    React.createElement(semantic_ui_react_1.Comment.Avatar, {src: this.props.post.avatar.fluid.src, srcSet: this.props.post.avatar.fluid.srcSet}),
        React.createElement(semantic_ui_react_1.Comment.Content, null,
          React.createElement(semantic_ui_react_1.Comment.Author, {style: {fontWeight: 400}}, this.props.post.author.id),
          React.createElement(semantic_ui_react_1.Comment.Metadata, {style: {margin: 0}},
            this.props.post.meta.updatedDate,
            ' - ',
            this.props.post.meta.timeToRead,
            ' min read')))));
    const description = (React.createElement(semantic_ui_react_1.Card.Description, null,
      this.props.post.excerpt,
      React.createElement('br', null),
      React.createElement(gatsby_1.Link, {to: this.props.post.slug}, 'Read more\u2026')));
    return (React.createElement(semantic_ui_react_1.Card, {fluid: true, image: this.props.post.cover, header: this.props.post.title, extra, description}));
  };
  return PostCard;
})(React.PureComponent);
exports.default = PostCard;
// # sourceMappingURL=PostCard.js.map
