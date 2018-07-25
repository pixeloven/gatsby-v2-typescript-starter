'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const React = require('react');
const semantic_ui_react_1 = require('semantic-ui-react');

exports.default = (function (props) {
  const extra = (React.createElement(Comment.Group, null,
    React.createElement(Comment, null,
      React.createElement(Comment.Avatar, {src: avatar.fluid.src, srcSet: avatar.fluid.srcSet}),
      React.createElement(Comment.Content, null,
        React.createElement(Comment.Author, {style: {fontWeight: 400}}, frontmatter.author.id),
        React.createElement(Comment.Metadata, {style: {margin: 0}},
          frontmatter.updatedDate,
          ' - ',
          timeToRead,
          ' min read')))));
  const description = (React.createElement(semantic_ui_react_1.Card.Description, null,
    excerpt,
    React.createElement('br', null),
    React.createElement(Link, {to: slug}, 'Read more\u2026')));
  return (React.createElement(semantic_ui_react_1.Card, {key: slug, fluid: true, image: cover, header: frontmatter.title, extra, description}));
});
// # sourceMappingURL=PostPreviewCard.js.map
