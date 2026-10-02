declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    id: StringConstructor;
    json: ObjectConstructor;
    headline: StringConstructor;
    content: StringConstructor;
    moment: StringConstructor;
    time: StringConstructor;
    shapes: ArrayConstructor;
    author: ArrayConstructor;
    image: ObjectConstructor;
    teaserImage: ObjectConstructor;
    badge: ObjectConstructor;
    price: StringConstructor;
    cta: ObjectConstructor;
    variant: {
        type: NumberConstructor;
        default: number;
    };
    webcast: BooleanConstructor;
    teaser: BooleanConstructor;
    url: StringConstructor;
    index: NumberConstructor;
    textShadow: BooleanConstructor;
    bgColorRgb: StringConstructor;
    lang: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {
    authorNames(): string;
    imgSrcSets(): {
        srcSets: ({
            params: string;
            media: string;
        } | {
            params: string;
            media?: undefined;
        })[];
    } | null;
    computedStyles(): {
        '--utility-animation-index': number | undefined;
        '--event-teaser-background-color-rgb': string | undefined;
    };
    eventTeaserImageFullWidth(): "" | "event-teaser--image-full-width";
    ctaHref(): any;
}, {
    getShapeSettings(index: any, webcast: any): {
        peak: string;
        height: string;
        width: string;
        obliquity: undefined;
    };
    clickHandler(event: any): void;
    shapePeak(index: any): "left" | "right";
    shapeHeight(index: any): 10 | 12;
    shapeWidth(index: any): 80 | 237;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    id: StringConstructor;
    json: ObjectConstructor;
    headline: StringConstructor;
    content: StringConstructor;
    moment: StringConstructor;
    time: StringConstructor;
    shapes: ArrayConstructor;
    author: ArrayConstructor;
    image: ObjectConstructor;
    teaserImage: ObjectConstructor;
    badge: ObjectConstructor;
    price: StringConstructor;
    cta: ObjectConstructor;
    variant: {
        type: NumberConstructor;
        default: number;
    };
    webcast: BooleanConstructor;
    teaser: BooleanConstructor;
    url: StringConstructor;
    index: NumberConstructor;
    textShadow: BooleanConstructor;
    bgColorRgb: StringConstructor;
    lang: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    lang: string;
    webcast: boolean;
    variant: number;
    teaser: boolean;
    textShadow: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
