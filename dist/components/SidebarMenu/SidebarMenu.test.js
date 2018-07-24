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
var enzyme_1 = require("enzyme");
require("jest");
var React = require("react");
var SidebarMenu_1 = require("./SidebarMenu");
// Configure enzyme with react 16 adapter
var Adapter = require("enzyme-adapter-react-16");
enzyme_1.configure({ adapter: new Adapter() });
var items = [
    { name: "Home", path: "/", exact: true },
    { name: "About", path: "/about/", exact: true },
    { name: "Blog", path: "/blog/", exact: false },
];
var LinkStub = function (props) { return React.createElement("div", __assign({}, props)); };
describe("SidebarMenu component", function () {
    it("should render correctly", function () {
        var wrapper = enzyme_1.render(React.createElement(SidebarMenu_1.SidebarMenu, { Link: LinkStub, pathname: "/", items: items, visible: true }));
        expect(wrapper).toMatchSnapshot();
    });
});
//# sourceMappingURL=SidebarMenu.test.js.map