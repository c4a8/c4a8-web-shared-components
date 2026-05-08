import StepCardComponent from '../components/step-card.vue';

export default {
  title: 'Components/StepCard',
  component: StepCardComponent,
};

export const Default = {
  args: {
    overline: 'For most Teams',
    title: 'SaaS Bundle',
    underline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    steps: [
      {
        title: 'Subscribe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        title: 'Configure',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        title: 'GoLive',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
    cta: {
      text: 'Get Started',
      href: '#',
    },
  },
};
