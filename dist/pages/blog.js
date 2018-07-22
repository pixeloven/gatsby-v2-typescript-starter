'use strict';
const __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, 'raw', {value: raw});
  } else {
    cooked.raw = raw;
  }
  return cooked;
};
Object.defineProperty(exports, '__esModule', {value: true});
const React = require('react');
const gatsby_1 = require('gatsby');
const semantic_ui_react_1 = require('semantic-ui-react');
const lodash_1 = require('lodash');
const layout_1 = require('../components/layout');
const BlogTitle_1 = require('../components/BlogTitle');
const TagsCard_1 = require('../components/TagsCard/TagsCard');
const BlogPagination_1 = require('../components/BlogPagination/BlogPagination');

exports.default = (function (props) {
  const tags = props.data.tags.group;
  const posts = props.data.posts.edges;
  const pathname = props.location.pathname;
  const pageCount = Math.ceil(props.data.posts.totalCount / 10);
  // TODO export posts in a proper component
  const Posts = (React.createElement(semantic_ui_react_1.Container, null, posts.map(_a => {
    const node = _a.node;
    let frontmatter = node.frontmatter,
      timeToRead = node.timeToRead,
      slug = node.fields.slug,
      excerpt = node.excerpt;
    const avatar = frontmatter.author.avatar.children[0];
    const cover = lodash_1.get(frontmatter, 'image.children.0.fluid', {});
    const extra = (React.createElement(semantic_ui_react_1.Comment.Group, null,
      React.createElement(semantic_ui_react_1.Comment, null,
        React.createElement(semantic_ui_react_1.Comment.Avatar, {src: avatar.fluid.src, srcSet: avatar.fluid.srcSet}),
        React.createElement(semantic_ui_react_1.Comment.Content, null,
          React.createElement(semantic_ui_react_1.Comment.Author, {style: {fontWeight: 400}}, frontmatter.author.id),
          React.createElement(semantic_ui_react_1.Comment.Metadata, {style: {margin: 0}},
            frontmatter.updatedDate,
            ' - ',
            timeToRead,
            ' min read')))));
    const description = (React.createElement(semantic_ui_react_1.Card.Description, null,
      excerpt,
      React.createElement('br', null),
      React.createElement(gatsby_1.Link, {to: slug}, 'Read more\u2026')));
    return (React.createElement(semantic_ui_react_1.Card, {key: slug, fluid: true, image: cover, header: frontmatter.title, extra, description}));
  })));
  return (React.createElement(layout_1.default, {location: props.location},
    React.createElement(semantic_ui_react_1.Container, null,
      React.createElement(BlogTitle_1.default, null),
      React.createElement(semantic_ui_react_1.Segment, {vertical: true},
        React.createElement(semantic_ui_react_1.Grid, {padded: true, style: {justifyContent: 'space-around'}},
          React.createElement('div', {style: {maxWidth: 600}},
            Posts,
            React.createElement(semantic_ui_react_1.Segment, {vertical: true, textAlign: 'center'},
              React.createElement(BlogPagination_1.default, {Link: gatsby_1.Link, pathname, pageCount}))),
          React.createElement('div', null,
            React.createElement(TagsCard_1.default, {Link: gatsby_1.Link, tags, tag: props.pageContext.tag})))))));
});
exports.pageQuery = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(['\nquery PageBlog {\n  # Get tags\n  tags: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}) {\n    group(field: frontmatter___tags) {\n      fieldValue\n      totalCount\n    }\n  }\n\n  # Get posts\n  posts: allMarkdownRemark(\n    sort: { order: DESC, fields: [frontmatter___updatedDate] },\n    filter: {\n      frontmatter: { draft: { ne: true } },\n      fileAbsolutePath: { regex: "/blog/" }\n    },\n    limit: 10\n  ) {\n    totalCount\n    edges {\n      node {\n        excerpt\n        timeToRead\n        fields {\n          slug\n        }\n        frontmatter {\n          title\n          updatedDate(formatString: "DD MMMM, YYYY")\n          image {\n          \tchildren {\n              ... on ImageSharp {\n                fluid(maxWidth: 700, maxHeight: 100) {\n                  src\n                  srcSet\n                }\n              }\n            }\n          }\n          author {\n            id\n            avatar {\n              children {\n                ... on ImageSharp {\n                  fluid(maxWidth: 35, maxHeight: 35) {\n                    src\n                    srcSet\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n'], ['\nquery PageBlog {\n  # Get tags\n  tags: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}) {\n    group(field: frontmatter___tags) {\n      fieldValue\n      totalCount\n    }\n  }\n\n  # Get posts\n  posts: allMarkdownRemark(\n    sort: { order: DESC, fields: [frontmatter___updatedDate] },\n    filter: {\n      frontmatter: { draft: { ne: true } },\n      fileAbsolutePath: { regex: "/blog/" }\n    },\n    limit: 10\n  ) {\n    totalCount\n    edges {\n      node {\n        excerpt\n        timeToRead\n        fields {\n          slug\n        }\n        frontmatter {\n          title\n          updatedDate(formatString: "DD MMMM, YYYY")\n          image {\n          \tchildren {\n              ... on ImageSharp {\n                fluid(maxWidth: 700, maxHeight: 100) {\n                  src\n                  srcSet\n                }\n              }\n            }\n          }\n          author {\n            id\n            avatar {\n              children {\n                ... on ImageSharp {\n                  fluid(maxWidth: 35, maxHeight: 35) {\n                    src\n                    srcSet\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n'])));
let templateObject_1;
// # sourceMappingURL=blog.js.map
