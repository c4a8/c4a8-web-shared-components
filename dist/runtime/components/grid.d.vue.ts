declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    items: {
        type: ArrayConstructor;
        default: () => never[];
    };
    headline: StringConstructor;
    headlineLevel: StringConstructor;
    headlineClasses: StringConstructor;
    light: {
        default: boolean;
    };
    bgColor: StringConstructor;
}>, {}, {}, {
    headlineLevelValue(): string;
    headlineClassesValue(): string;
    style(): {
        backgroundColor: string | undefined;
        '--color-copy': string | null;
        '--color-headlines': string | null;
    };
}, {
    getItemStyle(index: any): string;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: ArrayConstructor;
        default: () => never[];
    };
    headline: StringConstructor;
    headlineLevel: StringConstructor;
    headlineClasses: StringConstructor;
    light: {
        default: boolean;
    };
    bgColor: StringConstructor;
}>> & Readonly<{}>, {
    items: unknown[];
    light: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
