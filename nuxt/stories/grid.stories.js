import GridComponent from '../components/grid.vue';



export default {
    component: GridComponent,
    argTypes: {},
    title: 'Components/Grid',
};

export const Default = {
    args: {
        items: [
            {
                title: "100%",
                text: "Wir nutzen die Cloud vollständig und möchten nun Aufwände reduzieren"
            },
            {
                title: "50%",
                text: "Wir sind bereits in der Cloud aber es funktioniert noch nicht so richtig."
            },
            {
                title: "0%",
                text: "Wir wollen unsere Prozesse in die Cloud ziehen aber stehen noch ganz am Anfang"
            }
        ],
        headline: "Wo stehen Sie im Moment?",
        headlineLevel: "h2",
        bgColor: 'var(--color-blue-dark)',
        light: true,
    },
};

