"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var layout_1 = require("../components/layout");
var gatsby_1 = require("gatsby");
var semantic_ui_react_1 = require("semantic-ui-react");
var BlogTitle_1 = require("../components/BlogTitle");
var TagsCard_1 = require("../components/TagsCard/TagsCard");
var BlogPagination_1 = require("../components/BlogPagination/BlogPagination");
var lodash_1 = require("lodash");
var blog_graphql_1 = require("./blog.graphql");
exports.pageQuery = blog_graphql_1.default;
// TODO should extend Component or PureComponent
exports.Blog = function (props) {
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
        var extra = (React.createElement(semantic_ui_react_1.Comment.Group, null,
            React.createElement(semantic_ui_react_1.Comment, null,
                React.createElement(semantic_ui_react_1.Comment.Avatar, { src: avatar.fluid.src, srcSet: avatar.fluid.srcSet }),
                React.createElement(semantic_ui_react_1.Comment.Content, null,
                    React.createElement(semantic_ui_react_1.Comment.Author, { style: { fontWeight: 400 } }, frontmatter.author.id),
                    React.createElement(semantic_ui_react_1.Comment.Metadata, { style: { margin: 0 } },
                        frontmatter.updatedDate,
                        " - ",
                        timeToRead,
                        " min read")))));
        var description = (React.createElement(semantic_ui_react_1.Card.Description, null,
            excerpt,
            React.createElement("br", null),
            React.createElement(gatsby_1.Link, { to: slug }, "Read more\u2026")));
        return (React.createElement(semantic_ui_react_1.Card, { key: slug, fluid: true, image: cover, header: frontmatter.title, extra: extra, description: description }));
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
};
exports.default = exports.Blog;
//# sourceMappingURL=blog.js.map