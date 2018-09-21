import * as React from "react";

interface HtmlProps {
    htmlAttributes: any; // Object
    headComponents: any; // Array
    bodyAttributes: any; // Object
    preBodyComponents: any; // Array
    body: string;
    postBodyComponents: any; // Array
}

// TODO remove .json for graphql
// TODO create a publish cmd that can out commit? And perhaps one that can commit to specific branch for github support
// TODO re-generate  graphql types?
// TODO need to document what the expect image size for blog posts is
// TODO can generators be typescript?
// TODO Update README with tools, generators
// TODO create .env for things like supporting comments and other features.
// TODO update home page to look like semantic ui's.
// TODO update blog to look more modern
// TODO https://github.com/gatsbyjs/gatsby-starter-blog model starter after that but also make it more modern with semantic design
// TODO react-helmet was used here but not sure it is needed anymore
// TODO also might not need this file anymore since this is just a copy of gatsby's
// TODO add       "indent": ["error", 4]
// TODO set react version for xo
// TODO get disqus working again or remove it
// TODO if we don't need this below then remove helmet???
export default class HTML extends React.Component<HtmlProps> {
    render() {
        return (
            <html {...this.props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                {this.props.headComponents}
            </head>
            <body {...this.props.bodyAttributes}>
            {this.props.preBodyComponents}
            <div
                key={`body`}
                id="___gatsby"
                dangerouslySetInnerHTML={{ __html: this.props.body }}
            />
            {this.props.postBodyComponents}
            </body>
            </html>
        );
    }
}
