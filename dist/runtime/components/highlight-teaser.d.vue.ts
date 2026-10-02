declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    entries: ArrayConstructor;
    limit: NumberConstructor;
    spacing: StringConstructor;
    reduceAnimation: {
        default: null;
    };
    animationColor: StringConstructor;
}>, {}, {
    index: number;
    lastIndex: number;
    inAnimation: boolean;
}, {
    classList(): (string | undefined)[];
    style(): string;
    reducedAnimationValue(): boolean;
    limitValue(): number;
    isFirstEntry(): boolean;
    isLastEntry(): boolean;
    activeEntry(): unknown;
    currentPage(): number;
    lastPage(): number;
    pagination(): boolean;
    limitedEntries(): unknown[];
    sliderOptions(): {
        rows: number;
        slidesToShow: number;
        slidesToScroll: number;
        dots: boolean;
        centerMode: boolean;
        fade: boolean;
        dotsClass: string;
        arrows: boolean;
        responsive: {
            breakpoint: number;
            settings: {
                centerMode: boolean;
                infinite: boolean;
                centerPadding: string;
                slidesToShow: number;
                slidesToScroll: number;
                dots: boolean;
                fade: boolean;
            };
        }[];
    };
    rightDirection(): boolean;
}, {
    handleTransitionsEnd(): void;
    next(): void;
    prev(): void;
    switchSlide(next: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    entries: ArrayConstructor;
    limit: NumberConstructor;
    spacing: StringConstructor;
    reduceAnimation: {
        default: null;
    };
    animationColor: StringConstructor;
}>> & Readonly<{}>, {
    reduceAnimation: null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
