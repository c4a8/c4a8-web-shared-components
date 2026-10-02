declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    href: {
        type: StringConstructor;
    };
    name: {
        type: StringConstructor;
    };
    title: {
        type: StringConstructor;
    };
    img: {
        type: ObjectConstructor;
        required: false;
    };
    imgPosition: {
        type: StringConstructor;
        default: string;
    };
    cloudinary: {
        type: BooleanConstructor;
        default: boolean;
    };
    video: {
        type: ObjectConstructor;
        required: false;
    };
    cornerImg: {
        type: ObjectConstructor;
        default: null;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    bgColorHover: {
        type: StringConstructor;
        default: string;
    };
    aspectRatio: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {
    aspectRatioClass(): string;
    imgObjectPositionClass(): string;
    cornerPosition(): "testimonial-teaser__corner--left" | "testimonial-teaser__corner--right";
    bgStyling(): string;
    nameReplaced(): string;
    imgSrcSet(): any;
}, {
    triggerVideoStart(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    href: {
        type: StringConstructor;
    };
    name: {
        type: StringConstructor;
    };
    title: {
        type: StringConstructor;
    };
    img: {
        type: ObjectConstructor;
        required: false;
    };
    imgPosition: {
        type: StringConstructor;
        default: string;
    };
    cloudinary: {
        type: BooleanConstructor;
        default: boolean;
    };
    video: {
        type: ObjectConstructor;
        required: false;
    };
    cornerImg: {
        type: ObjectConstructor;
        default: null;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    bgColorHover: {
        type: StringConstructor;
        default: string;
    };
    aspectRatio: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    cloudinary: boolean;
    bgColor: string;
    aspectRatio: string;
    bgColorHover: string;
    imgPosition: string;
    cornerImg: Record<string, any>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
