import * as React from "react";
import { Link } from "gatsby";
import { Card, Comment } from "semantic-ui-react";
import { ImageSharp } from "../../graphql-types";

interface PreviewPostCardProps extends React.HTMLProps<HTMLDivElement> {
    avatar?: ImageSharp;
    cover: string;
    title: string;
    author: {
        id: string;
    };
    meta: {
        updatedDate: string,
        timeToRead: number,
    };
    post: {
        excerpt: string,
        slug: string,
    };
}
// TODO break into smaller parts
export const PreviewPostCard = (props: PreviewPostCardProps) => {
    const extra = (
        <Comment.Group>
            <Comment>
                {!!props.avatar &&
                <Comment.Avatar
                    src={props.avatar.fluid.src}
                    srcSet={props.avatar.fluid.srcSet}
                />}
                <Comment.Content>
                    <Comment.Author style={{ fontWeight: 400 }}>
                        {props.author.id}
                    </Comment.Author>
                    <Comment.Metadata style={{ margin: 0 }}>
                        {props.meta.updatedDate} - {props.meta.timeToRead} min read
                    </Comment.Metadata>
                </Comment.Content>
            </Comment>
        </Comment.Group>
    );

    const description = (
        <Card.Description>
            {props.post.excerpt}
            <br />
            <Link to={props.post.slug}>Read more…</Link>
        </Card.Description>
    );

    return (
        <Card key={props.post.slug}
              fluid
              image={props.cover}
              header={props.title}
              extra={extra}
              description={description}
        />
    );
};

export default PreviewPostCard;
