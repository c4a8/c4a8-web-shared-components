declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    spacing: {
        type: StringConstructor;
        default: string;
    };
    headline: {
        type: StringConstructor;
        default: null;
    };
    headlineLevel: {
        type: NumberConstructor;
        default: number;
    };
    subline: {
        type: StringConstructor;
        default: null;
    };
    contents: {
        type: ArrayConstructor;
        required: true;
    };
    bgColor: {
        type: StringConstructor;
        default: null;
    };
    bgColorHover: {
        type: StringConstructor;
        default: null;
    };
    cta: {
        type: ObjectConstructor;
        default: () => {
            text: null;
            toggleText: null;
            href: null;
        };
    };
    limit: {
        type: NumberConstructor;
        default: number;
    };
    maxLimit: {
        type: NumberConstructor;
        default: number;
    };
    gridSize: {
        type: NumberConstructor;
        default: number;
    };
}>, {}, {
    toggleLimitValue: number;
    limitValue: number;
    lang: string;
    isMobile: boolean;
}, {
    containerClasses(): string[];
    columnClass(): string;
    toggleCtaText(): any;
    slicedContents(): unknown[];
    showCta(): boolean;
}, {
    toggleLimit(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    spacing: {
        type: StringConstructor;
        default: string;
    };
    headline: {
        type: StringConstructor;
        default: null;
    };
    headlineLevel: {
        type: NumberConstructor;
        default: number;
    };
    subline: {
        type: StringConstructor;
        default: null;
    };
    contents: {
        type: ArrayConstructor;
        required: true;
    };
    bgColor: {
        type: StringConstructor;
        default: null;
    };
    bgColorHover: {
        type: StringConstructor;
        default: null;
    };
    cta: {
        type: ObjectConstructor;
        default: () => {
            text: null;
            toggleText: null;
            href: null;
        };
    };
    limit: {
        type: NumberConstructor;
        default: number;
    };
    maxLimit: {
        type: NumberConstructor;
        default: number;
    };
    gridSize: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{}>, {
    headline: string;
    limit: number;
    spacing: string;
    subline: string;
    cta: Record<string, any>;
    headlineLevel: number;
    bgColor: string;
    maxLimit: number;
    gridSize: number;
    bgColorHover: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
