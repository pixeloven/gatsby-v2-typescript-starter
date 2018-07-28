"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var gatsby_1 = require("gatsby");
var HeaderMenu_1 = require("../components/organisms/HeaderMenu/HeaderMenu");
var SidebarMenu_1 = require("../components/organisms/SidebarMenu/SidebarMenu");
var semantic_ui_react_1 = require("semantic-ui-react");
require("../css/styles.css");
require("../css/responsive.css");
require("../css/semantic.min.css");
require("prismjs/themes/prism-okaidia.css");
var react_redux_1 = require("react-redux");
var store_1 = require("../store");
exports.menuItems = [
    { name: "Home", path: "/", exact: true, icon: "home", inverted: true },
    { name: "About", path: "/about/", exact: true, icon: "info circle" },
    { name: "Blog", path: "/blog/", exact: false, icon: "newspaper" },
];
var DefaultLayout = /** @class */ (function (_super) {
    __extends(DefaultLayout, _super);
    function DefaultLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultLayout.prototype.render = function () {
        var pathname = this.props.location.pathname;
        var isHome = pathname === "/";
        return (React.createElement(react_redux_1.Provider, { store: store_1.store },
            React.createElement(semantic_ui_react_1.Sidebar.Pushable, { as: semantic_ui_react_1.Segment },
                React.createElement(SidebarMenu_1.default, { Link: gatsby_1.Link, pathname: pathname, items: exports.menuItems, visible: false }),
                React.createElement(semantic_ui_react_1.Sidebar.Pusher, { style: { minHeight: "100vh" } },
                    isHome ? null : React.createElement(HeaderMenu_1.default, { Link: gatsby_1.Link, pathname: pathname, items: exports.menuItems }),
                    React.createElement("div", { style: { paddingBottom: 60 } }, this.props.children),
                    React.createElement(semantic_ui_react_1.Segment, { inverted: true, vertical: true, style: { position: "absolute", bottom: 0, width: "100%" } },
                        React.createElement(semantic_ui_react_1.Container, { textAlign: "center" },
                            React.createElement("p", null,
                                "Powered with ",
                                React.createElement(semantic_ui_react_1.Icon, { name: "heart" }),
                                " by Gatsby 2.0")))))));
    };
    return DefaultLayout;
}(React.PureComponent));
exports.default = DefaultLayout;
;
//# sourceMappingURL=layout.js.map