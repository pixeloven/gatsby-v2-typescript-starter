'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const React = require('react');
const react_helmet_1 = require('react-helmet');
// Load production style
let styles;
if (process.env.NODE_ENV === 'production') {
  try {
    styles = require('!raw-loader!../public/styles.css');
  } catch (err) {
    console.log(err);
  }
}
// TODO https://www.gatsbyjs.org/docs/environment-variables/
// TODO https://github.com/gatsbyjs/gatsby/commit/765b679cbc222fd5f527690427ee431cca7ccd61#diff-637c76e3c059ed8efacedf6e30de2d61
// Use `module.exports` to be compliante with `webpack-require` import method
exports.default = (function (props) {
  const head = react_helmet_1.default.rewind();
  // TODO I think I can remove this
  const css = (process.env.NODE_ENV === 'production') ?
    React.createElement('style', {id: 'gatsby-inlined-css', dangerouslySetInnerHTML: {__html: styles}}) :
    null;
    // TODO for google I think
    // import config from "../gatsby-config";
    // const verification = config.siteMetadata && config.siteMetadata.googleVerification ? <meta
    //   name="google-site-verification"
    //   content={config.siteMetadata.googleVerification} /> : null;
  return (React.createElement('html', {lang: 'en'},
    React.createElement('head', null,
      props.headComponents,
      React.createElement('title', null, 'My website'),
      React.createElement('meta', {charSet: 'utf-8'}),
      React.createElement('meta', {httpEquiv: 'X-UA-Compatible', content: 'IE=edge'}),
      React.createElement('meta', {name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0'}),
      head.title.toComponent(),
      head.meta.toComponent(),
      head.link.toComponent(),
      css),
    React.createElement('body', null,
      React.createElement('div', {id: '___gatsby', dangerouslySetInnerHTML: {__html: props.body}}),
      props.postBodyComponents)));
});
// # sourceMappingURL=html.js.map
