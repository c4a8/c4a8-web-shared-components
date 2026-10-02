declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    clientName: StringConstructor;
    maxItems: StringConstructor;
    detailUrl: ObjectConstructor;
    jobId: StringConstructor;
    tags: StringConstructor;
    lang: StringConstructor;
    team: StringConstructor;
    apiUrl: StringConstructor;
    headlineClasses: StringConstructor;
    headlineLevel: StringConstructor;
    headlineText: StringConstructor;
    expandText: StringConstructor;
    sublineText: StringConstructor;
    sticky: {
        default: null;
    };
}>, {}, {
    translationData: null;
    loadingDelay: number;
    sleepDelay: number;
    loading: {};
    hasLoading: boolean;
    hasLoader: boolean;
    api: {};
    hasExpand: boolean;
    isExpandVisible: boolean;
    entries: never[];
    jobData: {};
    promises: never[];
    isEmpty: boolean;
}, {
    classList(): string[];
    expandClassList(): string[];
    headlineClassValue(): string;
    headlineLevelValue(): string;
    tagList(): string[] | undefined;
}, {
    init(): void;
    handleExpand(): void;
    showJobs(): void;
    loadJobData(): Promise<void>;
    loadJob(multiple: any): void;
    loadJobs(): void;
    handleJobs(data: any): void;
    filterJobs(data: any, orderedList: any): void;
    showExpandButton(): void;
    isAvailableEntry(data: any): boolean;
    stopLoading(): void;
    handleEntryClick(e: any): void;
    getData(element: any): any;
    getDetailUrl(data: any): any;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    clientName: StringConstructor;
    maxItems: StringConstructor;
    detailUrl: ObjectConstructor;
    jobId: StringConstructor;
    tags: StringConstructor;
    lang: StringConstructor;
    team: StringConstructor;
    apiUrl: StringConstructor;
    headlineClasses: StringConstructor;
    headlineLevel: StringConstructor;
    headlineText: StringConstructor;
    expandText: StringConstructor;
    sublineText: StringConstructor;
    sticky: {
        default: null;
    };
}>> & Readonly<{}>, {
    sticky: null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
