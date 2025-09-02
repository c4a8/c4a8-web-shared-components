import CountdownComponent from '../components/countdown.vue';

export default {
  component: CountdownComponent,
  argTypes: {},
  title: 'Components/Countdown',
};

export const Default = {
  args: {
    targetDate: new Date(2025, 10, 25),
    bgColor: '#feda46',

  },
};