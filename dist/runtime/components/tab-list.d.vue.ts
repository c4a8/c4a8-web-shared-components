declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    list: ArrayConstructor;
    tabs: BooleanConstructor;
    left: {
        default: null;
    };
    variant: StringConstructor;
}>, {}, {
    smallVariant: string;
    showLeftArrow: boolean;
    showRightArrow: boolean;
    currentIndex: number;
    currentTabId: string;
}, {
    leftValue(): boolean;
    columnClassList(): string[];
    variantClass(): string;
    classList(): string[];
    listClassList(): string[];
    isSmall(): boolean;
    hideContainer(): boolean;
}, {
    canScrollLeft(): boolean | undefined;
    canScrollRight(): boolean | undefined;
    tabClassList(index: any): string[];
    ariaSelected(index: any): boolean;
    boxClassList(tab: any): string[];
    isLink(tab: any): any;
    linkAttributes(tab: any, index: any): {};
    handleContentSwitch(id: any): void;
    handleClick(e: any): void;
    handleScroll(): void;
    getArrowOffset(): any;
    scrollToTab(index: any): void;
    scrollToNext(): void;
    scrollToPrevious(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    list: ArrayConstructor;
    tabs: BooleanConstructor;
    left: {
        default: null;
    };
    variant: StringConstructor;
}>> & Readonly<{}>, {
    left: null;
    tabs: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
