declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    items: ArrayConstructor;
    bgColor: StringConstructor;
    component: StringConstructor;
    lazy: BooleanConstructor;
}>, {
    openSidebarModal?: undefined;
} | {
    openSidebarModal: (sectionTitle: any) => void;
}, {
    clientWidth: null;
    resizeObserver: null;
}, {
    jsonItems(): any;
    classList(): string[];
    style(): string[];
}, {
    updateClientWidth(): void;
    handleItemClick(item: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    items: ArrayConstructor;
    bgColor: StringConstructor;
    component: StringConstructor;
    lazy: BooleanConstructor;
}>> & Readonly<{}>, {
    lazy: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
