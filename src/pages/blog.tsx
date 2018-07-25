import * as React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import { Grid, Card, Container, Segment, Comment } from "semantic-ui-react";
import { MarkdownRemarkConnection, ImageSharp } from "../graphql-types";
import BlogTitle from "../components/BlogTitle";
import PreviewPostCard from "../components/PreviewPostCard/PreviewPostCard";
import TagsCard from "../components/TagsCard/TagsCard";
import BlogPagination from "../components/BlogPagination/BlogPagination";
import { get } from "lodash";

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

export default (props: BlogProps) => {
    const tags = props.data.tags.group;
    const posts = props.data.posts.edges;
    const { pathname } = props.location;
    const pageCount = Math.ceil(props.data.posts.totalCount / 10);

    // TODO export posts in a proper component
    const Posts = (
        <Container>
            {posts.map(({ node }) => {
                const { frontmatter, timeToRead, fields: { slug }, excerpt } = node;
                const avatar = frontmatter.author.avatar.children[0] as ImageSharp;
                const cover = get(frontmatter, "image.children.0.fluid", {});
                const {title, author, updatedDate} = frontmatter;
                return (
                    <PreviewPostCard
                        avatar={avatar}
                        cover={cover}
                        title={title}
                        author={author}
                        meta={{
                            updatedDate,
                            timeToRead,
                        }}
                        post={{
                            excerpt,
                            slug,
                        }}
                    />
                );
            })}
        </Container>
    );

    return (
        <Layout location={props.location}>
            <Container>
                {/* Title */}
                <BlogTitle />

                {/* Content */}
                <Segment vertical>
                    <Grid padded style={{ justifyContent: "space-around" }}>
                        <div style={{ maxWidth: 600 }}>
                            {Posts}
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
