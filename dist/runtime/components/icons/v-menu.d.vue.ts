declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    settings: ObjectConstructor;
    color: StringConstructor;
    closed: BooleanConstructor;
}>, {}, {
    duration: string;
    begin: string;
    keyTimes: string;
}, {
    strokeWidth(): 2;
    effectiveKeySplines(): "0.19 1 0.2 1";
    style(): string;
    lineData(): {
        line1: {
            from: {
                x1: string;
                x2: string;
                y1: string;
                y2: string;
            };
            to: {
                x1: string;
                x2: string;
                y1: string;
                y2: string;
            };
        };
        line2: {
            from: {
                x1: string;
                x2: string;
                y1: string;
                y2: string;
            };
            to: {
                x1: string;
                x2: string;
                y1: string;
                y2: string;
            };
        };
        line3: {
            from: {
                x1: string;
                x2: string;
                y1: string;
                y2: string;
            };
            to: {
                x1: string;
                x2: string;
                y1: string;
                y2: string;
            };
        };
    };
}, {
    animateLines(mode: any, start: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    settings: ObjectConstructor;
    color: StringConstructor;
    closed: BooleanConstructor;
}>> & Readonly<{}>, {
    closed: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
