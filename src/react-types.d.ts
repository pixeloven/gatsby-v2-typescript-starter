import {
    ImageSharp
} from "./graphql-types";

export type Post = {
    avatar?: ImageSharp;
    cover: string;
    title: string;
    excerpt: string,
    slug: string,
    author: {
        id: string;
    };
    meta: {
        updatedDate: string,
        timeToRead: number,
    };
};

export type Posts = Array<Post>;
