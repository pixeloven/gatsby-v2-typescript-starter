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
var HeaderMenuReadme = require("./README.md");
var React = require("react");
var react_1 = require("@storybook/react");
var addon_actions_1 = require("@storybook/addon-actions");
var addon_knobs_1 = require("@storybook/addon-knobs");
var HeaderMenu_1 = require("./HeaderMenu");
var items = [
    { name: "Home", path: "/", exact: true },
    { name: "About", path: "/about/", exact: true },
    { name: "Blog", path: "/blog/", exact: false },
];
var LinkStub = function (props) {
    return React.createElement("div", __assign({}, props, { onClick: addon_actions_1.action(props.to.toString()) }), props.children);
};
var dispatchStub = function (a) { return addon_actions_1.action(a.type)(a) && a; };
react_1.storiesOf("HeaderMenu", module)
    .addDecorator(addon_knobs_1.withKnobs)
    .addDecorator(withReadme(HeaderMenuReadme))
    .add("default", function () {
    var pathname = addon_knobs_1.text("pathname", "/");
    var inverted = addon_knobs_1.boolean("inverted", false);
    return (React.createElement(HeaderMenu_1.HeaderMenu, { Link: LinkStub, items: items, pathname: pathname, inverted: inverted, dispatch: dispatchStub }));
});
//# sourceMappingURL=HeaderMenu.stories.js.map