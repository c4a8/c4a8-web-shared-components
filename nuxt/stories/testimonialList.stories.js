import TestimonialListComponent from "../components/testimonial-list.vue";

export default {
  title: 'Components/TestimonialList',
  component: TestimonialListComponent,
  argTypes: {
  },
};

export const TestimonialList = {
  args: {
    headline: "Menschen bei glueckkanja",
    subline: 'In unserer Reihe "Inside glueckkanja" stellen sich Mitarbeitende vor und gewähren spannende Einblicke in ihre Aufgaben.',

    contents: [
      {
        name: "Max Mustermann",
        title: "Software Engineer",
        url: "#",
        contentImg: {
          img: "/people/testimonials/matti-puolitaival.png",
          cloudinary: true,
          alt: "Christian Kordel",
        },
        hidden: false,
        aspectRation: "4/3",
        bgColor: "var(--color-blue-light)",
      },
      {
        name: "Erika Musterfrau",
        title: "Product Manager",
        url: "#",
        contentImg: {
          img: "/people/testimonials/matti-puolitaival.png",
          cloudinary: true,
          alt: "Christian Kordel",
        },
        hidden: false
      }
    ],
  },
};
