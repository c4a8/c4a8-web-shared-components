declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    detailColor: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    location: {
        type: StringConstructor;
        default: string;
    };
    light: {
        type: BooleanConstructor;
        default: boolean;
    };
    headlineLevel: {
        type: StringConstructor;
        default: string;
    };
    headlineClasses: {
        type: StringConstructor;
        default: string;
    };
    introText: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
    image: {
        type: ObjectConstructor;
        default: () => {
            img: string;
            alt: string;
        };
    };
    body: {
        type: ObjectConstructor;
        default: null;
    };
}>, {}, {}, {
    computedName(): string;
    computedSubline(): string;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    detailColor: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    location: {
        type: StringConstructor;
        default: string;
    };
    light: {
        type: BooleanConstructor;
        default: boolean;
    };
    headlineLevel: {
        type: StringConstructor;
        default: string;
    };
    headlineClasses: {
        type: StringConstructor;
        default: string;
    };
    introText: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
    image: {
        type: ObjectConstructor;
        default: () => {
            img: string;
            alt: string;
        };
    };
    body: {
        type: ObjectConstructor;
        default: null;
    };
}>> & Readonly<{}>, {
    name: string;
    body: Record<string, any>;
    title: string;
    description: string;
    image: Record<string, any>;
    location: string;
    headlineClasses: string;
    introText: string;
    headlineLevel: string;
    light: boolean;
    detailColor: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
