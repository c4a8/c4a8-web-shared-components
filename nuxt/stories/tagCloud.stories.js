import TagCloudComponent from "../components/tag-cloud.vue";

export default {
    title: 'Components/Tag Cloud',
    component: TagCloudComponent,
    argTypes: {
    },
};

export const TagCloud = {
    args: {
        headline: "Woran wir arbeiten",
        items: [
            { title: 'Microsoft Teams', link: '#' },
            { title: 'Azure', link: '#' },
            { title: 'Microsoft Defender', link: '#' },
            { title: 'Collaboration', link: '#' },
            { title: 'Microsoft 365', link: '#' },
            { title: '100 % Cloud', link: '#' },
            { title: 'Security', link: '#' },
            { title: 'Modern Workplace', link: '#' },
            { title: 'Cloud Security Operations Center', link: '#' },
            { title: 'Azure Foundation', link: '#' },
            { title: 'Managed Services', link: '#' }
        ]
    },
};

