declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    classes: StringConstructor;
    overline: StringConstructor;
    headline: StringConstructor;
    locationHeadline: StringConstructor;
    contactHeadline: StringConstructor;
    locationEntries: ObjectConstructor;
    locationCta: ObjectConstructor;
    contactEntries: ArrayConstructor;
    landingpageCta: ObjectConstructor;
    images: ArrayConstructor;
    backgroundColor: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {
    imgSrcSets(): {
        srcSets: {
            params: string;
        }[];
    };
    classList(): string;
    sliderImages(): unknown[];
    sliderConfig(): {
        hideContainer: boolean;
        hideBackground: boolean;
        options: {
            navigation: boolean;
            controlsClass: string;
            loop: boolean;
            breakpoints: {
                320: {
                    slidesPerView: number;
                    spaceBetween: number;
                };
                576: {
                    slidesPerView: number;
                    spaceBetween: number;
                };
                992: {
                    slidesPerView: number;
                    spaceBetween: number;
                };
                1200: {
                    slidesPerView: number;
                    spaceBetween: number;
                };
            };
        };
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    classes: StringConstructor;
    overline: StringConstructor;
    headline: StringConstructor;
    locationHeadline: StringConstructor;
    contactHeadline: StringConstructor;
    locationEntries: ObjectConstructor;
    locationCta: ObjectConstructor;
    contactEntries: ArrayConstructor;
    landingpageCta: ObjectConstructor;
    images: ArrayConstructor;
    backgroundColor: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    backgroundColor: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
