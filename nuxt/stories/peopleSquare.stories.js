import PeopleSquareComponent from '../components/people-square.vue';

export default {
  component: PeopleSquareComponent,
  argTypes: {},
  title: 'Components/People Square',
};

export const PeopleSquare = {
  args: {
    grid: [
      {
        rowStart: 1,
        rowEnd: 2,
        columnStart: 1,
        columnEnd: 1,
        img: {
          src: '/career/career-eugenie-franziska.jpg',
          cloudinary: true,
        },
      },
      {
        number: 1000,
        text: 'Kunden',
        shape: {
          src: '/assets/svg/shapes/shape-career-3.svg',
          cloudinary: false,
        },
      },
      {
        shape: {
          src: '/assets/svg/shapes/shape-career-2.svg',
          cloudinary: false,
        },
      },
      {
        img: {
          src: '/career/career-andi-hoetzinger.jpg',
          cloudinary: true,
        },
      },
      {
        number: 240,
        numberSuffix: '+',
        text: 'Mitarbeitende',
        color: 'var(--color-blue-medium)',
      },
      {
        img: {
          src: '/career/career-marco-scheel.jpg',
          cloudinary: true,
        },
      },
      {
        shape: {
          src: '/assets/svg/shapes/shape-career-4.svg',
          cloudinary: false,
        },
      },
      {
        img: {
          src: '/career/career-petr-stupka.jpg',
          cloudinary: true,
        },
      },
    ],
  },
};
