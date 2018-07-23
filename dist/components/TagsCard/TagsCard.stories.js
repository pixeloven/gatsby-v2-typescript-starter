"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var withReadme = require("storybook-readme/with-readme").default;
var TagsCardReadme = require("./README.md");
var React = require("react");
var react_1 = require("@storybook/react");
var addon_actions_1 = require("@storybook/addon-actions");
var addon_knobs_1 = require("@storybook/addon-knobs");
var TagsCard_1 = require("./TagsCard");
var tags = [
    { fieldValue: "tag01", totalCount: 2 },
    { fieldValue: "tag02", totalCount: 4 },
    { fieldValue: "tag03", totalCount: 6 },
];
var LinkStub = (function (props) {
    return React.createElement("div", { onClick: addon_actions_1.action(props.to.toString()) }, props.children);
});
react_1.storiesOf("TagsCard", module)
    .addDecorator(withReadme(TagsCardReadme))
    .addDecorator(addon_knobs_1.withKnobs)
    .add("default", function () {
    return React.createElement(TagsCard_1.default, { tags: tags, Link: LinkStub });
})
    .add("with tag property", function () {
    var tag = addon_knobs_1.select("Tag", tags.map(function (t) { return t.fieldValue; }), "tag01");
    return React.createElement(TagsCard_1.default, { tags: tags, tag: tag, Link: LinkStub });
});
//# sourceMappingURL=TagsCard.stories.js.map