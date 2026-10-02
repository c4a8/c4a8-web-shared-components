declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    headline: ObjectConstructor;
    entries: ArrayConstructor;
    index: NumberConstructor;
    spacing: StringConstructor;
    width: StringConstructor;
}>, {}, {
    entriesWithState: never[];
}, {
    style(): string | null;
    classList(): (string | undefined)[];
    headlineClasses(): string;
    headlineLevel(): any;
}, {
    getDelay(entry: any): string;
    handleClick(entry: any): void;
    getElementByRef(entry: any): any;
    afterLeave(entry: any): void;
    enter(entry: any): void;
    leave(entry: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    headline: ObjectConstructor;
    entries: ArrayConstructor;
    index: NumberConstructor;
    spacing: StringConstructor;
    width: StringConstructor;
}>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
