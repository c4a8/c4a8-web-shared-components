import BlogComponent from '../components/blog.vue';

import Posts from '../.storybook/data/posts';

export default {
  component: BlogComponent,
  argTypes: {},
  title: 'Components/Blog',
};

export const Blog = {
  args: {
    posts: Posts,
    lang: 'de',
  },
};
