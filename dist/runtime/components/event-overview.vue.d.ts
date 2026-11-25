declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    events: ArrayConstructor;
    headline: StringConstructor;
    headlineLevel: StringConstructor;
    overlap: BooleanConstructor;
    hidePast: BooleanConstructor;
    limit: NumberConstructor;
    maxLimit: NumberConstructor;
    moreUrl: StringConstructor;
    order: ArrayConstructor;
    sortBy: ObjectConstructor;
    bgColor: StringConstructor;
    color: StringConstructor;
    timeColor: StringConstructor;
}>, {}, {
    translationData: null;
    defaultLimit: number;
    maxLimitDefault: number;
    showMore: boolean;
    filesValue: never[];
}, {
    classList(): (string | null)[];
    lastIndex(): number;
    limitValue(): number;
    maxLimitValue(): number | undefined;
    eventsValue(): unknown[];
    hasMore(): boolean;
    query(): {
        where: {
            eventid: {
                IN: unknown[];
            };
        };
        path: string;
    };
    sort(): Record<string, any>;
    hideItemsValue(): ((item: any) => boolean) | null;
}, {
    updatedEvent(event: any): any;
    isVisible(index: any): boolean;
    handleShowMore(): void;
    updateFiles(files: any): true | undefined;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    events: ArrayConstructor;
    headline: StringConstructor;
    headlineLevel: StringConstructor;
    overlap: BooleanConstructor;
    hidePast: BooleanConstructor;
    limit: NumberConstructor;
    maxLimit: NumberConstructor;
    moreUrl: StringConstructor;
    order: ArrayConstructor;
    sortBy: ObjectConstructor;
    bgColor: StringConstructor;
    color: StringConstructor;
    timeColor: StringConstructor;
}>> & Readonly<{}>, {
    overlap: boolean;
    hidePast: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
