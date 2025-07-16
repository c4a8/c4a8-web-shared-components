import Circle from "../../components/circle";

export default {
    component: Circle,
    argTypes: {
        circleContent: {
            description: 'String to be displayed inside the circle',
            type: 'string',
            required: false
        },
        circleIcon: {
            description: 'Icon to be displayed inside the circle',
            type: 'string',
            required: false
        },

        color: {
            description: 'Color of the circle itself',
            type: 'string',
            defaultValue: 'var(--color-yellow)',
        },
    },
    title: 'Components/Circle',
};

export const WithIcon = {
    args: {
        circleContent: '1',
    },
};

export const WithNumber = {
    args: {
      circleIcon: 'checkbox',
    },
};
