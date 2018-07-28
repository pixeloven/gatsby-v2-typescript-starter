"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var lodash_1 = require("lodash");
exports.default = (function (props) {
    if (props.pageCount === 1) {
        return null;
    }
    var activeItem = props.pathname.startsWith("/blog/page/")
        ? props.pathname.split("/")[3]
        : "1";
    return (React.createElement(semantic_ui_react_1.Menu, { pagination: true }, lodash_1.times(props.pageCount, function (index) {
        var pageIndex = (index + 1).toString();
        var rangeStep = props.pageCount < 10 ? 5 : 3;
        var isInRange = (+pageIndex - rangeStep < +activeItem && +pageIndex + rangeStep > +activeItem);
        var isLastPage = (+pageIndex === props.pageCount);
        var isFirstPage = (+pageIndex === 1);
        if (isInRange || isFirstPage || isLastPage) {
            return (React.createElement(semantic_ui_react_1.Menu.Item, { key: pageIndex, style: { cursor: "pointer" }, as: props.Link, to: "/blog/page/" + pageIndex + "/", name: pageIndex, active: activeItem === pageIndex }));
        }
        else {
            return (+pageIndex === props.pageCount - 1 || +pageIndex === 2)
                ? React.createElement(semantic_ui_react_1.Menu.Item, { key: pageIndex, disabled: true }, "...")
                : null;
        }
    })));
});
//# sourceMappingURL=BlogPagination.js.map