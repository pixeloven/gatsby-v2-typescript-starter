import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { Grid, Card, Container, Segment, Comment } from "semantic-ui-react";
import { MarkdownRemarkConnection, ImageSharp } from "../graphql-types";
import BlogTitle from "../components/BlogTitle";
import TagsCard from "../components/TagsCard/TagsCard";
import BlogPagination from "../components/BlogPagination/BlogPagination";
import { get } from "lodash";

import PageBlogQuery from "./blog.graphql";

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

// TODO should extend Component or PureComponent
export const Blog = (props: BlogProps) => {
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

                const extra = (
                    <Comment.Group>
                        <Comment>
                            <Comment.Avatar
                                src={avatar.fluid.src}
                                srcSet={avatar.fluid.srcSet}
                            />
                            <Comment.Content>
                                <Comment.Author style={{ fontWeight: 400 }}>
                                    {frontmatter.author.id}
                                </Comment.Author>
                                <Comment.Metadata style={{ margin: 0 }}>
                                    {frontmatter.updatedDate} - {timeToRead} min read
                                </Comment.Metadata>
                            </Comment.Content>
                        </Comment>
                    </Comment.Group>
                );

                const description = (
                    <Card.Description>
                        {excerpt}
                        <br />
                        <Link to={slug}>Read more…</Link>
                    </Card.Description>
                );

                return (
                    <Card key={slug}
                          fluid
                          image={cover}
                          header={frontmatter.title}
                          extra={extra}
                          description={description}
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

export default Blog;
