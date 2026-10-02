declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    detailColor: {
        type: StringConstructor;
        default: string;
    };
    detailShapeColor: {
        type: StringConstructor;
        default: string;
    };
    headlineText: StringConstructor;
    author: ArrayConstructor;
    headlineLevel: {
        type: StringConstructor;
        default: string;
    };
    headlineClasses: {
        type: StringConstructor;
        default: string;
    };
    form: ObjectConstructor;
    image: ObjectConstructor;
    teaserImage: ObjectConstructor;
    badge: ObjectConstructor;
    showBadge: {
        type: BooleanConstructor;
        default: boolean;
    };
    moment: StringConstructor;
    time: StringConstructor;
    lang: {
        type: StringConstructor;
        default: string;
    };
    body: ObjectConstructor;
    content: ObjectConstructor;
    bottomText: StringConstructor;
    price: StringConstructor;
    odooForm: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {
    hasContent(): Record<string, any> | undefined;
    introData(): {
        badge: Record<string, any> | undefined;
        image: Record<string, any> | undefined;
        moment: string | undefined;
        time: string | undefined;
        price: string | undefined;
        headlineText: string | undefined;
        headlineClasses: string;
        name: unknown[] | undefined;
        showBadge: boolean;
    };
    contentData(): {
        headline: any;
        intro: any;
        paragraphs: any;
        bulletpoints: any;
        headlineLevel: string;
        headlineClasses: string;
    };
    headlineLevelComputed(): string;
    headlineClassesComputed(): string;
    stickyOptions(): string;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    detailColor: {
        type: StringConstructor;
        default: string;
    };
    detailShapeColor: {
        type: StringConstructor;
        default: string;
    };
    headlineText: StringConstructor;
    author: ArrayConstructor;
    headlineLevel: {
        type: StringConstructor;
        default: string;
    };
    headlineClasses: {
        type: StringConstructor;
        default: string;
    };
    form: ObjectConstructor;
    image: ObjectConstructor;
    teaserImage: ObjectConstructor;
    badge: ObjectConstructor;
    showBadge: {
        type: BooleanConstructor;
        default: boolean;
    };
    moment: StringConstructor;
    time: StringConstructor;
    lang: {
        type: StringConstructor;
        default: string;
    };
    body: ObjectConstructor;
    content: ObjectConstructor;
    bottomText: StringConstructor;
    price: StringConstructor;
    odooForm: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    lang: string;
    headlineClasses: string;
    headlineLevel: string;
    showBadge: boolean;
    detailColor: string;
    detailShapeColor: string;
    odooForm: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
