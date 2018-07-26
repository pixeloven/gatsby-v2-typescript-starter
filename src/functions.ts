import {ImageSharp, MarkdownRemark} from "./graphql-types";
import {Post} from "./react-types";
import { get } from "lodash";

// TODO move this stuff to Models/

/**
 * Create post list from postQuery
 * @param {{node: MarkdownRemark}} postQuery
 * @returns {Post}
 */
export const createPostList = function(postQuery: {node: MarkdownRemark}) : Post {
    const {frontmatter, timeToRead, fields: {slug}, excerpt} = postQuery.node;
    const avatar = frontmatter.author.avatar.children[0] as ImageSharp;
    const cover = get(frontmatter, "image.children.0.fluid", {});
    const {title, author, updatedDate} = frontmatter;
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
    }
};
