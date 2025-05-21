export default EventForm;
declare namespace EventForm {
    let uncentered: boolean;
    let ctaText: string;
    namespace cta {
        let skin: string;
    }
    let method: string;
    let action: string;
    let fields: ({
        label: string;
        type: string;
        id: string;
        required: boolean;
        requiredMsg: string;
        col?: undefined;
        rowStart?: undefined;
        rowEnd?: undefined;
        value?: undefined;
    } | {
        label: string;
        type: string;
        id: string;
        required: boolean;
        requiredMsg: string;
        col: number;
        rowStart: boolean;
        rowEnd: boolean;
        value?: undefined;
    } | {
        type: string;
        id: string;
        value: string;
        label?: undefined;
        required?: undefined;
        requiredMsg?: undefined;
        col?: undefined;
        rowStart?: undefined;
        rowEnd?: undefined;
    } | {
        type: string;
        id: string;
        label?: undefined;
        required?: undefined;
        requiredMsg?: undefined;
        col?: undefined;
        rowStart?: undefined;
        rowEnd?: undefined;
        value?: undefined;
    })[];
}
