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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var HTML = /** @class */ (function (_super) {
    __extends(HTML, _super);
    function HTML() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTML.prototype.render = function () {
        return (React.createElement("html", __assign({}, this.props.htmlAttributes),
            React.createElement("head", null,
                React.createElement("meta", { charSet: "utf-8" }),
                React.createElement("meta", { httpEquiv: "x-ua-compatible", content: "ie=edge" }),
                React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no" }),
                this.props.headComponents),
            React.createElement("body", __assign({}, this.props.bodyAttributes),
                this.props.preBodyComponents,
                React.createElement("div", { key: "body", id: "___gatsby", dangerouslySetInnerHTML: { __html: this.props.body } }),
                this.props.postBodyComponents)));
    };
    return HTML;
}(React.Component));
exports.default = HTML;
//# sourceMappingURL=html.js.map