import CountdownComponent from '../components/countdown.vue';

export default {
  component: CountdownComponent,
  argTypes: {},
  title: 'Components/Countdown',
};

const nextMonth = new Date();

nextMonth.setMonth(nextMonth.getMonth() + 1);

export const Default = {
  args: {
    targetDate: nextMonth,
    bgColor: '#feda46',
  },
};
