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
var semantic_ui_react_1 = require("semantic-ui-react");
var PostCard_1 = require("../PostCard/PostCard");
var PostList = /** @class */ (function (_super) {
    __extends(PostList, _super);
    function PostList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PostList.prototype.render = function () {
        var posts = this.props.posts;
        return (React.createElement(semantic_ui_react_1.Container, null, posts.map(function (post, index) {
            return (React.createElement(PostCard_1.default, { key: index, post: post }));
        })));
    };
    return PostList;
}(React.PureComponent));
exports.default = PostList;
//# sourceMappingURL=PostList.js.map