import * as React from "react";
import { Link, graphql } from "gatsby";
import { get } from "lodash";
import { Header, Container, Segment, Label, Grid, Card, Image, Item, Comment } from "semantic-ui-react";
import { MarkdownRemark, ImageSharp, MarkdownRemarkConnection, Site } from "../graphql-types";
import BlogTitle from "../components/molecules/BlogTitle/BlogTitle";
import { DiscussionEmbed } from "disqus-react"; // TODO Broken or do I want?

interface BlogPostProps {
    data: {
        post: MarkdownRemark;
        recents: MarkdownRemarkConnection;
        site: Site
    };
}

export default (props: BlogPostProps) => {
    const { frontmatter, html, timeToRead } = props.data.post;
    const avatar = frontmatter.author.avatar.children[0] as ImageSharp;

    const tags = props.data.post.frontmatter.tags
        .map((tag) => <Label key={tag}><Link to={`/blog/tags/${tag}/`}>{tag}</Link></Label>);

    const recents = props.data.recents.edges
        .map(({ node }) => {
            const recentAvatar = node.frontmatter.author.avatar.children[0] as ImageSharp;
            const recentCover = get(node, "frontmatter.image.children.0.fluid", {});
            const extra = (
                <Comment.Group>
                    <Comment>
                        <Comment.Avatar
                            src={recentAvatar.fluid.src}
                            srcSet={recentAvatar.fluid.srcSet}
                        />
                        <Comment.Content>
                            <Comment.Author style={{ fontWeight: 400 }}>
                                {node.frontmatter.author.id}
                            </Comment.Author>
                            <Comment.Metadata style={{ margin: 0 }}>
                                {node.timeToRead} min read
                            </Comment.Metadata>
                        </Comment.Content>
                    </Comment>
                </Comment.Group>
            );

            return (
                <div key={node.fields.slug} style={{ paddingBottom: "1em" }}>
                    <Card as={Link}
                          to={node.fields.slug}
                          image={recentCover}
                          header={node.frontmatter.title}
                          extra={extra}
                    />
                </div>
            );
        });

    const cover = get(frontmatter, "image.children.0.fluid", {} );
    return (
        <Container>
            <BlogTitle />
            <Segment vertical style={{ border: "none" }}>
                <Item.Group>
                    <Item>
                        <Item.Image size="tiny" shape="circular"
                                    src={avatar.fluid.src}
                                    srcSet={avatar.fluid.srcSet}
                        />
                        <Item.Content>
                            <Item.Description>{frontmatter.author.id}</Item.Description>
                            <Item.Meta>{frontmatter.author.bio}</Item.Meta>
                            <Item.Extra>{frontmatter.updatedDate} - {timeToRead} min read</Item.Extra>
                        </Item.Content>
                    </Item>
                </Item.Group>
                <Header as="h1">{frontmatter.title}</Header>
            </Segment>
            <Image
                {...cover}
                fluid
            />
            <Segment vertical
                     style={{ border: "none" }}
                     dangerouslySetInnerHTML={{
                         __html: html,
                     }}
            />
            <Segment vertical>
                {tags}
            </Segment>
            {props.data.site
            && props.data.site.siteMetadata
            && props.data.site.siteMetadata.disqus
            && <Segment vertical>
                {/*<DiscussionEmbed shortname={props.data.site.siteMetadata.disqus}/>*/}
            </Segment>
            }
            <Segment vertical>
                <Grid padded centered>
                    {recents}
                </Grid>
            </Segment>
        </Container>
    );
};

export const pageQuery = graphql`
    query TemplateBlogPost($slug: String!) {
        site: site {
            siteMetadata {
                disqus
            }
        }
        post: markdownRemark(fields: {slug: {eq: $slug}}) {
            html
            excerpt
            timeToRead
            fields {
                slug
            }
            frontmatter {
                tags
                author {
                    id
                    bio
                    twitter
                    avatar {
                        children {
                            ... on ImageSharp {
                                fluid(maxWidth: 80, maxHeight: 80, quality: 100) {
                                    src
                                    srcSet
                                }
                            }
                        }
                    }
                }
                title
                updatedDate(formatString: "MMM D, YYYY")
                image {
                    children {
                        ... on ImageSharp {
                            fluid(maxWidth: 900, maxHeight: 300, quality: 100) {
                                src
                                srcSet
                            }
                        }
                    }
                }
            }
        }
        recents: allMarkdownRemark(
            filter: {
                fields: {slug: {ne: $slug}}
                frontmatter: {draft: {ne: true}},
                fileAbsolutePath: {regex: "/blog/"},
            },
            sort: {order: DESC, fields: [frontmatter___updatedDate]},
            limit: 4
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    timeToRead
                    frontmatter {
                        title
                        image {
                            children {
                                ... on ImageSharp {
                                    fluid(maxWidth: 300, maxHeight: 100) {
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
                                        fluid(maxWidth: 36, maxHeight: 36) {
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
