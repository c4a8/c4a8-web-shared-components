import AsideNavComponent from '../components/aside-nav.vue';

export default {
  component: AsideNavComponent,
  title: 'Components/Aside Nav',
};

export const Small = {
  args: {
    menuItems: [
      {
        href: 'https://www.google.com',
        text: 'Lorem ipsum dolor sit',
      },
      {
        href: 'https://www.google.com',
        text: 'Lorem ipsum dolor sit amet',
      },
    ],
  },
};
