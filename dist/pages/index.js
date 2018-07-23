"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var layout_1 = require("../components/layout");
var gatsby_1 = require("gatsby");
var HeaderMenu_1 = require("../components/HeaderMenu/HeaderMenu");
var semantic_ui_react_1 = require("semantic-ui-react");
exports.default = (function (props) {
    return React.createElement(layout_1.default, { location: props.location },
        React.createElement(semantic_ui_react_1.Segment, { vertical: true, inverted: true, textAlign: "center", className: "masthead" },
            React.createElement(HeaderMenu_1.default, { Link: gatsby_1.Link, pathname: props.location.pathname, items: layout_1.menuItems, inverted: true }),
            React.createElement(semantic_ui_react_1.Container, { text: true },
                React.createElement(semantic_ui_react_1.Header, { inverted: true, as: "h1" }, "Gatsby 1.0 - Starter kit"),
                React.createElement(semantic_ui_react_1.Header, { inverted: true, as: "h2" }, "Typescript - Jest - Semantic UI"),
                React.createElement(semantic_ui_react_1.Button, { primary: true, size: "huge" }, "Get started!"))),
        React.createElement(semantic_ui_react_1.Segment, { vertical: true, className: "stripe" },
            React.createElement(semantic_ui_react_1.Grid, { stackable: true, verticalAlign: "middle", className: "container" },
                React.createElement(semantic_ui_react_1.Grid.Row, null,
                    React.createElement(semantic_ui_react_1.Grid.Column, { width: "8" },
                        React.createElement(semantic_ui_react_1.Header, null, "Lorem ipsum"),
                        React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio."),
                        React.createElement(semantic_ui_react_1.Header, null, "Dolor sit amet"),
                        React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio.")),
                    React.createElement(semantic_ui_react_1.Grid.Column, { width: "6", floated: "right" },
                        React.createElement(semantic_ui_react_1.Header, null, "Lorem ipsum"),
                        React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio."),
                        React.createElement(semantic_ui_react_1.Header, null, "Dolor sit amet"),
                        React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio."))))),
        React.createElement(semantic_ui_react_1.Segment, { vertical: true, className: "stripe alternate feature" },
            React.createElement(semantic_ui_react_1.Grid, { columns: "3", textAlign: "center", divided: true, relaxed: true, stackable: true, className: "container" },
                React.createElement(semantic_ui_react_1.Grid.Row, null,
                    React.createElement(semantic_ui_react_1.Grid.Column, null,
                        React.createElement(semantic_ui_react_1.Header, { icon: true },
                            React.createElement(semantic_ui_react_1.Icon, { name: "wizard" }),
                            "A kind of magic!"),
                        React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eaque at quae cupiditate aspernatur quibusdam! Distinctio quod non, harum dolorum earum molestias, beatae expedita aliquam dolorem asperiores nemo amet quaerat.")),
                    React.createElement(semantic_ui_react_1.Grid.Column, null,
                        React.createElement(semantic_ui_react_1.Header, { icon: true },
                            React.createElement(semantic_ui_react_1.Icon, { name: "wizard" }),
                            "A kind of magic!"),
                        React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eaque at quae cupiditate aspernatur quibusdam! Distinctio quod non, harum dolorum earum molestias, beatae expedita aliquam dolorem asperiores nemo amet quaerat.")),
                    React.createElement(semantic_ui_react_1.Grid.Column, null,
                        React.createElement(semantic_ui_react_1.Header, { icon: true },
                            React.createElement(semantic_ui_react_1.Icon, { name: "wizard" }),
                            "A kind of magic!"),
                        React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eaque at quae cupiditate aspernatur quibusdam! Distinctio quod non, harum dolorum earum molestias, beatae expedita aliquam dolorem asperiores nemo amet quaerat."))))));
});
//# sourceMappingURL=index.js.map