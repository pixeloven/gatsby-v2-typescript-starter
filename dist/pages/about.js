"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var layout_1 = require("../components/layout");
exports.default = (function (props) {
    return (React.createElement(layout_1.default, { location: props.location },
        React.createElement(semantic_ui_react_1.Container, null,
            React.createElement(semantic_ui_react_1.Segment, { vertical: true },
                React.createElement(semantic_ui_react_1.Header, { as: "h2" },
                    React.createElement(semantic_ui_react_1.Icon, { name: "info circle" }),
                    React.createElement(semantic_ui_react_1.Header.Content, null, "About"))),
            React.createElement(semantic_ui_react_1.Segment, { vertical: true },
                React.createElement("p", null, "This starter was created by @briangeb."),
                React.createElement("p", null,
                    "For any question, I'm on ",
                    React.createElement("a", { href: "https://discord.gg/2bz8EzW", target: "blank" }, "discord #reactiflux/gatsby")),
                React.createElement("p", null,
                    "For any issues, any PR are welcoming",
                    React.createElement("a", { href: "https://github.com/briangeb/gatsby-starter/issues", target: "blank" }, " on this repository"))))));
});
//# sourceMappingURL=about.js.map