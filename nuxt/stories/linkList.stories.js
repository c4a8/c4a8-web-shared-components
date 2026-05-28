import LinkListComponent from '../components/link-list.vue';

export default {
  component: LinkListComponent,
  argTypes: {},
  title: 'Components/Link List',
};

export const LinkList = {
  args: {
    list: {
      name: 'managed-services',
      languages: {
        de: {
          title: 'Managed Services',
          active: false,
        },
      },
      children: [
        {
          name: 'managed-workplace',
          languages: {
            de: {
              title: 'Managed Workplace',
              url: 'javascript:void(0);',
              active: false,
            },
          },
        },
        {
          name: 'managed-azure',
          languages: {
            de: {
              title: 'Managed Azure',
              url: 'javascript:void(0);',
              active: false,
            },
          },
        },
        {
          name: 'managed-security',
          languages: {
            de: {
              title: 'Managed Security',
              url: 'javascript:void(0);',
              active: false,
            },
          },
        },
      ],
    },
    lang: 'de',
    noAnimation: true,
  },
};
