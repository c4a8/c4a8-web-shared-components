declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    headline: StringConstructor;
    headlineLevel: StringConstructor;
    headlineClasses: StringConstructor;
    subline: StringConstructor;
    sublineClasses: StringConstructor;
    spacing: StringConstructor;
    checks: {
        default: null;
    };
    classes: StringConstructor;
}>, {}, {}, {
    classList(): (string | null)[];
    checkCardsContainerClass(): string[];
    containerValue(): string;
    headlineLevelValue(): string;
    headlineClassesValue(): string;
    sublineClassesValue(): string;
    itemClass(): "check-card__slide";
    hasProducts(): any;
    carouselOptions(): {
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
                dots: boolean;
                centerMode?: undefined;
                infinite?: undefined;
                centerPadding?: undefined;
            };
        } | {
            breakpoint: number;
            settings: {
                centerMode: boolean;
                infinite: boolean;
                centerPadding: string;
                slidesToShow: number;
                slidesToScroll: number;
                dots: boolean;
            };
        })[];
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    headline: StringConstructor;
    headlineLevel: StringConstructor;
    headlineClasses: StringConstructor;
    subline: StringConstructor;
    sublineClasses: StringConstructor;
    spacing: StringConstructor;
    checks: {
        default: null;
    };
    classes: StringConstructor;
}>> & Readonly<{}>, {
    checks: null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
