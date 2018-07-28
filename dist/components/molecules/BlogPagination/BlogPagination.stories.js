"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable no-var-requires */
var withReadme = require("storybook-readme/with-readme").default;
var BlogPaginationReadme = require("./README.md");
var React = require("react");
var react_1 = require("@storybook/react");
var addon_actions_1 = require("@storybook/addon-actions");
var addon_knobs_1 = require("@storybook/addon-knobs");
var BlogPagination_1 = require("./BlogPagination");
var LinkStub = (function (props) {
    return React.createElement("div", __assign({}, props, { onClick: addon_actions_1.action(props.to.toString()) }), props.children);
});
react_1.storiesOf("BlogPagination", module)
    .addDecorator(withReadme(BlogPaginationReadme))
    .addDecorator(addon_knobs_1.withKnobs)
    .add("default", function () {
    var activePage = addon_knobs_1.number("activePage", 1);
    var pathname = "/blog/page/" + activePage + "/";
    var pageCount = addon_knobs_1.number("pageCount", 10);
    return (React.createElement(BlogPagination_1.default, { pathname: pathname, Link: LinkStub, pageCount: pageCount }));
});
//# sourceMappingURL=BlogPagination.stories.js.map