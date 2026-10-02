declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    targetDate: {
        type: (DateConstructor | StringConstructor)[];
        required: true;
    };
    bgColor: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    fontColor: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>, {}, {
    timeLeft: {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    };
    intervalId: null;
}, {}, {
    calculateTimeLeft(target: any): {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    };
    updateCountdown(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    targetDate: {
        type: (DateConstructor | StringConstructor)[];
        required: true;
    };
    bgColor: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    fontColor: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>> & Readonly<{}>, {
    bgColor: string;
    fontColor: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
