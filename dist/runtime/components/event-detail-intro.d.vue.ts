declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    badge: {
        type: ObjectConstructor;
        default: null;
    };
    showBadge: BooleanConstructor;
    image: {
        type: ObjectConstructor;
        default: null;
    };
    teaserImage: {
        type: ObjectConstructor;
        default: null;
    };
    moment: {
        type: StringConstructor;
        default: null;
    };
    time: {
        type: StringConstructor;
        default: null;
    };
    headlineText: {
        type: StringConstructor;
        required: true;
    };
    headlineLevel: {
        type: StringConstructor;
        default: string;
    };
    headlineClasses: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: ArrayConstructor;
        default: null;
    };
    price: {
        type: StringConstructor;
        default: null;
    };
}>, {
    formattedMoment: import("vue").ComputedRef<any>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    badge: {
        type: ObjectConstructor;
        default: null;
    };
    showBadge: BooleanConstructor;
    image: {
        type: ObjectConstructor;
        default: null;
    };
    teaserImage: {
        type: ObjectConstructor;
        default: null;
    };
    moment: {
        type: StringConstructor;
        default: null;
    };
    time: {
        type: StringConstructor;
        default: null;
    };
    headlineText: {
        type: StringConstructor;
        required: true;
    };
    headlineLevel: {
        type: StringConstructor;
        default: string;
    };
    headlineClasses: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: ArrayConstructor;
        default: null;
    };
    price: {
        type: StringConstructor;
        default: null;
    };
}>> & Readonly<{}>, {
    name: unknown[];
    time: string;
    moment: string;
    image: Record<string, any>;
    headlineClasses: string;
    badge: Record<string, any>;
    headlineLevel: string;
    showBadge: boolean;
    teaserImage: Record<string, any>;
    price: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
