declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    successStory: {
        type: ObjectConstructor;
        required: true;
    };
    level: {
        type: StringConstructor;
        default: string;
    };
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    spacing: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {
    successStorySlider(): boolean;
    successStoryLevel(): string;
    successStorySticky(): boolean;
    successStorySpacing(): string;
    successStoryHeadlineClass(): any;
    slickOptions(): {
        rows: number;
        slidesToShow: number;
        slidesToScroll: number;
        prevArrow: string;
        nextArrow: string;
        dots: boolean;
        centerMode: boolean;
        dotsClass: string;
        responsive: {
            breakpoint: number;
            settings: {
                centerMode: boolean;
                infinite: boolean;
                centerPadding: string;
                slidesToShow: number;
                slidesToScroll: number;
            };
        }[];
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    successStory: {
        type: ObjectConstructor;
        required: true;
    };
    level: {
        type: StringConstructor;
        default: string;
    };
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    spacing: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    sticky: boolean;
    spacing: string;
    level: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
