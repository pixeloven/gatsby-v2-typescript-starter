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
var BlogPagination_1 = require("./BlogPagination");
// Configure enzyme with react 16 adapter
var Adapter = require("enzyme-adapter-react-16");
enzyme_1.configure({ adapter: new Adapter() });
var LinkStub = (function (props) { return React.createElement("div", __assign({}, props)); });
describe("BlogPagination component", function () {
    it("should render nothing if only 1 page", function () {
        var pathname = "/blog/page/1/";
        var pageCount = 1;
        var wrapper = enzyme_1.render(React.createElement(BlogPagination_1.default, { pathname: pathname, Link: LinkStub, pageCount: pageCount }));
        expect(wrapper).toMatchSnapshot();
    });
    it("should render correctly 5 pages", function () {
        var pathname = "/blog/page/2/";
        var pageCount = 5;
        var wrapper = enzyme_1.render(React.createElement(BlogPagination_1.default, { pathname: pathname, Link: LinkStub, pageCount: pageCount }));
        expect(wrapper).toMatchSnapshot();
    });
    it("should render correctly 10 pages", function () {
        var pathname = "/blog/page/5/";
        var pageCount = 10;
        var wrapper = enzyme_1.render(React.createElement(BlogPagination_1.default, { pathname: pathname, Link: LinkStub, pageCount: pageCount }));
        expect(wrapper).toMatchSnapshot();
    });
    it("should render correctly 20 pages", function () {
        var pathname = "/blog/page/5/";
        var pageCount = 20;
        var wrapper = enzyme_1.render(React.createElement(BlogPagination_1.default, { pathname: pathname, Link: LinkStub, pageCount: pageCount }));
        expect(wrapper).toMatchSnapshot();
    });
    it("should have first link active if no match", function () {
        var pathname = "/plop";
        var pageCount = 10;
        var wrapper = enzyme_1.render(React.createElement(BlogPagination_1.default, { pathname: pathname, Link: LinkStub, pageCount: pageCount }));
        expect(wrapper).toMatchSnapshot();
    });
});
//# sourceMappingURL=BlogPagination.test.js.map