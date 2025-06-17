import FilterBarComponent from '../components/filter-bar.vue';

import Posts from '../.storybook/data/posts';

export default {
  component: FilterBarComponent,
  argTypes: {
    items: {
      description: 'The list of items to display',
      type: 'array',
    },
  },
  title: 'Components/Filter Bar',
};

export const FilterBar = {
  args: {
    items: Posts,
  },
};
