declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    grid: {
        type: ArrayConstructor;
        required: true;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    absolute: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {
    animatedValues: {};
}, {
    peopleSquareSize(): number;
}, {
    isExtended(element: any): boolean;
    getElementStyle(element: any, index: any): {
        gridRowStart: any;
        gridRowEnd: any;
        gridColumnStart: any;
        gridColumnEnd: any;
    } | {
        gridRowStart?: undefined;
        gridRowEnd?: undefined;
        gridColumnStart?: undefined;
        gridColumnEnd?: undefined;
    };
    numberValue(n: any): any;
    playAnimation(n: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    grid: {
        type: ArrayConstructor;
        required: true;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    absolute: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    height: number;
    absolute: boolean;
    width: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
