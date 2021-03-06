const path = require('path');
const slash = require('slash');
const {kebabCase, uniq, get, compact, times} = require('lodash');

// Don't forget to update hard code values into:
// - `templates/blog-page.tsx:23`
// - `pages/blog.tsx:26`
// - `pages/blog.tsx:121`
const POSTS_PER_PAGE = 10;
const cleanArray = arr => compact(uniq(arr));

// // Add Gatsby's extract-graphql Babel plugin (we'll chain it with babel-loader)
// const extractQueryPlugin = path.resolve(
//   __dirname,
//   `node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js`
// );

// Temporary workaround to ensure Gatsby builds minified, production build of React.
// https://github.com/briangeb/gatsby-starter/issues/39#issuecomment-343647558
exports.onCreateWebpackConfig = ({
  stage,
  actions
}) => {
  switch (stage) {
    case `build-javascript`:
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
exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions;
  let slug;
  switch (node.internal.type) {
    case `MarkdownRemark`:
      const fileNode = getNode(node.parent);
      const [basePath, name] = fileNode.relativePath.split('/');
      slug = `/${basePath}/${name}/`;
      break;
  }
  if (slug) {
    createNodeField({node, name: `slug`, value: slug});
  }
};

// TODO remove query in blog.tsx might need to be above ^
// Implement the Gatsby API `createPages`.
// This is called after the Gatsby bootstrap is finished
// so you have access to any information necessary to
// programatically create pages.
exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;

  return new Promise((resolve, reject) => {
    const templates = ['blogPost', 'tagsPage', 'blogPage']
      .reduce((mem, templateName) => {
        return Object.assign({}, mem,
          {[templateName]: path.resolve(`src/templates/${kebabCase(templateName)}.tsx`)});
      }, {});

    graphql(
      `
            {
              posts: allMarkdownRemark {
                edges {
                  node {
                    fields {
                      slug
                    }
                    frontmatter {
                      tags
                    }
                  }
                }
              }
            }
          `
    ).then(result => {
      if (result.errors) {
        return reject(result.errors);
      }
      const posts = result.data.posts.edges.map(p => p.node);

      // Create blog pages
      posts
        .filter(post => post.fields.slug.startsWith('/blog/'))
        .forEach(post => {
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
        .reduce((mem, post) =>
          cleanArray(mem.concat(get(post, 'frontmatter.tags')))
          , [])
        .forEach(tag => {
          createPage({
            path: `/blog/tags/${kebabCase(tag)}/`,
            component: slash(templates.tagsPage),
            context: {
              tag
            }
          });
        });

      // Create blog pagination
      const pageCount = Math.ceil(posts.length / POSTS_PER_PAGE);
      times(pageCount, index => {
        createPage({
          path: `/blog/page/${index + 1}/`,
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
