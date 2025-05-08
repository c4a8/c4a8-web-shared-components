import AsideNavComponent from '../components/aside-nav.vue';

export default {
  component: AsideNavComponent,
  title: 'Components/Aside Nav',
};

export const Small = {
  args: {
    menuItems: [
      {
        href: 'javascript:void(0);',
        text: 'Lorem ipsum dolor sit',
      },
      {
        href: 'https://www.google.com',
        text: 'Lorem ipsum dolor sit amet',
        target: '_blank',
      },
      {
        href: 'javascript:void(0);',
        text: 'Lorem dolor sit amet dolor sit amet',
      },
      {
        href: 'javascript:void(0);',
        text: 'Lorem dolor sit amet',
      },
      {
        href: 'javascript:void(0);',
        text: 'Lorem dolor sit',
      },
      {
        href: 'javascript:void(0);',
        text: 'Lorem dolor sit amet',
      },
    ],
  },
};
