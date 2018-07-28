"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var layout_1 = require("../components/layout");
var gatsby_1 = require("gatsby");
var semantic_ui_react_1 = require("semantic-ui-react");
var BlogTitle_1 = require("../components/molecules/BlogTitle/BlogTitle");
var PostList_1 = require("../components/molecules/PostList/PostList");
var TagsCard_1 = require("../components/molecules/TagsCard/TagsCard");
var BlogPagination_1 = require("../components/molecules/BlogPagination/BlogPagination");
var functions_1 = require("../functions");
var Blog = /** @class */ (function (_super) {
    __extends(Blog, _super);
    function Blog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Blog.prototype.render = function () {
        var props = this.props;
        var tags = props.data.tags.group; // Check Component types
        var postsQuery = props.data.posts.edges; // Need to have null state
        var pathname = props.location.pathname;
        var pageCount = Math.ceil(props.data.posts.totalCount / 10);
        var posts = postsQuery.map(functions_1.createPostList);
        return (React.createElement(layout_1.default, { location: props.location },
            React.createElement(semantic_ui_react_1.Container, null,
                React.createElement(BlogTitle_1.default, null),
                React.createElement(semantic_ui_react_1.Segment, { vertical: true },
                    React.createElement(semantic_ui_react_1.Grid, { padded: true, style: { justifyContent: "space-around" } },
                        React.createElement("div", { style: { maxWidth: 600 } },
                            React.createElement(PostList_1.default, { posts: posts }),
                            React.createElement(semantic_ui_react_1.Segment, { vertical: true, textAlign: "center" },
                                React.createElement(BlogPagination_1.default, { Link: gatsby_1.Link, pathname: pathname, pageCount: pageCount }))),
                        React.createElement("div", null,
                            React.createElement(TagsCard_1.default, { Link: gatsby_1.Link, tags: tags, tag: props.pageContext.tag })))))));
    };
    return Blog;
}(React.Component));
exports.default = Blog;
;
// TODO why is this being used when we have it in the blog-page as well.
exports.pageQuery = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query PageBlog {\n        # Get tags\n        tags: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}) {\n            group(field: frontmatter___tags) {\n                fieldValue\n                totalCount\n            }\n        }\n\n        # Get posts\n        posts: allMarkdownRemark(\n            sort: { order: DESC, fields: [frontmatter___updatedDate] },\n            filter: {\n                frontmatter: { draft: { ne: true } },\n                fileAbsolutePath: { regex: \"/blog/\" }\n            },\n            limit: 10\n        ) {\n            totalCount\n            edges {\n                node {\n                    excerpt\n                    timeToRead\n                    fields {\n                        slug\n                    }\n                    frontmatter {\n                        title\n                        updatedDate(formatString: \"DD MMMM, YYYY\")\n                        image {\n                            children {\n                                ... on ImageSharp {\n                                    fluid(maxWidth: 700, maxHeight: 100) {\n                                        src\n                                        srcSet\n                                    }\n                                }\n                            }\n                        }\n                        author {\n                            id\n                            avatar {\n                                children {\n                                    ... on ImageSharp {\n                                        fluid(maxWidth: 35, maxHeight: 35) {\n                                            src\n                                            srcSet\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n"], ["\n    query PageBlog {\n        # Get tags\n        tags: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}) {\n            group(field: frontmatter___tags) {\n                fieldValue\n                totalCount\n            }\n        }\n\n        # Get posts\n        posts: allMarkdownRemark(\n            sort: { order: DESC, fields: [frontmatter___updatedDate] },\n            filter: {\n                frontmatter: { draft: { ne: true } },\n                fileAbsolutePath: { regex: \"/blog/\" }\n            },\n            limit: 10\n        ) {\n            totalCount\n            edges {\n                node {\n                    excerpt\n                    timeToRead\n                    fields {\n                        slug\n                    }\n                    frontmatter {\n                        title\n                        updatedDate(formatString: \"DD MMMM, YYYY\")\n                        image {\n                            children {\n                                ... on ImageSharp {\n                                    fluid(maxWidth: 700, maxHeight: 100) {\n                                        src\n                                        srcSet\n                                    }\n                                }\n                            }\n                        }\n                        author {\n                            id\n                            avatar {\n                                children {\n                                    ... on ImageSharp {\n                                        fluid(maxWidth: 35, maxHeight: 35) {\n                                            src\n                                            srcSet\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n"])));
var templateObject_1;
//# sourceMappingURL=blog.js.map