declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    detailColor: StringConstructor;
    clientName: StringConstructor;
    jobId: StringConstructor;
    apiUrl: StringConstructor;
    headlineLevel: StringConstructor;
    headlineClasses: StringConstructor;
    ctaText: StringConstructor;
    ctaButton: BooleanConstructor;
    form: ObjectConstructor;
    googleMaps: ObjectConstructor;
    modalSuccess: ObjectConstructor;
    modalError: ObjectConstructor;
    apiKey: StringConstructor;
    mockApplyUrl: StringConstructor;
    mockDocumentsUrl: StringConstructor;
    lang: StringConstructor;
}>, {
    locale: string;
}, {
    loadingDelay: number;
    sleepDelay: number;
    loading: {};
    hasLoading: boolean;
    hasLoader: boolean;
    hideLoading: boolean;
    api: {};
    hasBack: boolean;
    entryData: {};
    personQuote: null;
    videoInner: null;
    jobIdValue: null;
}, {
    classList(): string[];
    headlineClassList(): string;
    headlineLevelValue(): string;
    style(): string;
    color(): string;
    getUuid(): "job-list-detail-style";
}, {
    init(): void;
    showBackButton(): void;
    loadJob(): void;
    handleCta(): void;
    handleJob(entry: any): void;
    stopLoading(): void;
    update(entryData: any): void;
    loadLocalJobData(): Promise<any>;
    addCustomStyle(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    detailColor: StringConstructor;
    clientName: StringConstructor;
    jobId: StringConstructor;
    apiUrl: StringConstructor;
    headlineLevel: StringConstructor;
    headlineClasses: StringConstructor;
    ctaText: StringConstructor;
    ctaButton: BooleanConstructor;
    form: ObjectConstructor;
    googleMaps: ObjectConstructor;
    modalSuccess: ObjectConstructor;
    modalError: ObjectConstructor;
    apiKey: StringConstructor;
    mockApplyUrl: StringConstructor;
    mockDocumentsUrl: StringConstructor;
    lang: StringConstructor;
}>> & Readonly<{}>, {
    ctaButton: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
