import * as React from "react";
import Helmet from "react-helmet";

interface HtmlProps {
    body: any;
    postBodyComponents: any;
    headComponents: any;
}

// Load production style
let styles: string;
if (process.env.NODE_ENV === `production`) {
    try {
        styles = require("!raw-loader!../public/styles.css");
    } catch (err) {
        console.log(err);
    }
}

// TODO https://www.gatsbyjs.org/docs/environment-variables/
// TODO https://github.com/gatsbyjs/gatsby/commit/765b679cbc222fd5f527690427ee431cca7ccd61#diff-637c76e3c059ed8efacedf6e30de2d61
// Use `module.exports` to be compliante with `webpack-require` import method
export default (props: HtmlProps) => {
    const head = Helmet.rewind();

    // TODO I think I can remove this
    const css = (process.env.NODE_ENV === `production`) ?
        <style
            id="gatsby-inlined-css"
            dangerouslySetInnerHTML={{ __html: styles }}
        />
        : null;
    // TODO for google I think
    //import config from "../gatsby-config";
    // const verification = config.siteMetadata && config.siteMetadata.googleVerification ? <meta
    //   name="google-site-verification"
    //   content={config.siteMetadata.googleVerification} /> : null;

    return (
        <html lang="en">
        <head>
            {props.headComponents}
            <title>My website</title>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
            />
            {head.title.toComponent()}
            {head.meta.toComponent()}
            {head.link.toComponent()}
            {css}
            {/*{verification}*/}
        </head>
        <body>
        <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        </body>
        </html>
    );
};
