import CardBoxAnimation from '../components/card-box-animation.vue';

export default {
  title: 'Components/Card Box Animation',
  component: CardBoxAnimation,
  argTypes: {
    width: { control: 'text', description: 'CSS width value (e.g. 180px, 240px, 12rem)' },
  },
};

export const Default = {
  args: { width: '180px' },
};

export const Large = {
  args: { width: '300px' },
};

export const Small = {
  args: { width: '100px' },
};
