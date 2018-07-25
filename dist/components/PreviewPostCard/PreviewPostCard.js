'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const React = require('react');
const gatsby_1 = require('gatsby');
const semantic_ui_react_1 = require('semantic-ui-react');
// TODO break into smaller parts
exports.PreviewPostCard = function (props) {
  const extra = (React.createElement(semantic_ui_react_1.Comment.Group, null,
    React.createElement(semantic_ui_react_1.Comment, null,
      Boolean(props.avatar) &&
                React.createElement(semantic_ui_react_1.Comment.Avatar, {src: props.avatar.fluid.src, srcSet: props.avatar.fluid.srcSet}),
      React.createElement(semantic_ui_react_1.Comment.Content, null,
        React.createElement(semantic_ui_react_1.Comment.Author, {style: {fontWeight: 400}}, props.author.id),
        React.createElement(semantic_ui_react_1.Comment.Metadata, {style: {margin: 0}},
          props.meta.updatedDate,
          ' - ',
          props.meta.timeToRead,
          ' min read')))));
  const description = (React.createElement(semantic_ui_react_1.Card.Description, null,
    props.post.excerpt,
    React.createElement('br', null),
    React.createElement(gatsby_1.Link, {to: props.post.slug}, 'Read more\u2026')));
  return (React.createElement(semantic_ui_react_1.Card, {key: props.post.slug, fluid: true, image: props.cover, header: props.title, extra, description}));
};
exports.default = exports.PreviewPostCard;
// # sourceMappingURL=PreviewPostCard.js.map
