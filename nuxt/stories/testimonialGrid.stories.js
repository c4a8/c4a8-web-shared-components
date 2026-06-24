import TestimonialGridComponent from '../components/testimonial-grid.vue';

export default {
  title: 'Components/Testimonial Grid',
  component: TestimonialGridComponent,
  argTypes: {},
};

export const TestimonialGrid = {
  args: {
    headline: 'Menschen bei glueckkanja',
    subline:
      'In unserer Reihe "Inside glueckkanja" stellen sich Mitarbeitende vor und gewähren spannende Einblicke in ihre Aufgaben.',
    cta: {
      text: 'Weitere Stories ansehen',
      toggleText: 'Weniger anzeigen',
      href: 'https://www.glueckkanja.com',
      skin: 'secondary',
      monochrome: true,
    },
    contents: [
      {
        name: 'Max Mustermann',
        title: 'Developer',
        video: {
          lightbox: true,
          large: true,
          thumb: '/thumbs/thumb-avd-foundation-webcast.jpg',
          alt: 'Video Casestudy Franz Haniel',
          id: '0U_mV706VKI',
        },
        bgColor: 'var(--color-gk-light-blue)',
      },
      {
        name: 'Matti Puolitaival',
        title: 'Designer',
        img: {
          img: '/people/testimonials/matti-puolitaival.png',
          cloudinary: true,
          alt: 'lorem ipsum',
        },

        bgColor: 'var(--color-gk-light-blue)',
      },

      {
        href: 'glueckkanja.com',
        name: 'Sophie Luna',
        title: 'HR Specialist',
        img: {
          img: '/people/people-sophie-luna.png',
          cloudinary: true,
          alt: 'lorem ipsum',
        },
      },
      {
        name: 'John Doe',
        title: 'Project Manager',
        video: {
          lightbox: true,
          large: true,
          thumb: '/thumbs/thumb-avd-foundation-webcast.jpg',
          alt: 'Video Casestudy Franz Haniel',
          id: '0U_mV706VKI',
        },

        bgColor: 'var(--color-gk-light-blue)',
      },
      {
        name: 'Erika Musterfrau',
        title: 'HR Manager',
        video: {
          thumb: '/thumbs/thumb-avd-foundation-webcast.jpg',

          id: '0U_mV706VKI',
          fullWidth: true,
        },
        bgColor: 'var(--color-gk-light-blue)',

        bgColor: 'var(--color-gk-light-blue)',
      },
      {
        name: 'Jane Doe',
        title: 'Azure Specialist',
        video: {
          lightbox: true,
          large: true,
          thumb: '/thumbs/thumb-avd-foundation-webcast.jpg',
          alt: 'Video Casestudy Franz Haniel',
          id: '0U_mV706VKI',
        },

        bgColor: 'var(--color-gk-light-blue)',
      },
      {
        name: 'John Smith',
        title: 'Cloud Architect',
        video: {
          lightbox: true,
          large: true,
          thumb: '/thumbs/thumb-avd-foundation-webcast.jpg',
          alt: 'Video Casestudy Franz Haniel',
          id: '0U_mV706VKI',
        },

        bgColor: 'var(--color-gk-light-blue)',
      },
    ],
  },
};
