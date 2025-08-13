import JobListComponent from "../components/job-list.vue";

export default {
    title: 'Components/Job List',
    component: JobListComponent,
    argTypes: {
    },
};

export const JobList = {
    args: {
        clientName: "c4a8",
        maxItems: 4,
        expandText: "Weitere Stellenanzeigen",
        detailUrl: "/de/jobs/",
        headlineText: "Headline Text",
        sublineText: "Subline Text",
        entries: [
            {
                title: "Software Engineer",
                gender: "male",
                city: "Berlin",
                team: "Development",
                positionType: "full-time",
                isInvisible: false,
                id: 1
            },
            {
                title: "Product Manager",
                gender: "female",
                city: "Munich",
                team: "Product",
                positionType: "part-time",
                isInvisible: false,
                id: 2
            }
        ],

    
    },
};

