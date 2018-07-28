import * as React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import { Grid, Container, Segment } from "semantic-ui-react";
import { MarkdownRemarkConnection } from "../graphql-types";
import { Posts } from "../react-types";
import BlogTitle from "../components/molecules/BlogTitle/BlogTitle";
import PostList from "../components/molecules/PostList/PostList";
import TagsCard from "../components/molecules/TagsCard/TagsCard";
import BlogPagination from "../components/molecules/BlogPagination/BlogPagination";
import {createPostList} from "../functions";


interface BlogProps {
    data: {
        tags: MarkdownRemarkConnection;
        posts: MarkdownRemarkConnection;
    };
    pageContext: {
        tag?: string; // only set into `templates/tags-pages.tsx`
    };
    location: {
        pathname: string;
    };
}

export default class Blog extends React.Component<BlogProps> {
    render() {
        const props = this.props;
        const tags = props.data.tags.group; // Check Component types
        const postsQuery = props.data.posts.edges; // Need to have null state
        const { pathname } = props.location;
        const pageCount = Math.ceil(props.data.posts.totalCount / 10);

        const posts: Posts = postsQuery.map(createPostList);
        return (
            <Layout location={props.location}>
                <Container>
                    {/* Title */}
                    <BlogTitle />

                    {/* Content */}
                    <Segment vertical>
                        <Grid padded style={{ justifyContent: "space-around" }}>
                            <div style={{ maxWidth: 600 }}>
                                <PostList posts={posts} />
                                <Segment vertical textAlign="center">
                                    <BlogPagination Link={Link} pathname={pathname} pageCount={pageCount} />
                                </Segment>
                            </div>
                            <div>
                                <TagsCard Link={Link} tags={tags} tag={props.pageContext.tag} />
                            </div>
                        </Grid>
                    </Segment>
                </Container>
            </Layout>
        );
    }
};

// TODO why is this being used when we have it in the blog-page as well.

export const pageQuery = graphql`
    query PageBlog {
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
                frontmatter: { draft: { ne: true } },
                fileAbsolutePath: { regex: "/blog/" }
            },
            limit: 10
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
