declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    list: ArrayConstructor;
    hideData: {
        type: ArrayConstructor;
        default: () => never[];
    };
    sort: ObjectConstructor;
    limit: NumberConstructor;
    query: ObjectConstructor;
    isRecent: BooleanConstructor;
    hideItems: {
        type: FunctionConstructor;
        default: null;
    };
    strategy: {
        type: StringConstructor;
    };
}>, {
    currentLocale: string;
}, {}, {
    structuredList(): {
        url: any;
        date: any;
        moment: any;
        excerpt: any;
    }[] | undefined;
}, {
    addPathPrefix(path: any, lang: any, strategy: any): any;
    extractDate(path: any): any;
    getDate(dateString: any): any;
    isDate(dateString: any): boolean | null;
    cleanDate(date: any): any;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    list: ArrayConstructor;
    hideData: {
        type: ArrayConstructor;
        default: () => never[];
    };
    sort: ObjectConstructor;
    limit: NumberConstructor;
    query: ObjectConstructor;
    isRecent: BooleanConstructor;
    hideItems: {
        type: FunctionConstructor;
        default: null;
    };
    strategy: {
        type: StringConstructor;
    };
}>> & Readonly<{}>, {
    isRecent: boolean;
    hideData: unknown[];
    hideItems: Function;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
