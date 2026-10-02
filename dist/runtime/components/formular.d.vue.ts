declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    form: ObjectConstructor;
    light: {
        default: null;
    };
    analytics: {
        default: null;
    };
    space: StringConstructor;
    container: {
        default: null;
    };
    ajax: {
        default: null;
    };
    uncentered: {
        default: null;
    };
    replaceValue: {
        default: null;
    };
    customValidation: {
        default: null;
    };
    options: ObjectConstructor;
    hasUuid: {
        default: null;
    };
    hasAnimation: {
        default: null;
    };
    useTranslation: {
        type: BooleanConstructor;
        default: boolean;
    };
    hasRecaptcha: {
        type: BooleanConstructor;
        default: boolean;
    };
    odoo: {
        type: BooleanConstructor;
        default: boolean;
    };
    showLoader: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    config: {};
    formId: string;
}, {
    originalAction: string;
    formAction: string;
    formInstance: null;
    novalidateValue: null;
    errors: never[];
    siteKey: null;
    loadingDelay: number;
    sleepDelay: number;
    loading: {};
    hasLoading: boolean;
    hasLoader: boolean;
    turnstileReady: boolean;
}, {
    loaderClasses(): string[];
    classList(): string[];
    reCaptchaField(): any;
    novalidate(): null;
    hasAnimationValue(): boolean;
    rowClassList(): string[];
    wrapperClassList(): string[];
    headlineClassList(): string[];
    sublineClassList(): string[];
    formClassList(): string[];
    positionValue(): any;
    method(): any;
    preparedBlocks(): any[];
}, {
    startLoading(): void;
    stopLoading(): void;
    getTranslatedText(text: any): any;
    hasError(field: any): undefined;
    getOptions(field: any): any;
    getBlockClassList(block: any): string[];
    getFieldClassList(field: any): string[];
    getFieldId(field: any): any;
    getId(field: any): any;
    getName(field: any): any;
    updateAction(newAction: any): void;
    handleSubmit(e: any): void;
    handleFormFieldUpdate(e: any): void;
    validateField(field: any): boolean;
    addFieldValid(field: any): void;
    removeFieldError(field: any): void;
    addFieldError(field: any): void;
    validate(): boolean;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("error" | "submit")[], "error" | "submit", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    form: ObjectConstructor;
    light: {
        default: null;
    };
    analytics: {
        default: null;
    };
    space: StringConstructor;
    container: {
        default: null;
    };
    ajax: {
        default: null;
    };
    uncentered: {
        default: null;
    };
    replaceValue: {
        default: null;
    };
    customValidation: {
        default: null;
    };
    options: ObjectConstructor;
    hasUuid: {
        default: null;
    };
    hasAnimation: {
        default: null;
    };
    useTranslation: {
        type: BooleanConstructor;
        default: boolean;
    };
    hasRecaptcha: {
        type: BooleanConstructor;
        default: boolean;
    };
    odoo: {
        type: BooleanConstructor;
        default: boolean;
    };
    showLoader: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onSubmit?: ((...args: any[]) => any) | undefined;
    onError?: ((...args: any[]) => any) | undefined;
}>, {
    container: null;
    hasAnimation: null;
    ajax: null;
    light: null;
    analytics: null;
    replaceValue: null;
    uncentered: null;
    customValidation: null;
    hasUuid: null;
    useTranslation: boolean;
    hasRecaptcha: boolean;
    odoo: boolean;
    showLoader: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
