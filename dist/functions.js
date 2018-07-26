"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
// TODO move this stuff to Models/
/**
 * Create post list from postQuery
 * @param {{node: MarkdownRemark}} postQuery
 * @returns {Post}
 */
function createPostList(postQuery) {
    var _a = postQuery.node, frontmatter = _a.frontmatter, timeToRead = _a.timeToRead, slug = _a.fields.slug, excerpt = _a.excerpt;
    var avatar = frontmatter.author.avatar.children[0];
    var cover = lodash_1.get(frontmatter, "image.children.0.fluid", {});
    var title = frontmatter.title, author = frontmatter.author, updatedDate = frontmatter.updatedDate;
    return {
        avatar: avatar,
        cover: cover,
        author: author,
        title: title,
        excerpt: excerpt,
        slug: slug,
        meta: {
            updatedDate: updatedDate,
            timeToRead: timeToRead,
        },
    };
}
exports.createPostList = createPostList;
;
//# sourceMappingURL=functions.js.map