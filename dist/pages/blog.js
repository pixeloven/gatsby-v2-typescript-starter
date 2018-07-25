"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var layout_1 = require("../components/layout");
var gatsby_1 = require("gatsby");
var semantic_ui_react_1 = require("semantic-ui-react");
var BlogTitle_1 = require("../components/BlogTitle");
var PreviewPostCard_1 = require("../components/PreviewPostCard/PreviewPostCard");
var TagsCard_1 = require("../components/TagsCard/TagsCard");
var BlogPagination_1 = require("../components/BlogPagination/BlogPagination");
var lodash_1 = require("lodash");
exports.default = (function (props) {
    var tags = props.data.tags.group;
    var posts = props.data.posts.edges;
    var pathname = props.location.pathname;
    var pageCount = Math.ceil(props.data.posts.totalCount / 10);
    // TODO export posts in a proper component
    var Posts = (React.createElement(semantic_ui_react_1.Container, null, posts.map(function (_a) {
        var node = _a.node;
        var frontmatter = node.frontmatter, timeToRead = node.timeToRead, slug = node.fields.slug, excerpt = node.excerpt;
        var avatar = frontmatter.author.avatar.children[0];
        var cover = lodash_1.get(frontmatter, "image.children.0.fluid", {});
        var title = frontmatter.title, author = frontmatter.author, updatedDate = frontmatter.updatedDate;
        return (React.createElement(PreviewPostCard_1.default, { avatar: avatar, cover: cover, title: title, author: author, meta: {
                updatedDate: updatedDate,
                timeToRead: timeToRead,
            }, post: {
                excerpt: excerpt,
                slug: slug,
            } }));
    })));
    return (React.createElement(layout_1.default, { location: props.location },
        React.createElement(semantic_ui_react_1.Container, null,
            React.createElement(BlogTitle_1.default, null),
            React.createElement(semantic_ui_react_1.Segment, { vertical: true },
                React.createElement(semantic_ui_react_1.Grid, { padded: true, style: { justifyContent: "space-around" } },
                    React.createElement("div", { style: { maxWidth: 600 } },
                        Posts,
                        React.createElement(semantic_ui_react_1.Segment, { vertical: true, textAlign: "center" },
                            React.createElement(BlogPagination_1.default, { Link: gatsby_1.Link, pathname: pathname, pageCount: pageCount }))),
                    React.createElement("div", null,
                        React.createElement(TagsCard_1.default, { Link: gatsby_1.Link, tags: tags, tag: props.pageContext.tag })))))));
});
// TODO why is this being used when we have it in the blog-page as well.
exports.pageQuery = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query PageBlog {\n        # Get tags\n        tags: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}) {\n            group(field: frontmatter___tags) {\n                fieldValue\n                totalCount\n            }\n        }\n\n        # Get posts\n        posts: allMarkdownRemark(\n            sort: { order: DESC, fields: [frontmatter___updatedDate] },\n            filter: {\n                frontmatter: { draft: { ne: true } },\n                fileAbsolutePath: { regex: \"/blog/\" }\n            },\n            limit: 10\n        ) {\n            totalCount\n            edges {\n                node {\n                    excerpt\n                    timeToRead\n                    fields {\n                        slug\n                    }\n                    frontmatter {\n                        title\n                        updatedDate(formatString: \"DD MMMM, YYYY\")\n                        image {\n                            children {\n                                ... on ImageSharp {\n                                    fluid(maxWidth: 700, maxHeight: 100) {\n                                        src\n                                        srcSet\n                                    }\n                                }\n                            }\n                        }\n                        author {\n                            id\n                            avatar {\n                                children {\n                                    ... on ImageSharp {\n                                        fluid(maxWidth: 35, maxHeight: 35) {\n                                            src\n                                            srcSet\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n"], ["\n    query PageBlog {\n        # Get tags\n        tags: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}) {\n            group(field: frontmatter___tags) {\n                fieldValue\n                totalCount\n            }\n        }\n\n        # Get posts\n        posts: allMarkdownRemark(\n            sort: { order: DESC, fields: [frontmatter___updatedDate] },\n            filter: {\n                frontmatter: { draft: { ne: true } },\n                fileAbsolutePath: { regex: \"/blog/\" }\n            },\n            limit: 10\n        ) {\n            totalCount\n            edges {\n                node {\n                    excerpt\n                    timeToRead\n                    fields {\n                        slug\n                    }\n                    frontmatter {\n                        title\n                        updatedDate(formatString: \"DD MMMM, YYYY\")\n                        image {\n                            children {\n                                ... on ImageSharp {\n                                    fluid(maxWidth: 700, maxHeight: 100) {\n                                        src\n                                        srcSet\n                                    }\n                                }\n                            }\n                        }\n                        author {\n                            id\n                            avatar {\n                                children {\n                                    ... on ImageSharp {\n                                        fluid(maxWidth: 35, maxHeight: 35) {\n                                            src\n                                            srcSet\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n"])));
var templateObject_1;
//# sourceMappingURL=blog.js.map