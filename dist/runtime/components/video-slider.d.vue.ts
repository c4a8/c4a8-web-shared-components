declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    headline: {
        type: ObjectConstructor;
    };
    subline: {
        type: StringConstructor;
        required: true;
    };
    tabs: {
        type: ArrayConstructor;
        required: true;
    };
    cta: {
        type: ObjectConstructor;
    };
}>, {}, {
    triggerButtonClick: boolean;
    currentTabIndex: number;
    currentTab: null;
    slickElement: null;
    options: {
        centerMode: boolean;
        infinite: boolean;
        centerPadding: string;
        slidesToShow: number;
        responsive: {
            breakpoint: number;
            settings: {
                centerPadding: string;
            };
        }[];
        prevArrow: string;
        nextArrow: string;
    };
}, {
    tabCount(): number;
    copyColor(): any;
    backgroundColor(): any;
    style(): string;
}, {
    bindEvents(): void;
    handlePositionChange(_: any, slick: any, currentSlide: any): void;
    handleAfterChangeClick(): void;
    handleCtaClick(e: any): void;
    handleTabClick(index: any): void;
    handleVideoInnerEvent(index: any): void;
    handleSliderClick(event: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    headline: {
        type: ObjectConstructor;
    };
    subline: {
        type: StringConstructor;
        required: true;
    };
    tabs: {
        type: ArrayConstructor;
        required: true;
    };
    cta: {
        type: ObjectConstructor;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
