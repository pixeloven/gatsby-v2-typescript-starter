"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var semantic_ui_react_1 = require("semantic-ui-react");
exports.SidebarMenu = function (_a) {
    var items = _a.items, pathname = _a.pathname, Link = _a.Link, visible = _a.visible;
    var isActive = function (item) { return (item.exact) ? pathname === item.path : pathname.startsWith(item.path); };
    var activeItem = items.find(function (item) { return isActive(item); }) || {};
    return (React.createElement(semantic_ui_react_1.Sidebar, { as: semantic_ui_react_1.Menu, animation: "slide along", width: "thin", visible: visible, icon: "labeled", vertical: true, inverted: activeItem.inverted }, items.map(function (item) {
        var active = isActive(item);
        return (React.createElement(semantic_ui_react_1.Menu.Item, { as: Link, to: item.path, active: active, key: item.path }, item.name));
    })));
};
var mapStateToProps = function (state) { return ({
    visible: state.isSidebarVisible,
}); };
exports.default = react_redux_1.connect(mapStateToProps)(exports.SidebarMenu);
//# sourceMappingURL=SidebarMenu.js.map