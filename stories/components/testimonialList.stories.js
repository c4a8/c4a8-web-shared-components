import { createComponent, getTitle, site } from '../../.storybook/templates';
import { includestestimoniallisthtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Testimonial List',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const testimoniallist = Template.bind({});

testimoniallist.args = {
  bgColor: 'var(--color-blue-dark)',
  bgColorHover: 'var(--color-black)',
  contents: [
    {
      url: 'javascript:void(0)',
      name: '1Nadine Kern',
      title: 'Consultant, Cloud Security Architect',
      contentImg: {
        img: 'v1643880379/people/testimonials/matti-puolitaival.png',
        alt: 'lorem ipsum',
      },

    },
    {
      url: 'javascript:void(0)',
      name: '2Matti Puolitaival',
      title: 'Senior Consultant Azure',
      contentImg: {
        img: 'v1643880379/people/testimonials/matti-puolitaival.png',
        alt: 'lorem ipsum',
      },
    },
    {
      url: 'javascript:void(0)',
      name: '3Nadine Kern',
      title: 'Consultant, Cloud Security Architect',
      contentImg: {
        img: 'v1643880379/people/testimonials/matti-puolitaival.png',
        alt: 'lorem ipsum',
      },
    },
    {
      url: 'javascript:void(0)',
      name: '4Matti Puolitaival',
      title: 'Senior Consultant Azure',
      contentImg: {
        img: 'v1643880379/people/testimonials/matti-puolitaival.png',
        alt: 'lorem ipsum',
      },
    },
    {
      url: 'javascript:void(0)',
      name: '5Nadine Kern',
      title: 'Consultant, Cloud Security Architect',
      contentImg: {
        img: 'v1643880379/people/testimonials/matti-puolitaival.png',
        alt: 'lorem ipsum',
      },
    },
    {
      url: 'javascript:void(0)',
      name: '6Matti Puolitaival',
      title: 'Senior Consultant Azure',
      bgColor: 'var(--color-blue-dark)',
      bgColorHover: 'var(--color-black)',
      contentImg: {
        img: 'v1643880379/people/testimonials/matti-puolitaival.png',
        alt: 'lorem ipsum',
      },
    },
  ],
};
