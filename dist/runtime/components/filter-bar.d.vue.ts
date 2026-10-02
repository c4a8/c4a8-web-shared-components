declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    spacing: StringConstructor;
    items: ArrayConstructor;
    maxBlogPosts: NumberConstructor;
    dataAuthors: ObjectConstructor;
    defaultView: {
        type: StringConstructor;
        default: string;
    };
    onlyView: {
        type: StringConstructor;
    };
    hasHighlight: {
        type: BooleanConstructor;
        default: boolean;
    };
    enabledDropdowns: {
        type: ArrayConstructor;
        default: () => string[];
    };
}>, {
    locale: string;
}, {
    activeView: string;
    views: string[];
    filterDropdowns: never[];
    selections: never[];
    itemStartPoint: number;
    hasClickedOnTag: boolean;
}, {
    hasNoAspectRatio(): true | undefined;
    flatSelections(): never[];
    storedItems(): never[];
    normalizedItems(): any[];
    filteredItems(): any;
    authors(): any;
    topics(): any;
    tags(): any;
    dropdownCollection(): any[];
}, {
    selectTagFromHash(): void;
    addTagToSelection(tag: any, index: any): void;
    getMaxItems(items: any): any;
    handleResize(): void;
    extractPropertyCounts(property: any): any;
    updatePropertyCount(accumulator: any, propertyValue: any): void;
    handleView(view: any): void;
    toggleIconClasses(view: any): string[];
    isArrayEmpty(array: any): boolean;
    isArrayEmptyRecursive(array: any): boolean;
    handleCardTagClicked(event: any): void;
    getTagByName(tagName: any): void;
    handleDropdownChange(selection: any, index: any): void;
    handleDropdownOpened(openedDropdown: any): void;
    clearAllSelections(): void;
    removeSelection(e: any, selection: any): void;
    updateDropdownSelection(selection: any, index: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    spacing: StringConstructor;
    items: ArrayConstructor;
    maxBlogPosts: NumberConstructor;
    dataAuthors: ObjectConstructor;
    defaultView: {
        type: StringConstructor;
        default: string;
    };
    onlyView: {
        type: StringConstructor;
    };
    hasHighlight: {
        type: BooleanConstructor;
        default: boolean;
    };
    enabledDropdowns: {
        type: ArrayConstructor;
        default: () => string[];
    };
}>> & Readonly<{}>, {
    hasHighlight: boolean;
    defaultView: string;
    enabledDropdowns: unknown[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
