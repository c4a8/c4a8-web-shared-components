import TimelineComponent from '../components/timeline.vue';

export default {
  title: 'Components/Timeline',
  component: TimelineComponent,
  decorators: [
    (story) => ({
      components: { story },
      template: `
        <div>
          <div style="height: 60vh;" class="dummy-content"></div>
          <story />
          <div style="height: 300vh;" class="dummy-content"></div>
        </div>
      `,
    }),
  ],
};

export const Default = {
  args: {
    headline: {
      text: 'Lorem was sie erwartet',
      level: 'h3',
    },
    entries: [
      'Initial Security Audit & Recommendations',
      'Roadmap Workshops',
      'Implementation of Security Solutions',
      'Initial Baselining',
      'Blueprint Matching',
    ],
  },
};

export const Expanded = {
  args: {
    expanded: true,
    headline: {
      text: 'Lorem was sie erwartet',
      level: 'h3',
    },
    entries: [
      'Initial Security Audit & Recommendations',
      'Roadmap Workshops',
      'Implementation of Security Solutions',
      'Initial Baselining',
      'Blueprint Matching',
    ],
  },
};

export const Simple = {
  args: {
    simple: true,
    headline: {
      text: 'Lorem was sie erwartet',
      level: 'h3',
    },
    entries: [
      {
        title: 'Title 1',
        text: 'Lorem ipsum dolor sit amet, consectet',
      },
      {
        title: 'Title 2',
        text: 'Lorem ipsum dolor sit amet, consectet',
      },
      {
        title: 'Title 3',
        text: 'Lorem ipsum dolor sit amet, consectet',
      },
      {
        title: 'Title 4',
        text: 'Lorem ipsum dolor sit amet, consectet',
      },
    ],
  },
};

export const SimpleWithSubline = {
  args: {
    simple: true,
    headline: {
      text: 'Lorem was sie erwartet',
      level: 'h3',
    },
    subline:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ',
    entries: [
      {
        title: 'Title 1',
        text: 'Lorem ipsum dolor sit amet, consectet',
      },
      {
        title: 'Title 2',
        text: 'Lorem ipsum dolor sit amet, consectet',
      },
      {
        title: 'Title 3',
        text: 'Lorem ipsum dolor sit amet, consectet',
      },
    ],
  },
};
