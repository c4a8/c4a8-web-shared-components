declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    headline: {
        type: StringConstructor;
        default: null;
    };
    headlineLevel: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    subline: {
        type: StringConstructor;
        default: null;
    };
    slides: {
        type: ArrayConstructor;
        default: () => never[];
    };
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    ignoreLang: {
        type: BooleanConstructor;
        default: boolean;
    };
    spacing: {
        type: StringConstructor;
        default: string;
    };
    lang: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {
    testimonialsSliderHeadline(): string;
    testimonialsSliderHeadlineLevel(): string | number;
    testimonialsSliderSubline(): string;
    testimonialsSliderSticky(): boolean;
    testimonialsSliderSpacing(): string;
    sortedSlides(): unknown[];
    filteredSlides(): unknown[];
    slickOptions(): {
        dots: boolean;
        dotsClass: string;
        prevArrow: string;
        nextArrow: string;
        slidesToScroll: number;
        slidesToShow: number;
        responsive: ({
            breakpoint: number;
            settings: {
                slidesToShow: number;
                slidesToScroll: number;
                variableWidth: boolean;
            };
            todobreakpoint?: undefined;
        } | {
            todobreakpoint: number;
            settings: string;
            breakpoint?: undefined;
        })[];
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    headline: {
        type: StringConstructor;
        default: null;
    };
    headlineLevel: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    subline: {
        type: StringConstructor;
        default: null;
    };
    slides: {
        type: ArrayConstructor;
        default: () => never[];
    };
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    ignoreLang: {
        type: BooleanConstructor;
        default: boolean;
    };
    spacing: {
        type: StringConstructor;
        default: string;
    };
    lang: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    lang: string;
    headline: string;
    sticky: boolean;
    spacing: string;
    subline: string;
    headlineLevel: string | number;
    slides: unknown[];
    ignoreLang: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
