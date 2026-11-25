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
    getIdToken: FunctionConstructor;
    getFlyoutId: FunctionConstructor;
    openFlyout: {
        type: NumberConstructor;
        default: null;
    };
    inTransition: BooleanConstructor;
    renderMegaMenu: BooleanConstructor;
    crawlableMenus: BooleanConstructor;
}>, {}, {}, {
    navigation(): Record<string, any> | undefined;
}, {
    headerItemClasses(item: any): any[];
    headerLinkClasses(item: any, index: any): any[];
    getListClasses(item: any, index: any, classes: any): any[];
    isLinkListHidden(item: any, index: any): boolean;
    isMenuButton(item: any): boolean;
    isMenuOpen(item: any, index: any): boolean;
    getMenuId(item: any, index: any, listIndex: any): string | null;
    getMenuControls(item: any, index: any): string;
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
    getIdToken: FunctionConstructor;
    getFlyoutId: FunctionConstructor;
    openFlyout: {
        type: NumberConstructor;
        default: null;
    };
    inTransition: BooleanConstructor;
    renderMegaMenu: BooleanConstructor;
    crawlableMenus: BooleanConstructor;
}>> & Readonly<{}>, {
    inTransition: boolean;
    renderMegaMenu: boolean;
    crawlableMenus: boolean;
    openFlyout: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
