declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    data: ObjectConstructor;
    name: {
        type: StringConstructor;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
    };
    background: {
        type: StringConstructor;
    };
    loop: {
        type: (BooleanConstructor | NumberConstructor)[];
    };
    autoplay: {
        type: BooleanConstructor;
    };
    renderer: {
        type: StringConstructor;
    };
}>, {}, {
    style: {};
}, {
    classList(): string[];
    widthValue(): string | number;
    heightValue(): string | number;
    backgroundValue(): string;
    loopValue(): number | true;
    autoplayValue(): true;
    nameValue(): string;
    rendererValue(): string;
    options(): {
        renderer: string;
        loop: number | true;
        autoplay: true;
        width: any;
        height: any;
        animationData: Record<string, any> | undefined;
        noMargin: boolean;
    };
}, {
    initStyle(): void;
    getSize(size: any): any;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    data: ObjectConstructor;
    name: {
        type: StringConstructor;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
    };
    background: {
        type: StringConstructor;
    };
    loop: {
        type: (BooleanConstructor | NumberConstructor)[];
    };
    autoplay: {
        type: BooleanConstructor;
    };
    renderer: {
        type: StringConstructor;
    };
}>> & Readonly<{}>, {
    autoplay: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
