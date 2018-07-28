'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const enzyme_1 = require('enzyme');
require('jest');
const React = require('react');
const semantic_ui_react_1 = require('semantic-ui-react');
// Configure enzyme with react 16 adapter
const Adapter = require('enzyme-adapter-react-16');
const TagsCard_1 = require('./TagsCard');

enzyme_1.configure({adapter: new Adapter()});
describe('TagsCard component', () => {
  let LinkStub;
  beforeEach(() => {
    LinkStub = function (props) {
      return React.createElement('div', null, props.children);
    };
  });
  it('should list all the tags', () => {
    const tags = [
      {fieldValue: 'tag01', totalCount: 2},
      {fieldValue: 'tag02', totalCount: 4},
      {fieldValue: 'tag03', totalCount: 6}
    ];
    const wrapper = enzyme_1.shallow(React.createElement(TagsCard_1.default, {tags, Link: LinkStub}));
    expect(wrapper.find(semantic_ui_react_1.List.Item)).toHaveLength(3);
  });
  it('should have on tag active', () => {
    const tags = [
      {fieldValue: 'tag01', totalCount: 2},
      {fieldValue: 'tag02', totalCount: 4},
      {fieldValue: 'tag03', totalCount: 6}
    ];
    const wrapper = enzyme_1.shallow(React.createElement(TagsCard_1.default, {tags, Link: LinkStub, tag: 'tag01'}));
    expect(wrapper).toMatchSnapshot();
  });
});
// # sourceMappingURL=TagsCard.test.js.map
