import HeadlineRowComponent from '../components/headline-row.vue';

export default {
  title: 'Components/Headline Row',
  component: HeadlineRowComponent,
};

export const h1 = {
  args: {
    level: 'h1',
    text: 'Headline Level 1 default spacing',
  },
};

export const h2 = {
  args: {
    level: 'h2',
    text: 'Headline Level 2 space-top-2',
    spacing: 'space-top-2',
  },
};

export const Centered = {
  args: {
    centered: true,
    level: 'h2',
    text: 'Headline Level 2 space-top-2',
    spacing: 'space-top-2',
  },
};

export const LeftAlignment = {
  args: {
    centered: true,
    level: 'h2',
    text: 'Headline Level 2 space-top-2',
    classes: 'text-left',
    spacing: 'space-top-2',
  },
};

export const h1WithFontSize3Style = {
  args: {
    level: 'h1',
    text: 'Headline Level 1 with Font Size 3 Style',
    classes: 'font-size-3',
  },
};
