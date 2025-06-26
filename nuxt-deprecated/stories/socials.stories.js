import SocialsComponent from '../components/socials.vue';

export default {
  title: 'Components/Socials',
  component: SocialsComponent,
};

export const VerticalNoLabel = {
  args: {
    vertical: true,
    hideLabel: true,
    author: {
      name: 'Carolin Kanja',
      socials: [
        {
          text: 'Blog',
          href: '/',
        },
        {
          text: 'Podcast',
          href: '/',
        },
        {
          text: 'Youtube',
          href: '/',
        },
      ],
      twitter: 'fraukanja',
      linkedin: 'carolin-kanja',
    },
  },
};

export const Label = {
  args: {
    author: {
      name: 'Author Name 2',
    },
  },
};

export const Expand = {
  args: {
    expand: true,
    hideLabel: true,
    author: {
      name: 'Carolin Kanja',
      socials: [
        {
          text: 'Blog',
          href: '/',
        },
        {
          text: 'Podcast',
          href: '/',
        },
        {
          text: 'Youtube',
          href: '/',
        },
      ],
      twitter: 'fraukanja',
      linkedin: 'carolin-kanja',
    },
  },
};

export const ExpandLabel = {
  args: {
    expand: true,
    hideLabel: false,
    author: {
      name: 'Carolin Kanja',
      socials: [
        {
          text: 'Blog',
          href: '/',
        },
        {
          text: 'Podcast',
          href: '/',
        },
        {
          text: 'Youtube',
          href: '/',
        },
      ],
      email: 'info@glueckkanja.com',
    },
    shareUrl: 'https://glueckkanja.com',
  },
};
