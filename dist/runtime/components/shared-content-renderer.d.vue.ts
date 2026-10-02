declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<{}, {}, {}, {
    isStorybook(): boolean;
    value(): unknown;
    tag(): {};
    computedClass(): import("vue").ClassValue;
    bodyNodes(): any;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
    ContentNode: {
        name: string;
        props: {
            node: {
                type: (ArrayConstructor | StringConstructor)[];
                required: boolean;
            };
        };
        methods: {
            getNodeTag(node: any): any;
            getNodeAttrs(node: any): any;
            getNodeClass(node: any): any;
            getNodeChildren(node: any): any[];
            isKramdownAttr(child: any): boolean;
            renderNode(node: any): any;
        };
        render(): any;
    };
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
