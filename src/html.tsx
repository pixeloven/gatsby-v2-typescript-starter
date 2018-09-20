import * as React from "react";

interface HtmlProps {
    htmlAttributes: any; // Object
    headComponents: any; // Array
    bodyAttributes: any; // Object
    preBodyComponents: any; // Array
    body: string;
    postBodyComponents: any; // Array
}

// TODO https://github.com/gatsbyjs/gatsby-starter-blog model starter after that but also make it more modern with semantic design
// TODO react-helmet was used here but not sure it is needed anymore
// TODO also might not need this file anymore since this is just a copy of gatsby's
// TODO add       "indent": ["error", 4]
// TODO set react version for xo
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
