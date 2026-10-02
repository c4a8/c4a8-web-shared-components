declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    spacing: {
        type: StringConstructor;
        default: string;
    };
    image: StringConstructor;
    imageClasses: StringConstructor;
    imagePreset: StringConstructor;
    lottie: ObjectConstructor;
    float: BooleanConstructor;
    overline: StringConstructor;
    headlineText: StringConstructor;
    subline: StringConstructor;
    left: BooleanConstructor;
    alt: StringConstructor;
    cloudinary: BooleanConstructor;
    offset: BooleanConstructor;
    white: BooleanConstructor;
    copy: StringConstructor;
    list: ArrayConstructor;
    bgColor: StringConstructor;
    copyClasses: StringConstructor;
    copyLight: StringConstructor;
    background: StringConstructor;
    firstColWidth: NumberConstructor;
    secondColWidth: NumberConstructor;
    reduceSpacing: {
        type: BooleanConstructor;
        default: boolean;
    };
    cta: ObjectConstructor;
    modal: ObjectConstructor;
    href: StringConstructor;
    badge: ObjectConstructor;
    sticky: BooleanConstructor;
    noAnimation: BooleanConstructor;
    index: NumberConstructor;
    noGutters: {
        type: BooleanConstructor;
        default: boolean;
    };
    level: {
        type: StringConstructor;
        default: string;
    };
    headlineClasses: StringConstructor;
    listTitle: StringConstructor;
    listItems: ArrayConstructor;
}>, {}, {}, {
    textImageLightText(): "" | "text-light";
    textImageFirstColWidthXl(): number;
    textImageFirstColWidthComputed(): number;
    textImageSecondColWidthXl(): number;
    textImageSecondColWidthComputed(): number;
    textImageHeadlineClassesComputed(): string;
    textImageImgSrcSets(): string | null;
    textImagePreset(): string | null;
    textImageClass(): (string | {
        'text-image--bg-color': string | undefined;
        'is-sticky-scroller'?: undefined;
        'utility-animation utility-animation--enter-exit'?: undefined;
        'text-image--float'?: undefined;
    } | {
        'is-sticky-scroller': boolean;
        'text-image--bg-color'?: undefined;
        'utility-animation utility-animation--enter-exit'?: undefined;
        'text-image--float'?: undefined;
    } | {
        'utility-animation utility-animation--enter-exit': boolean;
        'text-image--bg-color'?: undefined;
        'is-sticky-scroller'?: undefined;
        'text-image--float'?: undefined;
    } | {
        'text-image--float': boolean;
        'text-image--bg-color'?: undefined;
        'is-sticky-scroller'?: undefined;
        'utility-animation utility-animation--enter-exit'?: undefined;
    })[];
    textImageStyle(): {
        'background-color': string | undefined;
        '--utility-animation-index': number | undefined;
        'background-image': string | undefined;
    };
    textImageFirstColClasses(): (string | undefined)[];
    textImageSecondColClasses(): (string | {
        'no-gutters': boolean;
        'pt-2 pt-lg-4'?: undefined;
        'fade-in-bottom'?: undefined;
        'text-white'?: undefined;
    } | {
        'pt-2 pt-lg-4': boolean;
        'no-gutters'?: undefined;
        'fade-in-bottom'?: undefined;
        'text-white'?: undefined;
    } | {
        'fade-in-bottom': boolean;
        'no-gutters'?: undefined;
        'pt-2 pt-lg-4'?: undefined;
        'text-white'?: undefined;
    } | {
        'text-white': boolean;
        'no-gutters'?: undefined;
        'pt-2 pt-lg-4'?: undefined;
        'fade-in-bottom'?: undefined;
    } | {
        'no-gutters'?: undefined;
        'pt-2 pt-lg-4'?: undefined;
        'fade-in-bottom'?: undefined;
        'text-white'?: undefined;
    })[];
    textImageLightTextClass(): string[];
}, {
    handleClick(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    spacing: {
        type: StringConstructor;
        default: string;
    };
    image: StringConstructor;
    imageClasses: StringConstructor;
    imagePreset: StringConstructor;
    lottie: ObjectConstructor;
    float: BooleanConstructor;
    overline: StringConstructor;
    headlineText: StringConstructor;
    subline: StringConstructor;
    left: BooleanConstructor;
    alt: StringConstructor;
    cloudinary: BooleanConstructor;
    offset: BooleanConstructor;
    white: BooleanConstructor;
    copy: StringConstructor;
    list: ArrayConstructor;
    bgColor: StringConstructor;
    copyClasses: StringConstructor;
    copyLight: StringConstructor;
    background: StringConstructor;
    firstColWidth: NumberConstructor;
    secondColWidth: NumberConstructor;
    reduceSpacing: {
        type: BooleanConstructor;
        default: boolean;
    };
    cta: ObjectConstructor;
    modal: ObjectConstructor;
    href: StringConstructor;
    badge: ObjectConstructor;
    sticky: BooleanConstructor;
    noAnimation: BooleanConstructor;
    index: NumberConstructor;
    noGutters: {
        type: BooleanConstructor;
        default: boolean;
    };
    level: {
        type: StringConstructor;
        default: string;
    };
    headlineClasses: StringConstructor;
    listTitle: StringConstructor;
    listItems: ArrayConstructor;
}>> & Readonly<{}>, {
    cloudinary: boolean;
    sticky: boolean;
    spacing: string;
    left: boolean;
    level: string;
    white: boolean;
    float: boolean;
    offset: boolean;
    noAnimation: boolean;
    reduceSpacing: boolean;
    noGutters: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
