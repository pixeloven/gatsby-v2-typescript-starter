import * as React from "react";
import { Container } from "semantic-ui-react";
import { Post, Posts } from "../../../react-types";
import PostCard from "../PostCard/PostCard";

interface PostListProps extends React.HTMLProps<HTMLDivElement>  {
    posts: Posts;
}

export default class PostList extends React.PureComponent<PostListProps> {
    render() {
        const { posts } = this.props;
        return (
            <Container>
                {posts.map((post: Post, index: number) => {
                    return (
                        <PostCard key={index} post={post} />
                    );
                })}
            </Container>
        );
    }
}
