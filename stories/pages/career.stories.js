import { createComponent, hrefTo, getTitle } from '../../.storybook/templates';
import { includesjoblisthtml as component } from '../../.storybook/generatedIncludes';
import { List } from '../components/jobList.stories';

const options = getTitle({
  title: 'Career',
  page: true,
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component, 'headline');

const baseArgs = {
  ...List?.args,
  detailUrl: hrefTo('Pages/Jobs', ''),
};

export const Career = Template.bind({});

Career.args = {
  ...baseArgs,
};
