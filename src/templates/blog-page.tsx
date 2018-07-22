import * as React from "react";
import { graphql } from "gatsby";

import Blog from "../pages/blog";

export default Blog;

export const pageQuery = graphql`
query TemplateBlogPage($skip: Int) {
  # Get tags
  tags: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }

  # Get posts
  posts: allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___updatedDate] },
    filter: {
      frontmatter: {
        draft: { ne: true }
      },
      fileAbsolutePath: { regex: "/blog/" }
    }
    limit: 10,
    skip: $skip
  ) {
    totalCount
    edges {
      node {
        excerpt
        timeToRead
        fields {
          slug
        }
        frontmatter {
          title
          updatedDate(formatString: "DD MMMM, YYYY")
          image {
          	children {
              ... on ImageSharp {
                fluid(maxWidth: 700, maxHeight: 100) {
                  src
                  srcSet
                }
              }
            }
          }
          author {
            id
            avatar {
              children {
                ... on ImageSharp {
                  fluid(maxWidth: 35, maxHeight: 35) {
                    src
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
