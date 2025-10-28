import FabHint from '../components/fab-hint.vue';

export default {
  component: FabHint,
  argTypes: {},
  title: 'Components/Fab Hint',
  decorators: [
    (story) => ({
      components: { story },
      template: `
        <div style="height: 80vh;" class="dummy-content"></div>
        <story />
        <div style="height: 500vh;" class="dummy-content"></div>
      `,
    }),
  ],
};

export const Default = {
  args: {
    text: 'Slider: © lorem; Kacheln: 1: © lorem; 2: © Author - example.com - 123456789; 3: © Author - example.com - 123456789; 4: © example.com; CTA Jobs: © Author - example.com - 123456789; Kacheln: 1: © <a href="https://www.example.com/">https://www.example.com/</a>; 2: © lorem; 3: © <a href="https://www.example.com/">https://www.example.com/</a>; CTA: © Author - example.com - 123456789',
  },
};

export const BackgroundColor = {
  args: {
    bgColor: 'var(--color-orange)',
    iconColor: 'var(--color-white)',
    icon: 'world',
    title: 'Lorem ipsum dolor',
    text: 'Slider: © lorem; Kacheln: 1: © lorem; 2: © Author - example.com - 123456789; 3: © Author - example.com - 123456789; 4: © example.com; CTA Jobs: © Author - example.com - 123456789; Kacheln: 1: © <a href="https://www.example.com/">https://www.example.com/</a>; 2: © lorem; 3: © <a href="https://www.example.com/">https://www.example.com/</a>; CTA: © Author - example.com - 123456789',
  },
};
