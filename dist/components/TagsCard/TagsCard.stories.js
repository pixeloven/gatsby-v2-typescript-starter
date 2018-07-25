'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const withReadme = require('storybook-readme/with-readme').default;
const React = require('react');
const react_1 = require('@storybook/react');
const addon_actions_1 = require('@storybook/addon-actions');
const addon_knobs_1 = require('@storybook/addon-knobs');
const TagsCardReadme = require('./README.md');
const TagsCard_1 = require('./TagsCard');

const tags = [
  {fieldValue: 'tag01', totalCount: 2},
  {fieldValue: 'tag02', totalCount: 4},
  {fieldValue: 'tag03', totalCount: 6}
];
const LinkStub = (function (props) {
  return React.createElement('div', {onClick: addon_actions_1.action(props.to.toString())}, props.children);
});
react_1.storiesOf('TagsCard', module)
  .addDecorator(withReadme(TagsCardReadme))
  .addDecorator(addon_knobs_1.withKnobs)
  .add('default', () => {
    return React.createElement(TagsCard_1.default, {tags, Link: LinkStub});
  })
  .add('with tag property', () => {
    const tag = addon_knobs_1.select('Tag', tags.map(t => {
      return t.fieldValue;
    }), 'tag01');
    return React.createElement(TagsCard_1.default, {tags, tag, Link: LinkStub});
  });
// # sourceMappingURL=TagsCard.stories.js.map
