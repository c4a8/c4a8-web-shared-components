import { type } from "jquery";
import TextTeaserComponent from "../components/text-teaser.vue";

export default {
    title: 'Components/Text Teaser',
    component: TextTeaserComponent,
    argTypes: {
        ctaList: {
            description: 'List of call-to-action items',
            type: Array,
        },
        spacing: {
            description: 'Spacing around the component',
            type: String,
        },
        background: {
            description: 'Background image URL',
            type: String,
        },
        bgColor: {
            description: 'Background color',
            type: String,
        },
        logo: {
            description: 'Logo object containing URL and alt text',
            type: Object,
            properties: {
                url: {
                    type: String,
                    description: 'Logo image URL',
                },
                alt: {
                    type: String,
                    description: 'Alternative text for the logo',
                },
            },
        },
        copy: {
            description: 'Text content for the teaser',
            type: String,
        },
    },
};

export const TextTeaser = {
    args: {
        copy: "Als Advanced Specialization Partner können Sie über uns am Azure Migration Program teilnehmen und von attraktiven Rabatten und Azure Credits profitieren.",
        background: "/assets/svg/shape-5.svg",
        bgColor: "var(--color-black-4)",
        spacing: "",
        ctaList: [
            {
                text: "Sprechen Sie uns an",
                href: "mailto:leads@glueckkanja.com",
            },
        ]
    },
};