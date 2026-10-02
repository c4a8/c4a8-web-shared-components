declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    centered: BooleanConstructor;
    level: {
        type: StringConstructor;
        default: string;
    };
    text: StringConstructor;
    spacing: {
        type: StringConstructor;
        default: string;
    };
    hasAnimation: BooleanConstructor;
    classes: StringConstructor;
    headlineClasses: StringConstructor;
    noContainer: BooleanConstructor;
}>, {}, {}, {
    headlineRowClassesValue(): string;
    containerClass(): "" | "container";
    animationClass(): "" | "utility-animation";
    animationStepClass(): "" | "fade-in-bottom";
    classList(): string[];
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    centered: BooleanConstructor;
    level: {
        type: StringConstructor;
        default: string;
    };
    text: StringConstructor;
    spacing: {
        type: StringConstructor;
        default: string;
    };
    hasAnimation: BooleanConstructor;
    classes: StringConstructor;
    headlineClasses: StringConstructor;
    noContainer: BooleanConstructor;
}>> & Readonly<{}>, {
    spacing: string;
    level: string;
    hasAnimation: boolean;
    centered: boolean;
    noContainer: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
