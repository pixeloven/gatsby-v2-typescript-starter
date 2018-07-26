'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const lodash_1 = require('lodash');
// TODO move this stuff to Models/
/**
 * Create post list from postQuery
 * @param {{node: MarkdownRemark}} postQuery
 * @returns {Post}
 */
function createPostList(postQuery) {
  let _a = postQuery.node,
    frontmatter = _a.frontmatter,
    timeToRead = _a.timeToRead,
    slug = _a.fields.slug,
    excerpt = _a.excerpt;
  const avatar = frontmatter.author.avatar.children[0];
  const cover = lodash_1.get(frontmatter, 'image.children.0.fluid', {});
  let title = frontmatter.title,
    author = frontmatter.author,
    updatedDate = frontmatter.updatedDate;
  return {
    avatar,
    cover,
    author,
    title,
    excerpt,
    slug,
    meta: {
      updatedDate,
      timeToRead
    }
  };
}
exports.createPostList = createPostList;

// # sourceMappingURL=functions.js.map
