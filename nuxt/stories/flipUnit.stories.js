import FlipUnitComponent from '../components/flip-unit.vue';

export default {
  component: FlipUnitComponent,
  argTypes: {},
  title: 'Components/Flip Unit',
};

export const FlipUnit = {
  args: {
    value: 99,
    label: 'Label',
    bgColor: '#fe7746',
    fontColor: '#000000ff',
  },
};
