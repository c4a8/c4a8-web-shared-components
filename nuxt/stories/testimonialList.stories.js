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
          contentImg: "https://via.placeholder.com/150",
          cornerImg: "https://via.placeholder.com/50",
          hidden: false
        },
        {
          name: "Erika Musterfrau",
          title: "Product Manager",
          url: "#",
          contentImg: "https://via.placeholder.com/150",
          cornerImg: "https://via.placeholder.com/50",
          hidden: false
        }
      ],
    },
};
