import GridListComponent from '../components/grid-list.vue';

import Posts from '../.storybook/data/posts';
import Authors from '../.storybook/data/authors';

export default {
  component: GridListComponent,
  argTypes: {},
  title: 'Components/Grid List',
};

export const ListView = {
  args: {
    items: Posts,
    view: 'list-view',
    dataAuthors: Authors,
  },
};

export const TileView = {
  args: {
    items: Posts,
    view: 'tile-view',
    dataAuthors: Authors,
  },
};
