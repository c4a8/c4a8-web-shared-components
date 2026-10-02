declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    authorsList: ArrayConstructor;
    noLink: {
        default: null;
    };
    dataLang: {
        default: string;
    };
    dataAuthors: {
        default: null;
    };
    lang: StringConstructor;
}>, {
    locale: string;
}, {}, {
    classList(): string[];
    seperator(): "," | " &";
    authorArray(): unknown[];
    hasDataAndAuthors(): null;
    langValue(): string;
}, {
    authorsSeperator(array: any, element: any): boolean;
    authorStart(array: any, element: any): any;
    authorLink(author: any): string | null;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    authorsList: ArrayConstructor;
    noLink: {
        default: null;
    };
    dataLang: {
        default: string;
    };
    dataAuthors: {
        default: null;
    };
    lang: StringConstructor;
}>> & Readonly<{}>, {
    dataAuthors: null;
    noLink: null;
    dataLang: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
