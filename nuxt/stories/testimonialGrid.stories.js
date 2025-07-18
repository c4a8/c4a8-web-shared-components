import TestimonialGridComponent from "../components/testimonial-grid.vue";

export default {
    title: 'Components/TestimonialGrid',
    component: TestimonialGridComponent,
    argTypes: {
    },
};

export const TestimonialGrid = {
    args: {
        headline: "Menschen bei glueckkanja",
        subline: 'In unserer Reihe "Inside glueckkanja" stellen sich Mitarbeitende vor und gewähren spannende Einblicke in ihre Aufgaben.',
        cta: {
            text: "Weitere Stories ansehen",
            href: "https://www.glueckkanja.com",
            skin: "secondary",
            monochrome: true,
        },
        contents: [
            {
                name: "Max Mustermann",
                title: "Developer",
                video: {
                    thumb: "/thumbs/thumb-avd-foundation-webcast.jpg",

                    id: "0U_mV706VKI",
                    fullWidth: true,
                },

                bgColor: "var(--color-blue-light)",
            },
            {
                name: "Rainer Zufall",
                title: "Designer",
                video: {
                    thumb: "/thumbs/thumb-avd-foundation-webcast.jpg",

                    id: "0U_mV706VKI",
                    fullWidth: true,
                },
     
                bgColor: "var(--color-blue-light)",
            },
            {
                name: "John Doe",
                title: "Project Manager",
                video: {
                    thumb: "/thumbs/thumb-avd-foundation-webcast.jpg",
      
                    id: "0U_mV706VKI",
                    fullWidth: true,
                },

                bgColor: "var(--color-blue-light)",
            },
                        {
                name: "Erika Musterfrau",
                title: "HR Manager",
                video: {
                    thumb: "/thumbs/thumb-avd-foundation-webcast.jpg",

                    id: "0U_mV706VKI",
                    fullWidth: true,
                },

                bgColor: "var(--color-blue-light)",
            },
            {
                name: "Jane Doe",
                title: "Azure Specialist",
                video: {
                    thumb: "/thumbs/thumb-avd-foundation-webcast.jpg",

                    id: "0U_mV706VKI",
                    fullWidth: true,
                },
     
                bgColor: "var(--color-blue-light)",
            },
            {
                name: "John Smith",
                title: "Cloud Architect",
                video: {
                    thumb: "/thumbs/thumb-avd-foundation-webcast.jpg",
      
                    id: "0U_mV706VKI",
                    fullWidth: true,
                },

                bgColor: "var(--color-blue-light)",
            },

        ],


    },
};