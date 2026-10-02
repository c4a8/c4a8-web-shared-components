declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    headline: {
        type: StringConstructor;
        default: null;
    };
    table: {
        type: ArrayConstructor;
        required: true;
    };
    hideContainer: {
        type: BooleanConstructor;
        default: boolean;
    };
    theme: {
        type: StringConstructor;
        default: string;
    };
    classes: {
        type: StringConstructor;
        default: string;
    };
    head: {
        type: BooleanConstructor;
        default: boolean;
    };
    agenda: {
        type: BooleanConstructor;
        default: boolean;
    };
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    headBg: {
        type: StringConstructor;
    };
    headColor: {
        type: StringConstructor;
    };
    bgImg: {
        type: StringConstructor;
    };
}>, {}, {}, {
    tableHideContainer(): boolean;
    styleClass(): string;
    tableRows(): unknown[];
}, {
    setStyle(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    headline: {
        type: StringConstructor;
        default: null;
    };
    table: {
        type: ArrayConstructor;
        required: true;
    };
    hideContainer: {
        type: BooleanConstructor;
        default: boolean;
    };
    theme: {
        type: StringConstructor;
        default: string;
    };
    classes: {
        type: StringConstructor;
        default: string;
    };
    head: {
        type: BooleanConstructor;
        default: boolean;
    };
    agenda: {
        type: BooleanConstructor;
        default: boolean;
    };
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    headBg: {
        type: StringConstructor;
    };
    headColor: {
        type: StringConstructor;
    };
    bgImg: {
        type: StringConstructor;
    };
}>> & Readonly<{}>, {
    head: boolean;
    headline: string;
    sticky: boolean;
    theme: string;
    classes: string;
    hideContainer: boolean;
    agenda: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
