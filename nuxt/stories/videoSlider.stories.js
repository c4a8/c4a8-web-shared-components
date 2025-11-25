import VideoSliderComponent from '../components/video-slider.vue';

export default {
  component: VideoSliderComponent,
  argTypes: {},
  title: 'Components/Video Slider',
};

export const VideoSlider = {
  args: {
    headline: {
      text: 'Unsere Workaholics-Cases',
      level: 'h2',
    },
    subline: 'Erfahre jetzt, wem wir schon alles helfen konnten!',
    tabs: [
      {
        label: 'Cloud',
        video: {
          thumb: '/it-workaholics/it-workaholics-cloud-thumb.jpg',
          alt: 'Rene',
          id: 'ADTnb8EUnz4',
          headline: '"Die ganze Last ist runter von meinen Schultern<br /> Jetzt ist wieder alles ganz federleicht!"',
        },
      },
      {
        label: 'Managed Workplace',
        video: {
          thumb: '/it-workaholics/it-workaholics-managed-workplace-thumb.jpg',
          alt: 'Diane',
          id: '0y1xbn9H4kU',
          headline: '"Die Kollegen lieben mich wieder!"',
        },
      },
      {
        label: 'KI',
        video: {
          thumb: '/it-workaholics/it-workaholics-KI-thumb.jpg',
          alt: 'Stefan',
          id: 'fBT9uWXPpzM',
          headline: '"Der Workshop war für mich wie ein Sprung in die Zukunft!"',
        },
      },
      {
        label: 'Ransomware',
        video: {
          thumb: '/it-workaholics/it-workaholics-ransomware-thumb.jpg',
          alt: 'David',
          id: 'vB90U93_xOU',
          headline: '"Dank glueckkanja fühle ich mich wie neugeboren und habe endlich wieder Freude an meiner Arbeit!"',
        },
      },
    ],
    cta: {
      text: 'Teste dein Stresslevel',
      href: '#anchor',
      link: true,
    },
  },
};
