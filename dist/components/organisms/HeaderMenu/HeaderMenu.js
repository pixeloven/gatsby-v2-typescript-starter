"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var store_1 = require("../../../store");
var semantic_ui_react_1 = require("semantic-ui-react");
exports.HeaderMenu = function (_a) {
    var items = _a.items, pathname = _a.pathname, Link = _a.Link, inverted = _a.inverted, dispatch = _a.dispatch;
    return React.createElement(semantic_ui_react_1.Container, null,
        React.createElement(semantic_ui_react_1.Menu, { size: "large", pointing: true, secondary: true, inverted: inverted },
            React.createElement(semantic_ui_react_1.Menu.Item, { as: "a", className: "mobile only", icon: "sidebar", onClick: function () { return dispatch && dispatch(store_1.toggleSidebar()); } }),
            React.createElement(semantic_ui_react_1.Menu.Item, { className: "mobile hidden" },
                React.createElement(semantic_ui_react_1.Icon, { name: "spy", size: "big" })),
            items.map(function (item) {
                var active = (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
                return React.createElement(semantic_ui_react_1.Menu.Item, { as: Link, className: "mobile hidden", name: item.name, to: item.path, key: item.path, active: active });
            })));
};
exports.default = react_redux_1.connect()(exports.HeaderMenu);
//# sourceMappingURL=HeaderMenu.js.map