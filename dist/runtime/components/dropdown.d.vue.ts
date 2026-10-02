declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    label: StringConstructor;
    items: ArrayConstructor;
    filterable: {
        default: null;
    };
    hasAnimation: {
        default: null;
    };
    index: NumberConstructor;
}>, {}, {
    activeSelection: never[];
    isMounted: boolean;
    isOpen: boolean;
    filterText: string;
    minCharsToFilter: number;
}, {
    isStorybook(): boolean;
    teleportSelector(): "[id=\"app\"]";
    dropdownLabelClasses(): string[];
    parsedItems(): any;
    filteredItems(): any;
    filterableValue(): boolean;
    style(): string;
}, {
    initActiveSelection(): void;
    updateUtilityAnimation(): void;
    resetSelection(): void;
    applySelection(): void;
    handleSelection(selection: any): void;
    toggleDropdown(): void;
    closeModal(): void;
    modalOpened(): void;
    modalClosed(): void;
    toggleIconClasses(selection: any): string[];
    handleMouseEnter(e: any): any;
    handleMouseDown(e: any): any;
    handleClick(e: any): any;
    getCheckboxId(item: any, index: any): string;
    resetFilterText(): void;
    resetModal(): void;
    handleResize(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    label: StringConstructor;
    items: ArrayConstructor;
    filterable: {
        default: null;
    };
    hasAnimation: {
        default: null;
    };
    index: NumberConstructor;
}>> & Readonly<{}>, {
    hasAnimation: null;
    filterable: null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
