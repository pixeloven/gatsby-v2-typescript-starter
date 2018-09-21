'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const React = require('react');
const react_redux_1 = require('react-redux');
const semantic_ui_react_1 = require('semantic-ui-react');

exports.SidebarMenu = function (_a) {
  let items = _a.items,
    pathname = _a.pathname,
    Link = _a.Link,
    visible = _a.visible;
  const isActive = function (item) {
    return (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
  };
  const activeItem = items.find(item => {
    return isActive(item);
  }) || {};
  return (React.createElement(semantic_ui_react_1.Sidebar, {as: semantic_ui_react_1.Menu, animation: 'slide along', width: 'thin', visible, icon: 'labeled', vertical: true, inverted: activeItem.inverted}, items.map(item => {
    const active = isActive(item);
    return (React.createElement(semantic_ui_react_1.Menu.Item, {as: Link, to: item.path, active, key: item.path}, item.name));
  })));
};
const mapStateToProps = function (state) {
  return ({
    visible: state.isSidebarVisible
  });
};
exports.default = react_redux_1.connect(mapStateToProps)(exports.SidebarMenu);
// # sourceMappingURL=SidebarMenu.js.map
