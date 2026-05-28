import Faq from '../components/faq.vue';

export default {
  component: Faq,
  argTypes: {},
  title: 'Components/Faq',
};

export const Default = {
  args: {
    headline: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      summary: 'Lorem ipsum dolor sit amet',
    },
    entries: [
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        summary: 'Lorem ipsum dolor sit amet',
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        summary: 'Lorem ipsum dolor sit amet',
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        summary: 'Lorem ipsum dolor sit amet',
      },
    ],
    index: 0,
  },
};
