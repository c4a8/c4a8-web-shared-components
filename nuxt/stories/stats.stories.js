import StatsComponent from "../components/stats.vue";

export default {
    title: 'Components/Stats',
    component: StatsComponent,
    argTypes: {
    },
};

export const Stats = {
    args: {
        headline: "Fast Facts",
        items: [
            {
                value: "220+",
                label: "Mitarbeiter",
            },
            {
                value: "1K+",
                label: "Kunden weltweit",
            },
            {
                value: "250K",
                label: "Future Workplace Clients",
            },
            {
                value: "25+",
                label: "Jahre Erfahrung",
            },
        ],
    },
};