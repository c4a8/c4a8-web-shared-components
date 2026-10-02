declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    lowerLang: StringConstructor;
    activeNavigation: ObjectConstructor;
    handleMouseOver: FunctionConstructor;
    handleClick: FunctionConstructor;
    getHref: FunctionConstructor;
    getTarget: FunctionConstructor;
    linkLists: ObjectConstructor;
    getId: FunctionConstructor;
    inTransition: BooleanConstructor;
    renderMegaMenu: BooleanConstructor;
}>, {}, {}, {
    navigation(): Record<string, any> | undefined;
}, {
    headerItemClasses(item: any): any[];
    headerLinkClasses(item: any, index: any): any[];
    getListClasses(item: any, index: any, classes: any): any[];
    isLinkListHidden(item: any, index: any): boolean;
    navHighlightClasses(item: any, index: any): string[];
    headerProductListClasses(item: any, index: any): any[];
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    lowerLang: StringConstructor;
    activeNavigation: ObjectConstructor;
    handleMouseOver: FunctionConstructor;
    handleClick: FunctionConstructor;
    getHref: FunctionConstructor;
    getTarget: FunctionConstructor;
    linkLists: ObjectConstructor;
    getId: FunctionConstructor;
    inTransition: BooleanConstructor;
    renderMegaMenu: BooleanConstructor;
}>> & Readonly<{}>, {
    inTransition: boolean;
    renderMegaMenu: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
