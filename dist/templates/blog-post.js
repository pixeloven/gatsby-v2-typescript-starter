'use strict';
const __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, 'raw', {value: raw});
  } else {
    cooked.raw = raw;
  }
  return cooked;
};
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
const gatsby_1 = require('gatsby');
const lodash_1 = require('lodash');
const semantic_ui_react_1 = require('semantic-ui-react');
const disqus_react_1 = require('disqus-react');
const BlogTitle_1 = require('../components/BlogTitle');

exports.default = (function (props) {
  let _a = props.data.post,
    frontmatter = _a.frontmatter,
    html = _a.html,
    timeToRead = _a.timeToRead;
  const avatar = frontmatter.author.avatar.children[0];
  const tags = props.data.post.frontmatter.tags
    .map(tag => {
      return React.createElement(semantic_ui_react_1.Label, {key: tag},
        React.createElement(gatsby_1.Link, {to: '/blog/tags/' + tag + '/'}, tag));
    });
  const recents = props.data.recents.edges
    .map(_a => {
      const node = _a.node;
      const recentAvatar = node.frontmatter.author.avatar.children[0];
      const recentCover = lodash_1.get(node, 'frontmatter.image.children.0.fluid', {});
      const extra = (React.createElement(semantic_ui_react_1.Comment.Group, null,
        React.createElement(semantic_ui_react_1.Comment, null,
          React.createElement(semantic_ui_react_1.Comment.Avatar, {src: recentAvatar.fluid.src, srcSet: recentAvatar.fluid.srcSet}),
          React.createElement(semantic_ui_react_1.Comment.Content, null,
            React.createElement(semantic_ui_react_1.Comment.Author, {style: {fontWeight: 400}}, node.frontmatter.author.id),
            React.createElement(semantic_ui_react_1.Comment.Metadata, {style: {margin: 0}},
              node.timeToRead,
              ' min read')))));
      return (React.createElement('div', {key: node.fields.slug, style: {paddingBottom: '1em'}},
        React.createElement(semantic_ui_react_1.Card, {as: gatsby_1.Link, to: node.fields.slug, image: recentCover, header: node.frontmatter.title, extra})));
    });
  const cover = lodash_1.get(frontmatter, 'image.children.0.fluid', {});
  return (React.createElement(semantic_ui_react_1.Container, null,
    React.createElement(BlogTitle_1.default, null),
    React.createElement(semantic_ui_react_1.Segment, {vertical: true, style: {border: 'none'}},
      React.createElement(semantic_ui_react_1.Item.Group, null,
        React.createElement(semantic_ui_react_1.Item, null,
          React.createElement(semantic_ui_react_1.Item.Image, {size: 'tiny', shape: 'circular', src: avatar.fluid.src, srcSet: avatar.fluid.srcSet}),
          React.createElement(semantic_ui_react_1.Item.Content, null,
            React.createElement(semantic_ui_react_1.Item.Description, null, frontmatter.author.id),
            React.createElement(semantic_ui_react_1.Item.Meta, null, frontmatter.author.bio),
            React.createElement(semantic_ui_react_1.Item.Extra, null,
              frontmatter.updatedDate,
              ' - ',
              timeToRead,
              ' min read')))),
      React.createElement(semantic_ui_react_1.Header, {as: 'h1'}, frontmatter.title)),
    React.createElement(semantic_ui_react_1.Image, __assign({}, cover, {fluid: true})),
    React.createElement(semantic_ui_react_1.Segment, {vertical: true, style: {border: 'none'}, dangerouslySetInnerHTML: {
      __html: html
    }}),
    React.createElement(semantic_ui_react_1.Segment, {vertical: true}, tags),
    props.data.site &&
            props.data.site.siteMetadata &&
            props.data.site.siteMetadata.disqus &&
            React.createElement(semantic_ui_react_1.Segment, {vertical: true},
              React.createElement(disqus_react_1.DiscussionEmbed, {shortname: props.data.site.siteMetadata.disqus})),
    React.createElement(semantic_ui_react_1.Segment, {vertical: true},
      React.createElement(semantic_ui_react_1.Grid, {padded: true, centered: true}, recents))));
});
exports.pageQuery = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(['\n  query TemplateBlogPost($slug: String!) {\n  site: site {\n    siteMetadata {\n        disqus\n    }\n  }\n  post: markdownRemark(fields: {slug: {eq: $slug}}) {\n    html\n    excerpt\n    timeToRead\n    fields {\n      slug\n    }\n    frontmatter {\n      tags\n      author {\n        id\n        bio\n        twitter\n        avatar {\n          children {\n            ... on ImageSharp {\n              fluid(maxWidth: 80, maxHeight: 80, quality: 100) {\n                src\n                srcSet\n              }\n            }\n          }\n        }\n      }\n      title\n      updatedDate(formatString: "MMM D, YYYY")\n      image {\n        children {\n          ... on ImageSharp {\n            fluid(maxWidth: 900, maxHeight: 300, quality: 100) {\n              src\n              srcSet\n            }\n          }\n        }\n      }\n    }\n  }\n  recents: allMarkdownRemark(\n    filter: {\n      fields: {slug: {ne: $slug}}\n      frontmatter: {draft: {ne: true}},\n      fileAbsolutePath: {regex: "/blog/"},\n    },\n    sort: {order: DESC, fields: [frontmatter___updatedDate]},\n    limit: 4\n  ) {\n    edges {\n      node {\n        fields {\n          slug\n        }\n        timeToRead\n        frontmatter {\n          title\n          image {\n            children {\n              ... on ImageSharp {\n                fluid(maxWidth: 300, maxHeight: 100) {\n                  src\n                  srcSet\n                }\n              }\n            }\n          }\n          author {\n            id\n            avatar {\n              children {\n                ... on ImageSharp {\n                  fluid(maxWidth: 36, maxHeight: 36) {\n                    src\n                    srcSet\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n'], ['\n  query TemplateBlogPost($slug: String!) {\n  site: site {\n    siteMetadata {\n        disqus\n    }\n  }\n  post: markdownRemark(fields: {slug: {eq: $slug}}) {\n    html\n    excerpt\n    timeToRead\n    fields {\n      slug\n    }\n    frontmatter {\n      tags\n      author {\n        id\n        bio\n        twitter\n        avatar {\n          children {\n            ... on ImageSharp {\n              fluid(maxWidth: 80, maxHeight: 80, quality: 100) {\n                src\n                srcSet\n              }\n            }\n          }\n        }\n      }\n      title\n      updatedDate(formatString: "MMM D, YYYY")\n      image {\n        children {\n          ... on ImageSharp {\n            fluid(maxWidth: 900, maxHeight: 300, quality: 100) {\n              src\n              srcSet\n            }\n          }\n        }\n      }\n    }\n  }\n  recents: allMarkdownRemark(\n    filter: {\n      fields: {slug: {ne: $slug}}\n      frontmatter: {draft: {ne: true}},\n      fileAbsolutePath: {regex: "/blog/"},\n    },\n    sort: {order: DESC, fields: [frontmatter___updatedDate]},\n    limit: 4\n  ) {\n    edges {\n      node {\n        fields {\n          slug\n        }\n        timeToRead\n        frontmatter {\n          title\n          image {\n            children {\n              ... on ImageSharp {\n                fluid(maxWidth: 300, maxHeight: 100) {\n                  src\n                  srcSet\n                }\n              }\n            }\n          }\n          author {\n            id\n            avatar {\n              children {\n                ... on ImageSharp {\n                  fluid(maxWidth: 36, maxHeight: 36) {\n                    src\n                    srcSet\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n'])));
let templateObject_1;
// # sourceMappingURL=blog-post.js.map
