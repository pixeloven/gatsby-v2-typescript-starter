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
var SidebarMenuReadme = require("./README.md");
var React = require("react");
var react_1 = require("@storybook/react");
var addon_actions_1 = require("@storybook/addon-actions");
var addon_knobs_1 = require("@storybook/addon-knobs");
var SidebarMenu_1 = require("./SidebarMenu");
var items = [
    { name: "Home", path: "/", exact: true, icon: "home" },
    { name: "About", path: "/about/", exact: true, icon: "info circle" },
    { name: "Blog", path: "/blog/", exact: false, icon: "newspaper" },
];
var LinkStub = function (props) {
    return React.createElement("div", __assign({}, props, { onClick: addon_actions_1.action(props.to.toString()) }), props.children);
};
react_1.storiesOf("SidebarMenu", module)
    .addDecorator(addon_knobs_1.withKnobs)
    .addDecorator(withReadme(SidebarMenuReadme))
    .add("default", function () {
    var pathname = addon_knobs_1.text("pathname", "/");
    return (React.createElement(SidebarMenu_1.SidebarMenu, { Link: LinkStub, items: items, pathname: pathname, visible: true }));
});
//# sourceMappingURL=SidebarMenu.stories.js.map