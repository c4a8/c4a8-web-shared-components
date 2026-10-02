declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    placeholder: StringConstructor;
    endpoint: StringConstructor;
    language: StringConstructor;
}>, {}, {
    search: null;
    store: null;
    results: null;
    maxResults: number;
    searchExpanded: boolean;
}, {
    classList(): string[];
    limitedResults(): any;
}, {
    handleEnter(): void | Promise<void>;
    handleSearch(): void;
    initSearchEngine(): void;
    handleSearchBar(): void;
    handleOutsideClick(e: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    placeholder: StringConstructor;
    endpoint: StringConstructor;
    language: StringConstructor;
}>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
