export function defaultOptions({ length, centerPadding }: {
    length: any;
    centerPadding: any;
}): {
    rows: number;
    slidesToShow: number;
    slidesToScroll: number;
    prevArrow: string;
    nextArrow: string;
    dots: boolean;
    centerMode: boolean;
    dotsClass: string;
    responsive: ({
        breakpoint: number;
        settings: {
            slidesToShow: number;
            slidesToScroll: number;
            centerMode?: undefined;
            infinite?: undefined;
            centerPadding?: undefined;
            dots?: undefined;
        };
    } | {
        breakpoint: number;
        settings: {
            centerMode: boolean;
            infinite: boolean;
            centerPadding: any;
            slidesToShow: number;
            slidesToScroll: number;
            dots: boolean;
        };
    })[];
};
declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    headline: StringConstructor;
    headlineLevel: StringConstructor;
    headlineClasses: StringConstructor;
    spacing: StringConstructor;
    subline: StringConstructor;
    hideContainer: {
        default: boolean;
    };
    hideBackground: {
        default: boolean;
    };
    overflow: BooleanConstructor;
    bgColor: StringConstructor;
    centerPadding: NumberConstructor;
    options: ObjectConstructor;
    wrapped: {
        type: BooleanConstructor;
        default: boolean;
    };
    v2: {
        type: BooleanConstructor;
        default: boolean;
    };
    fade: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {
    defaultBgColor: string;
    instanceId: number;
    swiperReady: boolean;
}, {
    classList(): string[];
    jsonOptions(): any;
    getSpacing(): string;
    headlineLevelValue(): string;
    headlineClassesValue(): string;
    centerPaddingValue(): string | null;
    carouselOptions(): any;
    childrenLength(): number;
    children(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    subChilds(): import("vue").VNodeNormalizedChildren;
    hideBackgroundValue(): boolean;
    hideContainerValue(): boolean;
    backgroundClass(): string;
    backgroundColor(): string;
    style(): {
        'background-color': string;
    } | undefined;
    hasControls(): boolean;
    hasPagination(): boolean;
    v2Options(): {
        [x: string]: any;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    headline: StringConstructor;
    headlineLevel: StringConstructor;
    headlineClasses: StringConstructor;
    spacing: StringConstructor;
    subline: StringConstructor;
    hideContainer: {
        default: boolean;
    };
    hideBackground: {
        default: boolean;
    };
    overflow: BooleanConstructor;
    bgColor: StringConstructor;
    centerPadding: NumberConstructor;
    options: ObjectConstructor;
    wrapped: {
        type: BooleanConstructor;
        default: boolean;
    };
    v2: {
        type: BooleanConstructor;
        default: boolean;
    };
    fade: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    fade: boolean;
    hideContainer: boolean;
    overflow: boolean;
    hideBackground: boolean;
    wrapped: boolean;
    v2: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
