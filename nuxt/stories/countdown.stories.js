import CountdownComponent from '../components/countdown.vue';

export default {
  component: CountdownComponent,
  argTypes: {},
  title: 'Components/Countdown',
};

export const Default = {
  args: {
    targetDate: new Date(Date.now() + 1000 * 60 * 60 * 24), // 1 day from now
  },
};