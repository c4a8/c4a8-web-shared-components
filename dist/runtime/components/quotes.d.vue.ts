declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    quotes: {
        type: ObjectConstructor;
        required: true;
    };
    spacing: {
        type: StringConstructor;
        default: string;
    };
    noFullscreen: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {
    quotesSpacing(): string;
    quotesNoFullscreen(): boolean;
    quotesImagesCount(): any;
    quotesImage(): boolean;
    quotesSlidesToShow(): 1 | 1.05;
    quotesColSize(): number;
    slickOptions(): {
        rows: number;
        centerMode: boolean;
        centerPadding: string;
        prevArrow: string;
        nextArrow: string;
        dots: boolean;
        dotsClass: string;
        slidesToShow: number;
        slidesToScroll: number;
        infinite: boolean;
        responsive: {
            breakpoint: number;
            settings: {
                slidesToShow: number;
            };
        }[];
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    quotes: {
        type: ObjectConstructor;
        required: true;
    };
    spacing: {
        type: StringConstructor;
        default: string;
    };
    noFullscreen: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    spacing: string;
    noFullscreen: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
