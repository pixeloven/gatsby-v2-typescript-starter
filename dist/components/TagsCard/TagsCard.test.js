"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enzyme_1 = require("enzyme");
require("jest");
var React = require("react");
var TagsCard_1 = require("./TagsCard");
var semantic_ui_react_1 = require("semantic-ui-react");
// Configure enzyme with react 16 adapter
var Adapter = require("enzyme-adapter-react-16");
enzyme_1.configure({ adapter: new Adapter() });
describe("TagsCard component", function () {
    var LinkStub;
    beforeEach(function () {
        LinkStub = function (props) {
            return React.createElement("div", null, props.children);
        };
    });
    it("should list all the tags", function () {
        var tags = [
            { fieldValue: "tag01", totalCount: 2 },
            { fieldValue: "tag02", totalCount: 4 },
            { fieldValue: "tag03", totalCount: 6 },
        ];
        var wrapper = enzyme_1.shallow(React.createElement(TagsCard_1.default, { tags: tags, Link: LinkStub }));
        expect(wrapper.find(semantic_ui_react_1.List.Item)).toHaveLength(3);
    });
    it("should have on tag active", function () {
        var tags = [
            { fieldValue: "tag01", totalCount: 2 },
            { fieldValue: "tag02", totalCount: 4 },
            { fieldValue: "tag03", totalCount: 6 },
        ];
        var wrapper = enzyme_1.shallow(React.createElement(TagsCard_1.default, { tags: tags, Link: LinkStub, tag: "tag01" }));
        expect(wrapper).toMatchSnapshot();
    });
});
//# sourceMappingURL=TagsCard.test.js.map