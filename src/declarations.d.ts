// package.json
declare module "*/package.json" {
    export const version: string;
    export const author: string;
}

declare const graphql: (query: TemplateStringsArray) => void;

declare module "disqus-react" {
    export class DiscussionEmbed extends React.Component<{
        shortname: string,
    }, {}> { }
}

declare module '*.graphql' {
    import {DocumentNode} from 'graphql';

    const value: DocumentNode;
    export default value;
}

declare module '*.gql' {
    import {DocumentNode} from 'graphql';

    const value: DocumentNode;
    export default value;
}
