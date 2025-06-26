import AuthorsComponent from '../components/authors.vue';

import Authors from '../.storybook/data/authors';

export default {
  component: AuthorsComponent,
  argTypes: {
    authors: {
      description: 'List of Authors',
      type: 'array',
    },
    noLink: {
      description: "Authors won't act as Link",
      type: 'boolean',
    },
    dataLang: {},
    dataAuthors: {},
    lang: {
      description: 'Sets the language',
      type: 'string',
    },
  },
  title: 'Components/Authors',
};

export const WithLink = {
  args: {
    authorsList: ['Author Name', 'Second Name'],
    dataAuthors: Authors,
  },
};

export const WithoutLink = {
  args: {
    authorsList: ['Author Name', 'Second Author'],
    noLink: true,
    dataAuthors: Authors,
  },
};

export const SingleName = {
  args: {
    authorsList: 'Author',
    noLink: true,
    dataAuthors: Authors,
  },
};
