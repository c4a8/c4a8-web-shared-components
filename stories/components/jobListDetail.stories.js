import { createComponent, getTitle } from '../../.storybook/templates';
import { includesjoblistdetailhtml as jobListDetailTemplate } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Job/Detail',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, jobListDetailTemplate);

const baseArgs = {
  clientName: 'glueckkanja',
  title: '',
};

export const Detail = Template.bind({});

Detail.args = {
  ...baseArgs,
};
