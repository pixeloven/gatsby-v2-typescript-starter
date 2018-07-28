var path = require('path');
var slash = require('slash');
var _a = require('lodash'), kebabCase = _a.kebabCase, uniq = _a.uniq, get = _a.get, compact = _a.compact, times = _a.times;
// Don't forget to update hard code values into:
// - `templates/blog-page.tsx:23`
// - `pages/blog.tsx:26`
// - `pages/blog.tsx:121`
var POSTS_PER_PAGE = 10;
var cleanArray = function (arr) { return compact(uniq(arr)); };
// // Add Gatsby's extract-graphql Babel plugin (we'll chain it with babel-loader)
// const extractQueryPlugin = path.resolve(
//   __dirname,
//   `node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js`
// );
// Temporary workaround to ensure Gatsby builds minified, production build of React.
// https://github.com/briangeb/gatsby-starter/issues/39#issuecomment-343647558
exports.onCreateWebpackConfig = function (_a) {
    var stage = _a.stage, actions = _a.actions;
    switch (stage) {
        case "build-javascript":
            actions.setWebpackConfig({
                module: {
                    rules: [
                        {
                            test: /\.tsx/,
                            use: [
                                // `babel-loader?${JSON.stringify({presets: ['babel-preset-env'], plugins: [extractQueryPlugin]})}`,
                                'ts-loader'
                            ]
                        }
                    ]
                }
            });
    }
    // TODO https://github.com/gatsbyjs/gatsby/issues/5520
    //
    // if (stage === 'build-javascript') {
    //     config.loader('typescript', {
    //         test: /\.tsx?$/,
    //         loaders: [
    //             `babel-loader?${JSON.stringify({presets: ['babel-preset-env'], plugins: [extractQueryPlugin]})}`,
    //             'ts-loader'
    //         ]
    //     });
    // }
};
// Create slugs for files.
// Slug will used for blog page path.
exports.onCreateNode = function (_a) {
    var node = _a.node, actions = _a.actions, getNode = _a.getNode;
    var createNodeField = actions.createNodeField;
    var slug;
    switch (node.internal.type) {
        case "MarkdownRemark":
            var fileNode = getNode(node.parent);
            var _b = fileNode.relativePath.split('/'), basePath = _b[0], name_1 = _b[1];
            slug = "/" + basePath + "/" + name_1 + "/";
            break;
    }
    if (slug) {
        createNodeField({ node: node, name: "slug", value: slug });
    }
};
// TODO remove query in blog.tsx might need to be above ^
// Implement the Gatsby API `createPages`.
// This is called after the Gatsby bootstrap is finished
// so you have access to any information necessary to
// programatically create pages.
exports.createPages = function (_a) {
    var graphql = _a.graphql, actions = _a.actions;
    var createPage = actions.createPage;
    return new Promise(function (resolve, reject) {
        var templates = ['blogPost', 'tagsPage', 'blogPage']
            .reduce(function (mem, templateName) {
            var _a;
            return Object.assign({}, mem, (_a = {}, _a[templateName] = path.resolve("src/templates/" + kebabCase(templateName) + ".tsx"), _a));
        }, {});
        graphql("\n            {\n              posts: allMarkdownRemark {\n                edges {\n                  node {\n                    fields {\n                      slug\n                    }\n                    frontmatter {\n                      tags\n                    }\n                  }\n                }\n              }\n            }\n          ").then(function (result) {
            if (result.errors) {
                return reject(result.errors);
            }
            var posts = result.data.posts.edges.map(function (p) { return p.node; });
            // Create blog pages
            posts
                .filter(function (post) { return post.fields.slug.startsWith('/blog/'); })
                .forEach(function (post) {
                createPage({
                    path: post.fields.slug,
                    component: slash(templates.blogPost),
                    context: {
                        slug: post.fields.slug
                    }
                });
            });
            // Create tags pages
            posts
                .reduce(function (mem, post) {
                return cleanArray(mem.concat(get(post, 'frontmatter.tags')));
            }, [])
                .forEach(function (tag) {
                createPage({
                    path: "/blog/tags/" + kebabCase(tag) + "/",
                    component: slash(templates.tagsPage),
                    context: {
                        tag: tag
                    }
                });
            });
            // Create blog pagination
            var pageCount = Math.ceil(posts.length / POSTS_PER_PAGE);
            times(pageCount, function (index) {
                createPage({
                    path: "/blog/page/" + (index + 1) + "/",
                    component: slash(templates.blogPage),
                    context: {
                        skip: index * POSTS_PER_PAGE
                    }
                });
            });
            resolve();
        });
    });
};
//# sourceMappingURL=gatsby-node.js.map