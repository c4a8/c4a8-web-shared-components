declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    options: ArrayConstructor;
    field: ObjectConstructor;
    id: {
        default: null;
    };
    name: {
        default: null;
    };
    formId: {
        default: null;
    };
    replaceValue: {
        default: null;
    };
    hasAnimation: {
        default: null;
    };
    hasError: BooleanConstructor;
}>, {}, {
    edited: boolean;
    userValue: null;
}, {
    classList(): string[];
    showInClasses(): any;
    groupClass(): "" | "mb-3" | "mb-8";
    errorId(): string;
    readonly(): "readonly" | null;
    required(): "required" | null;
    placeholder(): any;
    value(): any;
}, {
    getRequiredMsg(element: any): any;
    handleChange(e: any): void;
    handleChangeTextarea(e: any): void;
    handleReset(): void;
    handleFormFieldUpdate(e: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    options: ArrayConstructor;
    field: ObjectConstructor;
    id: {
        default: null;
    };
    name: {
        default: null;
    };
    formId: {
        default: null;
    };
    replaceValue: {
        default: null;
    };
    hasAnimation: {
        default: null;
    };
    hasError: BooleanConstructor;
}>> & Readonly<{}>, {
    name: null;
    id: null;
    hasAnimation: null;
    hasError: boolean;
    formId: null;
    replaceValue: null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
